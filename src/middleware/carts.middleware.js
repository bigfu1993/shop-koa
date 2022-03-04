
const { cartsFormatError } = require('../constants/err.type')
const validator = (rules) => {
    return async (ctx, next) => {
        try {
            ctx.verifyParams(rules)
        } catch (err) {
            console.error('购物车参数报错', err)
            cartsFormatError.result = err
            return ctx.app.emit('error', cartsFormatError, ctx)
        }
        await next()
    }
}
module.exports = {
    validator
}