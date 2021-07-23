import {Controller} from 'egg';

export default class HealthCheck extends Controller {
    public async check() {
        this.ctx.body = 'ok';
    }
}
