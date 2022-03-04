const { DataTypes } = require("sequelize");
const seq = require('../index')
let Address = seq.define('shop_address', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '用户id'
    },
    phone: {
        type: DataTypes.CHAR(11),
        allowNull: false,
        comment: '用户id'
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '收货地址'
    },
    receiver: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '收货人姓名'
    },
    is_default: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: '是否默认收货地址'
    }
})

// Address.sync({ force: true })
module.exports = Address