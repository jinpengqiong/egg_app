'use strict';
const { A, B } = require('../extend/application')

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const buf = Buffer.alloc(256);
    const len = buf.write('www.runoob.com');
    const { ctx, app } = this;
    A(app);
    const cookieValue = ctx.cookies.get('userInfo');
    await ctx.render('index.html', { B })
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
