import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async conversion() {
    const { ctx } = this;
    const  {url} = ctx.query;
    ctx.body = await ctx.service.file.conversion(url)
  }
}
