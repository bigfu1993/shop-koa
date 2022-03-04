const errorConstants = require('../constants/err.type')
const validator = (rules, errorKey = 'default', errorBody) => {
    return async (ctx, next) => {
        try {
            ctx.verifyParams(rules)
        } catch (error) {
            console.error('数据验证失败', error)
            let errorTemp = Object.assign({}, errorConstants[errorKey], { result: error }, errorBody)
            return ctx.app.emit('error', errorTemp, ctx)
        }
        await next()
    }
}
module.exports = {
    validator
}