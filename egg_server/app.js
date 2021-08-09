module.exports = app => {
  app.config.coreMiddleWare?.push('notFound')
  console.log(`app.config.coreMiddleWare`, app.config.coreMiddleWare);
}