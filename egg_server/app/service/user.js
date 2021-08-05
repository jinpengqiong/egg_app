"use strict"

const Service = require('egg').Service
const md5 = require('md5')

class UserService extends Service {
  // async userDetail(id) {
  //   const { app } = this;
  //   try {
  //     const res = await app.mysql.get('userInfo', { id })
  //     return res
  //   } catch (error) {
  //     console.log(`userDetail err`, error);
  //     return null;
  //   }
  // }
  // async userList() {
  //   const { ctx, app } = this;
  //   try {
  //     const res = await app.mysql.select('userInfo');
  //     return res;
  //   } catch (error) {
  //     console.log(`userList err`, error);
  //     return null;
  //   }
  // }
  // async addUser(name) {
  //   const { app } = this;
  //   try {
  //     const res = await app.mysql.insert('userInfo', { id: Math.floor(Math.random() * 100), name, age: 33, address: 'Chengdu', create_date: app.mysql.literals.now, comments: 'no comments' });
  //     return res;
  //   } catch (error) {
  //     console.log(`addUser err`, error);
  //     return null;
  //   }
  // }
  // async editUser(params) {
  //   const { app } = this;
  //   try {
  //     const res = await app.mysql.update('userInfo', params);
  //     return res;
  //   } catch (error) {
  //     console.log(`editUser err`, error);
  //     return null;
  //   }
  // }
  // async deleteUser(params) {
  //   const { app } = this;
  //   try {
  //     const res = await app.mysql.delete('userInfo', params);
  //     return res;
  //   } catch (error) {
  //     console.log(`editUser err`, error);
  //     return null;
  //   }
  // }
  async getUser(username, password) {
    const { ctx, app } = this;
    try {
      const _where = password ? { username, password: md5(password + app.config.salt) } : { username };
      const result = await ctx.model.User.findOne({
        where: _where,
      });
      return result;
    } catch (error) {
      console.log(`error`, error)
      return null
    }
  }
  async addUser(params){
    const { ctx } = this;
    try {
      const result = await ctx.model.User.create(params);
      return result;
    } catch (error) {
      console.log(`error`, error);
      return null;
    }
  }
}

module.exports = UserService;

