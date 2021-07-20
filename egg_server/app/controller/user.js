'use strict';

module.exports = app => {
 class UserController extends app.Controller {
    async index(){
      const { ctx } = this
      ctx.body = 'user page'
    }
 }
 return UserController;
};
