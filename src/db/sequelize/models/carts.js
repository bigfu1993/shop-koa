const { DataTypes } = require("sequelize");
const sqe = require('../index')
const Goods = require('./goods')
const Carts = sqe.define('shop_carts', {
    goods_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品id'
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '用户id'

    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品数量',
        defaultValue: 1
    },
    selected: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: '是否选中'

    }
})
// 强制同步数据库（创建数据表）
// Carts.sync({ force: true })
Carts.belongsTo(Goods, {
    foreignKey: 'goods_id',
    as: 'goods_info'
})
module.exports = Carts