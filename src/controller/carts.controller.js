const { createOrUpdateCarts, updateCarts, findCarts, removeCarts, toggleAllCarts } = require('../service/carts.service')
const { cartsFormatError } = require('../constants/err.type')
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
    async update(ctx, next) {
        try {
            let { id } = ctx.request.params
            let { number, selected } = ctx.request.body
            if (number === undefined && selected === undefined) {
                return ctx.app.emit('error', cartsFormatError, ctx)
            }
            let res = await updateCarts({ id, number, selected })
            ctx.body = {
                code: 0,
                message: '修改购物车成功',
                result: res
            }
        } catch (err) {
            console.error('修改购物车报错', err)
        }
    }
    async remove(ctx, next) {
        try {
            let { ids } = ctx.request.body
            let res = await removeCarts(ids)
            ctx.body = {
                code: 0,
                message: '删除购物车成功',
                result: res
            }
        } catch (err) {
            console.error("删除购物车报错", err)
        }
    }
    async toggleAllSelect(ctx, next) {
        try {
            let { id: user_id } = ctx.state.user
            let { state } = ctx.request.body
            let res = await toggleAllCarts({ user_id, state })
            ctx.body = {
                code: 0,
                message: `${state == 0 ? '取消' : ''}全选购物车成功`,
                result: res
            }
        } catch (err) {
            let { state } = ctx.request.body
            console.error(`${state == 0 ? '取消' : ''}全选购物车报错`, err)
        }
    }
}
module.exports = new Carts()