"use strict"

const Service = require('egg').Service

class UserService extends Service {
  async userDetail(id){
    const {ctx} = this
    return id
  }
}

module.exports = UserService;

