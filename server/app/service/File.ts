import {Service} from 'egg';
import * as fetch from 'node-fetch';
import * as fs from 'fs';
import * as path from "path";
import *  as progressStream from 'progress-stream';

type  ConversionType = 'html' | 'pdf' | 'mp4';

/**
 * File url encoding
 * @param fileUrl
 */
export const fileUrlEncode = (fileUrl: string) => new Buffer(fileUrl).toString('base64').replace(/\//g, '-');

/**
 * File Url decoding
 * @param fileUrl
 */
export const fileUrlDecode = (fileUrl: string) => new Buffer(decodeURIComponent(fileUrl)).toString()

const VideoType = ['flv', 'ts', 'asf'];

interface DownloadMap {
    status: 'plan' | 'ready' | 'finish' | 'error',
    extname: string,
    error?: Error,
    percentage?: number,
    filePath: string,
    htmlPath?: string,
}

export default class File extends Service {

    static DownloadMap = new Map<string, DownloadMap>();

    /**
     * Get file extension
     * The main function is to intercept a series of redundant parameters such as query
     * @param fileUrl file url
     */
    getFileExtname(fileUrl: string) {
        let fileExtname = path.extname(fileUrl);
        if (fileExtname?.includes('?')) {
            fileExtname = fileExtname?.substring(0, fileExtname?.indexOf('?'))
        }
        return fileExtname
    }

    /**
     * file download
     * @param fileUrl file url
     * @param forcedOverlay forced overlay, the default is false, if it is true, the same file will be downloaded repeatedly
     */
    download(fileUrl: string, forcedOverlay = false): Promise<string> {
        return new Promise((resolve, reject) => {
            const fileExtname = this.getFileExtname(fileUrl)
            const base64 = fileUrlEncode(fileUrl)

            let fileInfo = File.DownloadMap.get(base64);

            if (!forcedOverlay && fileInfo) {
                resolve(fileInfo.filePath || '')
                return;
            }

            const fileSavePath = path.join(this.app.config.downloadDir, base64 + fileExtname);

            File.DownloadMap.set(base64, {
                status: 'plan',
                extname: fileExtname,
                filePath: fileSavePath
            });

            const task = File.DownloadMap.get(base64);

            if (!task) {
                return;
            }

            const tmpFileSavePath = fileSavePath + ".tmp";

            const fileStream = fs.createWriteStream(tmpFileSavePath)
                .on('error', function (e) {
                    task.error = e;
                    task.status = 'error';
                    reject(e);
                })
                .on('ready', function () {
                    task.status = 'ready';
                })
                .on('finish', function () {
                    task.status = 'finish';
                    fs.renameSync(tmpFileSavePath, fileSavePath);
                    resolve(fileSavePath);
                });

            fetch(fileUrl, {
                method: 'GET',
                headers: {'Content-Type': 'application/octet-stream'},
            }).then(res => {
                let fileSize = res.headers.get("content-length");

                let str = progressStream({
                    length: fileSize,
                    time: 100
                });

                str.on('progress', function (progressData) {
                    task.percentage = Math.round(progressData.percentage);
                });
                res.body.pipe(str).pipe(fileStream);
            }).catch(e => {
                task.status = 'error';
                task.error = e;
            });
        })
    }

    /**
     * Obtain the conversion type according to the file url
     * @param fileUrl
     */
    getConversionType(fileUrl: string): ConversionType {
        const extname = this.getFileExtname(fileUrl).toLowerCase();

        if (extname?.includes('xls')) {
            return 'html';
        }


        if (VideoType.filter(type => extname.includes(type)).length) {
            return 'mp4';
        }
        return 'pdf';
    }

    /**
     * Convert the file according to the file url
     * @param filePath file path
     * @param type conversion type
     */
    async conversionFile(filePath: string, type: ConversionType) {
        if (type === 'html') {
            return this.ctx.service.office.toHtml(filePath);
        }

        if (type === 'pdf') {
            return this.ctx.service.office.toPdf(filePath);
        }

        if (type === 'mp4') {
            return this.ctx.service.video.toMp4(filePath);
        }
    }

    /**
     * Is it an office series file
     * @param filename
     */
    static isOffice(filename: string) {
        return filename.includes('.xls') ||
            filename.includes('.doc') ||
            filename.includes('.ppt');
    }

    /**
     * Combine the transcoded files into an access url
     * @param fileUrl
     * @param filePath
     * @param conversionType
     */
    assemblyFileUrl(fileUrl: string, filePath: string, conversionType: string) {
        const basename = path.basename(fileUrl);
        let relativeOutputDir: string = 'none';
        if (File.isOffice(basename)) {
            relativeOutputDir = 'office';
        }

        if (conversionType === 'mp4') {
            relativeOutputDir = 'video';
        }
        return this.app.config.baseUrl + `/files/${relativeOutputDir}/` + path.basename(filePath)
    }

    /**
     * Conversion
     * @param fileUrl file url
     * @param type conversion type
     */
    async conversion(fileUrl: string, type?: ConversionType) {
        const filePath = await this.download(fileUrl)

        const conversionType = type || this.getConversionType(fileUrl);

        const fileInfo = File.DownloadMap.get(fileUrlEncode(fileUrl));

        const key = conversionType + 'Path';

        const conversionFilePath = fileInfo && fileInfo[key] || await this.conversionFile(filePath, conversionType);

        if (fileInfo && !fileInfo[key]) {
            fileInfo[key] = conversionFilePath
        }

        const assemblyFileUrl = this.assemblyFileUrl(fileUrl, conversionFilePath, conversionType);

        const resolve = (success: boolean, others = {}) => {
            return {
                success: success,
                extname: this.getFileExtname(fileUrl),
                fileUrl: assemblyFileUrl,
                ...others
            }
        }

        if (conversionType === 'html') {
            const html = fs.readFileSync(conversionFilePath)
            return resolve(true, {html: html.toString()})
        }

        return resolve(true)
    }
}
