'use strict';

module.exports = app => {
 class UserController extends app.Controller {
    async index(){
      const { ctx } = this
      ctx.body = 'user page'
    }

    async detail(){
      const { ctx } = this;
      ctx.body = ctx.params;
    }

    async addUser(){
      const { ctx } = this
      const rule = {
        name: { type: 'string' },
        status: { type: 'string' },
      };
      ctx.validate(rule);
      const id = await ctx.service.user.userDetail(ctx.params.id);
      ctx.body = {
        id: id,
        status: 200,
        data: ctx.request.body,
      };
    }
 }
 return UserController;
};
