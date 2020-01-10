'use strict';

/** @type Egg.EggPlugin */

exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.mysql = {
  enable: true,
  package: '@eggplugin/mysql',
};

exports.rabbitmq = {
  enable: true,
  package: '@eggplugin/rabbitmq',
};

exports.s3 = {
  enable: true,
  package: '@eggplugin/s3',
};