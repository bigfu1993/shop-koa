const { orderValidatorError } = require('../constants/err.type')
const validator = (rules) => {
    return async (ctx, next) => {
        try {
            await ctx.verifyParams(rules)
        } catch (error) {
            console.error('订单信息报错', error)
            Object.assign(orderValidatorError, body)
            return ctx.app.emit('error', orderValidatorError, ctx)
        }
        await next()
    }
}

module.exports = {
    validator
}