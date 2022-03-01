const bcrypt = require('bcryptjs')
const { getUser } = require('../service/user.service')
const { userAlreadyExited, userFormateError, registerError, cryptError } = require('../constants/err.type')
const userValidator = async (ctx, next) => {
    let { user_name, password } = ctx.request.body
    if (!user_name || !password) {
        console.error('用户名或密码为空', ctx.request.body)
        ctx.app.emit('error', userFormateError, ctx)
        return
    }
    await next()
}

const userVerify = async (ctx, next) => {
    // 合理性
    let { user_name, password } = ctx.request.body
    try {
        let res = await getUser({ user_name })
        if (res) {
            console.error('用户已经存在', ctx.request.body)
            ctx.app.emit('error', userAlreadyExited, ctx)
            return
        }
    } catch (error) {
        console.log('获取用户信息错误', error)
        ctx.app.emit('error', registerError, ctx)
        return
    }
    await next()
}

const enCrypt = async (ctx, next) => {
    let { password } = ctx.request.body
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    ctx.request.body.password = hash
    await next()
}
module.exports = {
    userValidator,
    userVerify,
    enCrypt
}