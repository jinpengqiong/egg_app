class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {

  }

  async didLoad() {
    this.app.config.coreMiddlewares.push('notfound');
  }

  async willReady() {

  }

  async didReady() {

  }

  async serverDidReady() {

  }
}

module.exports = AppBootHook;
