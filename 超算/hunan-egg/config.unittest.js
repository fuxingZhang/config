exports.sequelize = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'esri@123',
  port: 5432,
  database: 'hunan-unittest',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    charset: 'utf8',
    timestamps: true,        //为模型添加 createdAt 和 updatedAt 两个时间戳字段
    underscored: true,      //转换列名的驼峰命名规则为下划线命令规则 
    freezeTableName: true,   //设置为true时，sequelize不会改变表名，否则可能会按其规则有所调整
    paranoid: false          //使用逻辑删除。设置为true后，调用 destroy 方法时将不会删队模型，而是设置一个 deletedAt 列。此设置需要 timestamps=true
  },
  timezone: "+08:00"
};