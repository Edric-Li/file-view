import {Controller} from 'egg';

export default class File extends Controller {
    public async conversion() {
        const {ctx} = this;
        const {url} = ctx.query;
        ctx.body = await ctx.service.file.conversion(url)
    }

    public async upload() {
        const {ctx} = this;
        ctx.body = await ctx.service.file.upload();
    }
}
