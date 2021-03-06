// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportFile from '../../../app/service/File';
import ExportOffice from '../../../app/service/Office';
import ExportVideo from '../../../app/service/Video';

declare module 'egg' {
  interface IService {
    file: AutoInstanceType<typeof ExportFile>;
    office: AutoInstanceType<typeof ExportOffice>;
    video: AutoInstanceType<typeof ExportVideo>;
  }
}
