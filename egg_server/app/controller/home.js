'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const cookieValue = ctx.cookies.get('userInfo');
    await ctx.render('index.html')
  }
  async login() {
    const { ctx } = this;
    const body = ctx.request.body
    !ctx.cookies.get('userInfo') && ctx.cookies.set('userInfo', JSON.stringify(body))
    if (!ctx.session.user) {
        ctx.session.user = JSON.stringify(body);
    }
    ctx.body = {
      status: 200,
      data: ctx.session.user,
    };
  }
  async logout() {
    const { ctx } = this;
    ctx.cookies.set('userInfo', undefined);
    ctx.session = null;
    ctx.body = '登出成功';
  }
}

module.exports = HomeController;
