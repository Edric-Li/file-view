// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFile from '../../../app/controller/File';
import ExportHealthCheck from '../../../app/controller/HealthCheck';

declare module 'egg' {
  interface IController {
    file: ExportFile;
    healthCheck: ExportHealthCheck;
  }
}
