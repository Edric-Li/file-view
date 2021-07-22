// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFile from '../../../app/controller/File';

declare module 'egg' {
  interface IController {
    file: ExportFile;
  }
}
