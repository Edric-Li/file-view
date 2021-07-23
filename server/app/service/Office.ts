import {Service} from 'egg';
import {exec} from 'child_process';
import * as path from "path";

/**
 * Office conversion
 */
export default class Office extends Service {

    /**
     * Output directory
     * @private
     */
    private OutDir = path.join(this.app.config.filesDir, 'office')

    /**
     * File conversion based on type and address
     * @param type
     * @param filePath
     * @private
     */
    private async convert(type: 'pdf' | 'html', filePath: string): Promise<string> {
        return new Promise((resolve, reject) => {

            const {office} = this.app.config;
            const command = `${office?.home}/soffice --headless --convert-to ${type} --outdir ${this.OutDir} ${filePath}`;
            const basename = path.basename(filePath)
            const fileName = basename.substr(0, basename.indexOf(path.extname(basename))) + '.' + type;
            const outFilePath = path.resolve(this.OutDir, fileName)

            exec(command, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve(outFilePath);
            });
        });
    }

    /**
     * Convert html
     * @param filePath
     */
    public  toHtml(filePath: string): Promise<string> {
        return this.convert('html', filePath)
    }

    /**
     * Convert pdf
     * @param filePath
     */
    public  toPdf(filePath: string): Promise<string> {
        return this.convert('pdf', filePath)
    }
}
