'use strict';

module.exports = app => {
 class UserController extends app.Controller {
    async index(){
      const { ctx, app } = this
      await ctx.render('user.html', { id : 1234567890, name: 'kim'})
    }

    async detail(){
      const { ctx } = this;
      // const res = await ctx.service.user.userDetail(ctx.params.id);
      const res = await ctx.model.UserInfo.findByPk(ctx.params.id);
      ctx.body = res;
    }

    async userList(){
      const { ctx } = this;
      // const res = await ctx.service.user.userList()
      const res = await ctx.model.UserInfo.findAll({
        // where: { id : 10 }
        // limit: 2,
        // offset: 2
      })
      ctx.body = res
    }

    async addUser(){
      const { ctx } = this
      const { name, age, address, comments } = ctx.request.body;
      // const rule = {
      //   name: { type: 'string' },
      //   status: { type: 'string' },
      // };
      // ctx.validate(rule);

      // const res = await ctx.service.user.addUser(ctx.params.name);
      const res = await ctx.model.UserInfo.create({ id: Math.floor(Math.random() * 100), name, age, address, create_date: new Date(), comments });
      ctx.body = res
    }
    async editUser(){
      const { app, ctx } = this
      // const res = await ctx.service.user.editUser(ctx.request.body);
      const user = await ctx.model.UserInfo.findByPk(ctx.request.body.id)
      if(!user){
        ctx.body = {
          status: 404,
          errorInfo: 'id does not exist'
        }
        return
      }
      const  res = await user.update(ctx.request.body);
      ctx.body = {
        status: 200,
        data: res,
      };
    }
    async deleteUser(){
      const { app, ctx } = this
      // const res = await ctx.service.user.deleteUser(ctx.request.body);
      const user = await ctx.model.UserInfo.findByPk(ctx.request.body.id);
      if (!user) {
        ctx.body = {
          status: 404,
          errorInfo: 'id does not exist',
        };
        return;
      }
      const res = await user.destroy(ctx.request.body.id);
      ctx.body = {
        status: 200,
        data: res,
      };
    }
 }
 return UserController;
};
