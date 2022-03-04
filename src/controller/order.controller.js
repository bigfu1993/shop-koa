const { createOrder } = require('../service/order.service')
class OrderController {
    async create(ctx) {
        try {
            let { id: user_id } = ctx.state.user
            let { address_id, goods_info, total } = ctx.request.body
            let order_num = 'order' + Date.now()
            let res = await createOrder({ user_id, address_id, goods_info, total, order_num })
            ctx.body = {
                code: 0,
                message: '新增订单成功',
                result: { order_num }
            }
        } catch (err) {
            console.error('新增订单报错', err)
        }
    }
}

module.exports = new OrderController()