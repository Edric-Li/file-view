import {Application} from "egg";

module.exports = async (app: Application) => {
    console.log(11111, app.config.office.home)
    const office = app.config.office;
    if (!office?.home) {
        throw new Error('找不到Office组件！')
    }
};
