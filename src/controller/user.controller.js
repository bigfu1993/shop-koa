const { createUser } = require('../service/user.service')
const { registerError } = require('../constants/err.type')
class UserController {
    async register(ctx, next) {
        let { user_name, password } = ctx.request.body
        try {
            const res = await createUser(user_name, password)
            ctx.body = {
                code: 0,
                message: '用户注册成功',
                result: {
                    id: res.id,
                    user_name: res.user_name
                }
            }
        } catch (err) {
            console.log(err)
            ctx.app.emit('error', registerError, ctx)
        }
    }
    async login(ctx, next) {
        ctx.body = '用户登录成功'
    }
}

module.exports = new UserController()