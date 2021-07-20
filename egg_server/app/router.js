'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/getData', controller.api.getData);
  router.get('/user', controller.user.index);
  router.get('/user/detail/:id', controller.user.detail);
};
