const Orders = require('../db/sequelize/models/order')
class OrderService {
    async createOrder(orderObj) {
        return await Orders.create(orderObj)
    }
    async queryOrder(orderObj) {
        let { status, pageNum, pageSize } = orderObj
        let { count, rows } = await Orders.findAndCountAll({
            attributes: ['goods_info', 'total', 'order_num', 'status'],
            where: { status },
            offset: (pageNum - 1) * pageSize,
            limit: pageSize * 1
        })
        return {
            pageNum,
            pageSize,
            total: count,
            list: rows
        }
    }
    async updateOrder(orderObj) {
        let { status, id } = orderObj
        return await Orders.update({ status }, {
            where: { id }
        })
    }
}
module.exports = new OrderService()