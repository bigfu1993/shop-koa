const { createGoods, updateGoods, removeGoods, restoreGoods, queryGoods } = require('../service/goods.service')
const { publishGoodsError, invalidGoodsID } = require('../constants/err.type')
class GoodsController {
    async create(ctx) {
        try {
            let goodsObj = ctx.request.body
            let { createdAt, updatedAt, ...res } = await createGoods(goodsObj)
            ctx.body = {
                code: 0,
                message: '商品添加成功',
                result: res
            }
        } catch (err) {
            console.error('商品添加报错', err)
            return ctx.app.emit('error', publishGoodsError, ctx)
        }
    }
    async update(ctx) {
        try {
            let id = ctx.request.params.id
            let goodsObj = ctx.request.body
            let res = await updateGoods(id, goodsObj)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '商品更新成功',
                    result: ''
                }
            } else {
                return ctx.app.emit('error', invalidGoodsID, ctx)
            }
        } catch (err) {
            console.error('商品更新报错', err)
            return ctx.app.emit('error', invalidGoodsID, ctx)
        }
    }
    async remove(ctx) {
        try {
            let id = ctx.request.params.id
            let res = await removeGoods(id)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '商品下架成功',
                    result: ''
                }
            } else {
                return ctx.app.emit('error', invalidGoodsID, ctx)
            }
        } catch (err) {
            console.error('商品下架报错', err)
        }
    }
    async restore(ctx) {
        try {
            let id = ctx.request.params.id
            let res = await restoreGoods(id)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '商品上架成功',
                    result: ''
                }
            } else {
                return ctx.app.emit('error', invalidGoodsID, ctx)
            }
        } catch (err) {
            console.error('商品上架报错', err)
        }
    }
    async list(ctx) {
        let { pageNum = 1, pageSize = 10 } = ctx.request.query
        try {
            let res = await queryGoods({ pageNum, pageSize })
            ctx.body = {
                code: 0,
                message: '获取列表数据成功',
                result: res
            }
        } catch (err) {
            console.error('商品列表报错', err)
        }
    }
}
module.exports = new GoodsController()