module.exports = (options) => {
  return async (ctx, next) => {
    console.log('m2 started');
    await next();
    console.log('m2 ended');
  };
};
