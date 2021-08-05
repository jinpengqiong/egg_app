'use strict';
const md5 = require('md5')
const dayjs = require('dayjs')

module.exports = app => {
 class UserController extends app.Controller {
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
    async tokenGenerator(){
      const { ctx, app } = this
      const { username } = ctx.request.body
      const token = app.jwt.sign({
        username,
      }, app.config.jwt.secret);
      ctx.session['username'] = 1
      return token;
    }
    async register(){
      const { ctx, app } = this
      const params = ctx.request.body
      const result = await ctx.service.user.getUser(params.username);
      if(result){
        ctx.body = {
          status: 500,
          errorInfo: '用户已存在'
        }
        return
      }
      const userInfo = await ctx.service.user.addUser({
        ...params,
        password: md5(params.password + app.config.salt),
        createTime: ctx.helper.time(),
        updateTime: ctx.helper.time(),
      });
      if(userInfo){
        ctx.body = {
          status: 200,
          data: {
            ...ctx.helper.unPick(userInfo.dataValues, ['password']),
            createTime: ctx.helper.timeStamp(userInfo.createTime),
            updateTime: ctx.helper.timeStamp(userInfo.updateTime),
          },
        };
      }else{
        ctx.body = {
          status: 500,
          errorInfo: '注册失败',
        };
      }
    }
    async login(){
      const { ctx, app } = this
      const {username, password} = ctx.request.body
      const user = await ctx.service.user.getUser(username, password);
      if (user) {
        const token = await this.tokenGenerator();
        // ctx.session.userId = user.id
        ctx.body = {
          status: 200,
          data: {
          ...ctx.helper.unPick(user.dataValues, ['password']),
          createTime: ctx.helper.timeStamp(user.createTime),
          updateTime: ctx.helper.timeStamp(user.updateTime),
          token,
          }
        }
      } else {
        ctx.body = {
          status: 500,
          errMsg: '用户不存在'
        }
      }
    }
  async detail(){
    const { ctx } = this
    const username = await ctx.service.user.getUser(ctx.userName.username);
    ctx.body = {
      status: 200,
      data: username,
    };
  }
 }
 return UserController;
};
