module.exports = options => {
  return async (ctx, next) => {
    console.log(`options`, options)
    await next();
  }
}