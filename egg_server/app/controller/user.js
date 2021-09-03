'use strict';
const md5 = require('md5')
const dayjs = require('dayjs')
const BaseController = require('./base.js')
module.exports = app => {
 class UserController extends BaseController {
    // async index(){
    //   const { ctx, app } = this
    //   // await ctx.render('user.html', { id : 1234567890, name: 'kim'})
    //   ctx.body = 'user page'
    // }

    // async detail(){
    //   const { ctx } = this;
    //   // const res = await ctx.service.user.userDetail(ctx.params.id);
    //   const res = await ctx.model.UserInfo.findByPk(ctx.params.id);
    //   console.log(`res`, res)
    //   if(res){
    //     ctx.body = res;
    //   }else{
    //     ctx.body = {
    //       status: 404,
    //       errorInfo: 'id does not exist',
    //     }
    //   }
    // }

    // async userList(){
    //   const { ctx } = this;
    //   // const res = await ctx.service.user.userList()
    //   const res = await ctx.model.UserInfo.findAll({
    //     // where: { id : 10 }
    //     // limit: 2,
    //     // offset: 2
    //   })
    //   ctx.body = res
    // }

    // async addUser(){
    //   const { ctx } = this
    //   const { name, age, address, comments } = ctx.request.body;
    //   // const rule = {
    //   //   name: { type: 'string' },
    //   //   status: { type: 'string' },
    //   // };
    //   // ctx.validate(rule);

    //   // const res = await ctx.service.user.addUser(ctx.params.name);
    //   const res = await ctx.model.UserInfo.create({ id: Math.floor(Math.random() * 100), name, age, address, create_date: new Date(), comments });
    //   ctx.body = {
    //     status: '200',
    //     data: res
    //   }
    // }
    // async editUser(){
    //   const { app, ctx } = this
    //   // const res = await ctx.service.user.editUser(ctx.request.body);
    //   const user = await ctx.model.UserInfo.findByPk(ctx.request.body.id)
    //   if(!user){
    //     ctx.body = {
    //       status: 404,
    //       errorInfo: 'id does not exist'
    //     }
    //     return
    //   }
    //   const  res = await user.update(ctx.request.body);
    //   ctx.body = {
    //     status: 200,
    //     data: res,
    //   };
    // }
    // async deleteUser(){
    //   const { app, ctx } = this
    //   // const res = await ctx.service.user.deleteUser(ctx.request.body);
    //   const user = await ctx.model.UserInfo.findByPk(ctx.request.body.id);
    //   if (!user) {
    //     ctx.body = {
    //       status: 404,
    //       errorInfo: 'id does not exist',
    //     };
    //     return;
    //   }
    //   const res = await user.destroy(ctx.request.body.id);
    //   ctx.body = {
    //     status: 200,
    //     data: res,
    //   };
    // }
    parseResult(ctx, result){
      return {
        ...ctx.helper.unPick(result.dataValues, ['password']),
        createTime: ctx.helper.timeStamp(result.createTime),
        updateTime: ctx.helper.timeStamp(result.updateTime),
      };
    }
    async tokenGenerator(){
      const { ctx, app } = this
      const { username, password } = ctx.request.body
      const token = app.jwt.sign(
        {
          username,
          password,
        },
        app.config.jwt.secret
      )
      // ctx.session['username'] = 1
      await app.redis.set(username, 1, 'EX', app.config.expireTime);
      return token;
    }
    async register(){
      const { ctx, app } = this
      const params = ctx.request.body
      const result = await ctx.service.user.getUser(params.username);
      if(result){
        this.error('用户已存在');
        return
      }
      const userInfo = await ctx.service.user.addUser({
        ...params,
        password: md5(params.password + app.config.salt),
        createTime: ctx.helper.time(),
        updateTime: ctx.helper.time(),
      });
      if(userInfo){
        this.success({
          ...this.parseResult(ctx, userInfo),
        });
      }else{
        this.error('注册失败');
      }
    }
    async login(){
      const { ctx, app } = this
      const { username, password } = ctx.request.body
      const user = await ctx.service.user.getUser(username, password);
      if (user) {
        const token = await this.tokenGenerator();
        // ctx.session.userId = user.id
        this.success({
          ...this.parseResult(ctx, user),
          token,
        });
      } else {
        this.error('用户已存在');
      }
    }
  async detail(){
    const { ctx } = this
    const username = await ctx.service.user.getUser(ctx.userName);
    const username1 = await app.redis.get(ctx.userName);
    console.log(`username1`, username1)
    if (username) {
      this.success({
        ...this.parseResult(ctx, username),
      })
    } else {
      this.error('用户不存在');
    }
  }
  async allUsersDetail(){
    const { ctx } = this
    const users = await ctx.service.user.getAllUser();
    ctx.body = users;
  }
}
return UserController;
};
