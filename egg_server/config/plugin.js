'use strict';

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
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};