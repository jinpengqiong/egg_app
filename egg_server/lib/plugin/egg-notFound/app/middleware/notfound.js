module.exports = options => {
  console.log(`options`, options);
  return async (ctx, next) => {
    await next();
  }
}