import {EggAppConfig, EggAppInfo, PowerPartial} from 'egg';
import * as path from "path";

export default (appInfo: EggAppInfo) => {
    const config: PowerPartial<EggAppConfig> = {};

    // Proxy settings
    config.proxy = {
        host: 'http://localhost:3000', // target host that matched path will be proxy to
        match: /\/onlinePreview/
    }

    // Cross-domain settings
    config.cors = {
        origin: 'http://localhost:3000',
        credentials: true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    // Service base address
    config.baseUrl = 'http://localhost:7001';

    // Data storage directory
    const dataDir = path.join(appInfo.baseDir, 'data')

    // File storage directory
    const filesDir = path.join(dataDir, 'files');

    config.dataDir=dataDir;
    config.filesDir=filesDir;
    config.downloadDir = path.join(filesDir, 'download')
    config.uploadDir = path.join(filesDir, 'upload')

    return config;
};
