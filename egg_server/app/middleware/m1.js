module.exports = options => {
  return async (ctx, next) => {
    console.log('m1 started');
    await next()
    console.log('m1 ended');
  }
}