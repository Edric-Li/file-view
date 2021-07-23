import {EggAppConfig, PowerPartial} from 'egg';

export default () => {
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

    config.office = {
        // mac
        home: '/Applications/LibreOffice.app/Contents/MacOS/'
    };

    return config;
};
