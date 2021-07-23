import {EggAppConfig, EggAppInfo, PowerPartial} from 'egg';
import * as path from "path";

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + 'file-view';

    // add your egg config in here
    config.middleware = [];

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };

    config.static = {
        prefix: '/files',
        dir: [
            path.join(appInfo.baseDir, 'data/files'),
        ],
        dynamic: true, // If the currently accessed static resource is not cached, the static file will be cached and used in conjunction with `preload`;
        preload: false,
        maxAge: 31536000, // in prod env, 0 in other envs
        buffer: true, // in prod env, false in other envs
    };

    config.baseUrl = '';

    // Data storage directory
    const dataDir = path.join(appInfo.baseDir, 'data')

    // File storage directory
    const filesDir = path.join(dataDir, 'files');

    config.dataDir = dataDir;
    config.filesDir = filesDir;
    config.downloadDir = path.join(filesDir, 'download')
    config.uploadDir = path.join(filesDir, 'upload')

    config.security = {
        csrf: {
            enable: false
        }
    }

    config.office = {
        home: '/opt/libreoffice7.0/program'
    };

    return {
        ...config,
        ...bizConfig,
    };
};
