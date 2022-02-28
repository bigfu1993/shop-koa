const { Sequelize } = require('sequelize');
const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require('../../config/config.default')
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    // const sequelize = new Sequelize(MYSQL_DB, 'bigfu', '000000', {
    host: MYSQL_HOST,
    dialect: 'mysql'
});
seq.authenticate().then(() => {
    console.log('数据库连接成功');
}).catch(error => {
    console.error('数据库连接失败:', error);
})

module.exports = seq