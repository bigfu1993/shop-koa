const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.default')
const { tokenExpiredError, invalidTokenError, pluginTokenError, noAdminPermission } = require('../constants/err.type')
const auth = async (ctx, next) => {
    try {
        const { authorization = '' } = ctx.request.header
        const token = authorization.replace('Bearer ', '')
        let user = jwt.verify(token, JWT_SECRET)
        ctx.state.user = user
    } catch (err) {
        switch (err.name) {
            case 'TokenExpiredError':
                console.log('token已过期', err)
                return ctx.app.emit('error', tokenExpiredError, ctx)
            case 'JsonWebTokenError':
                console.log('无效的token', err)
                return ctx.app.emit('error', invalidTokenError, ctx)
            default:
                console.log('token验证出错')
                return ctx.app.emit('error', pluginTokenError, ctx)
        }
    }
    await next()
}
const adminPermission = async (ctx, next) => {
    let { is_admin } = ctx.state.user
    if (!is_admin) {
        console.error('该用户没有管理员权限', ctx.state.user)
        return ctx.app.emit('error', noAdminPermission, ctx)
    }
    await next()
}

module.exports = {
    auth,
    adminPermission
}