import {Application} from "egg";

module.exports = async (app: Application) => {
    const office = app.config.office;
    if (!office?.home) {
        throw new Error('找不到Office组件！')
    }
};
