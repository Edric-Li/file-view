import {EggAppConfig, EggAppInfo, PowerPartial} from 'egg';
import * as path from "path";

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1626764343615_3526';

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
            path.join(appInfo.baseDir, 'data/files/office')
        ],
        dynamic: true, // If the currently accessed static resource is not cached, the static file will be cached and used in conjunction with `preload`;
        preload: false,
        maxAge: 31536000, // in prod env, 0 in other envs
        buffer: true, // in prod env, false in other envs
    };

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
