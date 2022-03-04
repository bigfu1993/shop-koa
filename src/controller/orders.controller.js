
const { createOrder, queryOrder, updateOrder } = require('../service/orders.service')
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
    async list(ctx, next) {
        try {
            let { status = 0, pageSize = 10, pageNum = 1 } = ctx.request.query
            let res = await queryOrder({ status, pageSize, pageNum })
            ctx.body = {
                code: 0,
                message: '获取订单列表成功',
                result: res
            }
        } catch (error) {
            console.error('获取订单列表报错', error)
        }
    }
    async update(ctx, next) {
        try {
            let { id } = ctx.request.params
            let { status } = ctx.request.body
            let res = await updateOrder({ id, status })
            ctx.body = {
                code: 0,
                message: '更新订单状态成功',
                result: res
            }
        } catch (error) {
            console.error('更新订单状态报错', error)
        }
    }
}

module.exports = new OrderController()