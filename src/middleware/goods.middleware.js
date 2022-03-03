const { goodsValidatorError } = require('../constants/err.type')
const validator = async (ctx, next) => {
    try {
        ctx.verifyParams({
            goods_name: { type: 'string', required: true },
            goods_price: { type: 'number', required: true },
            goods_num: { type: 'number', required: true },
            goods_img: { type: 'string', required: true },
        })
    } catch (err) {
        console.error('商品验证报错', err)
        goodsValidatorError.result = err
        return ctx.app.emit("error", goodsValidatorError, ctx)
    }
    await next()
}

module.exports = {
    validator
}