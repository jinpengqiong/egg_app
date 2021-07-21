const dayjs = require('dayjs')
const fs = require('fs')

module.exports = options => {
  return async (ctx,next) => {
    console.log(`options`, options)
    const sTime = Date.now()
    const startTime = dayjs(Date.now()).format('YYYY-MM-DD hh:mm:ss');
    const req = ctx.request
    await next()
    const log = {
      method: req.method,
      url: req.url,
      data: req.body,
      startTime,
      endTime: dayjs(Date.now()).format('YYYY-MM-DD hh:mm:ss'),
      timeLength: Date.now() - sTime
    };
    const data = `${dayjs(Date.now()).format('YYYY-MM-DD hh:mm:ss')}  [httpLog] ${JSON.stringify(log)} \r`;
    fs.appendFileSync(ctx.app.baseDir + '/httpLog.log', data)
  }
}