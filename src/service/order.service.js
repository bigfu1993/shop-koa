const Order = require('../db/sequelize/models/order')
class OrderService {
    async createOrder(orderObj) {
        return await Order.create(orderObj)
    }
}
module.exports = new OrderService()