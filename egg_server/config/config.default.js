/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1626686398326_5815';

  // add your middleware config here
  config.middleware = [];

  // disabled CSRF settings
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
    root:[path.join(appInfo.baseDir,'app/html'), 'app/view'].join(',')
  };

  config.ejs = {}

  config.session = {
    key: 'EGG_KING_SESS',
    maxAge: 1000*1,
    renew: true
  }

  config.middleware = ['httpLog']

  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '1qaz2wsxQq~',
      database: 'egg',
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    database: 'egg_house',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1qaz2wsxQq~',
    define: {
      timestamps: false,
      freezeTableName: true
    }
  };

  config.jwt = {
    secret: 'This is a token secret',
  };

  config.redis = {
    client:{
      port: 6379,
      host: '127.0.0.1',
      password: '1qaz2wsxQq~',
      db: 0
    }
  };
  config.notfound = {
    exclude: ['/user'],
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: 'RocKim',
    expireTime: 60*60*24
  };



  return {
    ...config,
    ...userConfig,
  };
};
