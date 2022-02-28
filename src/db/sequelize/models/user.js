const seq = require('../index')
const { DataTypes } = require("sequelize");

const User = seq.define('shop_user', {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一'
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: '密码'
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '是否为管理员 0：非管理员，1：管理员'
    }
})
// 强制同步数据库（创建数据表）
// User.sync({ force: true })

module.exports = User

