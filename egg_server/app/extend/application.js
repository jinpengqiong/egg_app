module.exports = (app) => {
  app.once('server', (server) => {
    // websocket
    console.log(`server on`)
  });
  app.on('error', (err, ctx) => {
    // report error
    console.log(`error`)
  });
  app.on('request', (ctx) => {
    // log receive request
    console.log(`request`);
  });
  app.on('response', (ctx) => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    console.log(`response used`, used);
    // log total cost
  });
};
