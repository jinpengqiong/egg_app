module.exports = options => {
  return async (ctx, next) => {
    console.log(`ctx`, ctx)
    await next();
  }
}