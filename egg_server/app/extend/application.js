exports.A = (app) => {
  app.once('server', (server) => {
    // websocket
    console.log(`server on`, Date.now());
  });
  app.on('error', (err, ctx) => {
    // report error
    console.log(`error`, Date.now());
  });
  app.on('request', (ctx) => {
    // log receive request
    console.log(`request`, Date.now());
  });
  app.on('response', (ctx) => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    console.log(`response used`, used);
    // log total cost
  });
};

exports.B = 11111
