const jwt = require('jsonwebtoken');
const { createUser, getUser } = require('../service/user.service')
const { registerError } = require('../constants/err.type')
const { JWT_SECRET } = require('../config/config.default')
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
            console.log('创建用户失败', err)
            ctx.app.emit('error', registerError, ctx)
        }
    }
    async login(ctx, next) {
        let { user_name } = ctx.request.body
        try {
            let { password, ...resUser } = await getUser({ user_name })
            ctx.body = {
                code: 0,
                message: '用户登陆成功',
                result: {
                    token: jwt.sign(resUser, JWT_SECRET, { expiresIn: '1d' })
                }
            }
        } catch (err) {
            console.error('用户登陆失败', err)
        }
    }
    async changePassword(ctx, next) {
        // let id = ctx.state.user.id
        // let password = ctx.request.body.password
        // console.log(id, password);
        // let
        ctx.body = 'bigfu'
    }
}

module.exports = new UserController()