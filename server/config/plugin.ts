import {EggPlugin} from 'egg';

const plugin: EggPlugin = {
    static: true,
    proxy: {
        enable: true,
        package: 'egg-proxy',
    },
    cors: {
        enable: true,
        package: 'egg-cors',
    },
};

export default plugin;
