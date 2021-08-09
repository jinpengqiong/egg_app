'use strict';
const path = require('path')
/** @type Egg.EggPlugin */
module.exports = {
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  notfound: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-notFound'),
  },
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};