const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  it('should GET /user/detail', () => {
    return app.httpRequest().get('/user/detail/1213123').expect('{"id":"1213123"}').expect(200);
  });
});
