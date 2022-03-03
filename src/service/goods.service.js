const Goods = require('../db/sequelize/models/goods')
class GoodsService {
    async createGoods(goodsObj) {
        let res = await Goods.create(goodsObj)
        return res.dataValues
    }
    async updateGoods(id, goodsObj) {
        let res = await Goods.update(goodsObj, { where: { id } })
        return res[0] > 0 ? true : false //update res[0]返回受影响的行数
    }
    async removeGoods(id) {
        let res = await Goods.destroy({ where: { id } })
        return res > 0 ? true : false //destroy res返回受影响的行数
    }
    async restoreGoods(id) {
        let res = await Goods.restore({ where: { id } })
        return res > 0 ? true : false //destroy res返回受影响的行数
    }
    async queryGoods(queryObj) {
        let { pageSize, pageNum } = queryObj
        let offset = (pageNum - 1) * pageSize
        // let count = await Goods.count()
        // let rows = await Goods.findAll({ offset, limit: pageSize * 1})
        let { count, rows } = await Goods.findAndCountAll({ offset, limit: pageSize * 1 })
        return {
            ...queryObj,
            total: count,
            list: rows
        }
    }
}

module.exports = new GoodsService()