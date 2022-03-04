const { Op } = require('sequelize')
const Carts = require('../db/sequelize/models/carts')
const Goods = require('../db/sequelize/models/goods')
class CartsService {
    async createOrUpdateCarts(cartsObj) {
        let { user_id, goods_id } = cartsObj
        let res = await Carts.findOne({
            where: {
                [Op.and]: {
                    user_id, goods_id
                }
            }
        })
        if (res) {
            await res.increment('number')
            return await res.reload()
        } else {
            return await Carts.create({ user_id, goods_id })
        }

    }
    async findCarts(cartsObj) {
        let { pageSize, pageNum } = cartsObj
        let { count, rows } = await Carts.findAndCountAll({
            attributes: ['id', 'number', 'selected'],
            offset: (pageNum - 1) * pageSize,
            limit: pageSize * 1,
            include: {
                model: Goods,
                as: 'goods_info',
                attributes: ['id', 'goods_name', 'goods_price', 'goods_img'],
            }
        })
        return {
            ...cartsObj,
            total: count,
            list: rows
        }
    }
}
module.exports = new CartsService()