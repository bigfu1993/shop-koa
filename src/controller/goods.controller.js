const { createGoods, updateGoods } = require('../service/goods.service')
const { publishGoodsError, invalidGoodsID } = require('../constants/err.type')
class GoodsControl {
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
                    message: '商品修改成功',
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
}
module.exports = new GoodsControl()