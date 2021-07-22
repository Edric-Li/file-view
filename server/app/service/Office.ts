import { Service } from 'egg';
import { exec } from 'child_process';

export default class Office extends Service {

  public static getConversionCommand(type:'pdf'|'html', filePath:string, outDir:string) {
    return `soffice --headless --convert-to ${type} --outdir ${outDir} ${filePath}`;
  }

  public static async pptToPdf() {

    return new Promise((resolve, reject) => {
      const command = Office.getConversionCommand('pdf', '/Users/sgout/Nutstore/产品/智慧AR党员活动室/智能AR党员活动室产品介绍.pptx', '/Users/sgout/CodeWarehouse/Temporary/pdf');
      const filePath = '/Users/sgout/CodeWarehouse/Temporary/pdf/李秀亮.docx';
      exec(command, (err, stdout, stderr) => {
        console.log(err, stderr, stdout);
        if (err) {
          return reject(err);
        }
        resolve(filePath);
      });
    });
  }

  public static async excelToHtml() {
    return new Promise((resolve, reject) => {
      const command = Office.getConversionCommand('html', '/Users/sgout/OneDrive/文档/工作交接/栾博兴/交接文档.xlsx', '/Users/sgout/CodeWarehouse/Temporary/pdf');
      const filePath = '/Users/sgout/CodeWarehouse/Temporary/pdf/李秀亮.docx';
      exec(command, (err, stdout, stderr) => {
        console.log(err, stderr, stdout);
        if (err) {
          return reject(err);
        }
        resolve(filePath);
      });
    });
  }
}
