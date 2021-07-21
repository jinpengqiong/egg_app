'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const cookieValue = ctx.cookies.get('userInfo');
    console.log(`cookieValue`, cookieValue)
    await ctx.render('index.html')
  }
  async login() {
    const { ctx } = this;
    const body = ctx.request.body
    !ctx.cookies.get('userInfo') && ctx.cookies.set('userInfo', JSON.stringify(body))
    ctx.body = {
      status: 200,
      data: body
    }
  }
  async logout() {
    const { ctx } = this;
    ctx.cookies.set('userInfo', undefined);
    ctx.body = '登出成功';
  }
}

module.exports = HomeController;
