'use strict';

module.exports = app => {
 class UserController extends app.Controller {
    async index(){
      const { ctx } = this
      ctx.body = 'user page'
    }

    async detail(){
      const { ctx } = this;
      console.log(`ctx.params`, ctx.params)
      ctx.body = ctx.params;
    }
 }
 return UserController;
};
