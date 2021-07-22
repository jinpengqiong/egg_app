const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '10s', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const res = await this.ctx.curl('https://api.apiopen.top/getSingleJoke?sid=28654780', {
      dataType: 'json',
    });
    console.log(`res`, res)
    this.ctx.app.cache = res.result;
  }
}

module.exports = UpdateCache;
