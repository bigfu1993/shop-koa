const Goods = require('../db/sequelize/models/goods')
class GoodsService {
    async createGoods(goodsObj) {
        let res = await Goods.create(goodsObj)
        return res.dataValues
    }
    async updateGoods(id, goodsObj) {
        let res = await Goods.update(goodsObj, { where: { id } })
        return res[0] > 0 ? true : false
    }
}

module.exports = new GoodsService()