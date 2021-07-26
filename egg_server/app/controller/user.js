'use strict';

module.exports = app => {
 class UserController extends app.Controller {
    async index(){
      const { ctx, app } = this
      await ctx.render('user.html', { id : 1234567890, name: 'kim'})
    }

    async detail(){
      const { ctx } = this;
      const res = await ctx.service.user.userDetail(ctx.params.id);
      console.log(`res`, res)
      ctx.body = res;
    }

    async userList(){
      const { ctx } = this;
      const res = await ctx.service.user.userList()
      ctx.body = res
    }

    async addUser(){
      const { ctx } = this
      // const rule = {
      //   name: { type: 'string' },
      //   status: { type: 'string' },
      // };
      // ctx.validate(rule);

      const res = await ctx.service.user.addUser(ctx.params.name);
      ctx.body = res
    }
 }
 return UserController;
};
