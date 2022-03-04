const { createOrUpdateCarts, findCarts } = require('../service/carts.service')
class Carts {
    async add(ctx, next) {
        try {
            let { id: user_id } = ctx.state.user
            let { goods_id } = ctx.request.body
            let res = await createOrUpdateCarts({ user_id, goods_id })
            ctx.body = {
                code: 0,
                message: '添加购物车成功',
                result: res
            }
        } catch (err) {
            console.log('添加购物车报错', err)
        }
    }
    async list(ctx, next) {
        try {
            let { pageNum, pageSize } = ctx.request.query
            let res = await findCarts({ pageNum, pageSize })
            ctx.body = {
                code: 0,
                message: '获取购物车列表成功',
                result: res
            }
        } catch (err) {
            console.error("获取购物车列表报错", err)
        }
    }
}
module.exports = new Carts()