/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.cluster = {
    listen: {
      port: 7001,
      hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    }
  }

  config.logger = {
    level: 'ERROR',
    consoleLevel: 'INFO',
    dir: '/app/log/hunan-egg',
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569724899362_2766';

  // 是否在启动时更新RSA密钥
  config.updateRsaKeyOnStartup = false;

  // add your middleware config here
  config.middleware = ['xResponseTime', 'errorHandler'];

  /**
   * https://github.com/eggjs/egg-multipart
   */
  config.multipart = {
    fileSize: '10000mb',
    // 白名单
    whitelist: filename => true,
  };

  // sequelize
  config.sequelize = {
    dialect: 'postgres',
    host: '192.168.32.197',
    username: 'postgres',
    password: 'esri@123',
    port: 5432,
    database: 'cloud_hunan',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      charset: 'utf8',
      // dialectOptions: {
      //   collate: 'utf8_general_ci'
      // },
      timestamps: true,        //为模型添加 createdAt 和 updatedAt 两个时间戳字段
      underscored: true,      //转换列名的驼峰命名规则为下划线命令规则 
      freezeTableName: true,   //设置为true时，sequelize不会改变表名，否则可能会按其规则有所调整
      paranoid: false          //使用逻辑删除。设置为true后，调用 destroy 方法时将不会删队模型，而是设置一个 deletedAt 列。此设置需要 timestamps=true
    },
    timezone: "+08:00"
  };

  exports.mysql = {
    client: {
      host: '192.168.32.201',
      port: '3306',
      user: 'root',
      password: 'esri@123',
      database: 'cloud_hunan',
    },
    app: true,
    agent: false,
  };

  // 用裁切脚本机器地址替换下面的IP
  config.queueName = `192.168.32.165_order`;

  config.JWT_SECRET = `zfx_./()|~-=`;

  // 消息队列机器ip地址
  config.rabbitmq = {
    client: {
      url: 'amqp://admin:admin@192.168.32.170',
    },
    app: true,
    agent: false,
  };

  // redis
  config.redis = {
    client: {
      port: 6379,          
      host: '192.168.32.167',   
      password: 'esri@123',
      db: 0
    }
  };

  //s3
  config.s3 = {
    client: {
      accessKeyId: 'CU7BZRITSJMRHZ2GPQMB',
      secretAccessKey: 'PAu4UdHTU9NsYbKPZ7q0nsI8jbCzTRh8R8GycPR4',
      endpoint: 'http://192.168.32.37:8060',
      region: 'cn-north-1',  // 华为云需要region
      s3ForcePathStyle: true  // xsky需要s3ForcePathStyle
    },
    app: true,
    agent: false,
    bucket: "portal"
  };

  // 给善成的mq发送的配置
  config.provider = {
    "endpoint": "http://192.168.32.37:8060",
    "signatureVersion": "v4",
    "region": "",
    "accessKeyId": "CU7BZRITSJMRHZ2GPQMB",
    "secretAccessKey": "PAu4UdHTU9NsYbKPZ7q0nsI8jbCzTRh8R8GycPR4",
    "tiledBucket": "basemap",
    "platform": "",
    "bucket": "datahunan-image",
    "resultBucket": "datahunan-result",
    "storeBucket": "datahuan-store"
  }

  //防止post请求被egg禁用
  config.security = {
    csrf: {
      enable: false
    }
  };

  // add your user config here
  const userConfig = {
    myAppName: 'HunanImage',
  };

  return {
    ...config,
    ...userConfig,
  };
};
