import {Service} from 'egg';
import * as path from "path";
import * as ffmpeg from 'fluent-ffmpeg';

/**
 * Video conversion
 */
export default class Video extends Service {
    /**
     * Output directory
     * @private
     */
    private OutDir = path.join(this.app.config.filesDir, 'video')

    public async toMp4(filePath: string) {
        const basename = path.basename(filePath)
        const fileName = basename.substr(0, basename.indexOf(path.extname(basename))) + '.mp4';
        const outFilePath = path.resolve(this.OutDir, fileName)
        return new Promise((resolve, reject) => {
            ffmpeg(filePath)
                .format('mp4')
                .on('error', (err) => {
                    reject(err)
                })
                .on('end', () => {
                    resolve(outFilePath);
                })
                .save(outFilePath)
        })
    }
}
