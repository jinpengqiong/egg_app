'use strict';

const Controller = require('egg').Controller;

class API extends Controller {
  async getData() {
    const { ctx } = this;
    ctx.body = [1, 2, 3, 4, 5];
  }
}

module.exports = API;
