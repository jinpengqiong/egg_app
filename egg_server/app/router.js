'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.home.login);
  router.post('/logout', controller.home.logout);
  router.get('/api/getData', controller.api.getData);
  router.get('/user', controller.user.index);
  router.get('/user/userList', controller.user.userList);
  router.get('/user/detail/:id', controller.user.detail);
  router.get('/user/addUser/:name', controller.user.addUser);
  router.post('/user/detail/addUser/:id', controller.user.addUser);
};
