const bcrypt = require('bcryptjs')
const { getUser } = require('../service/user.service')
const { userAlreadyExited, userFormateError, registerError } = require('../constants/err.type')
const userValidator = async (ctx, next) => {
    let { user_name, password } = JSON.parse(ctx.request.body)
    if (!user_name || !password) {
        console.error('用户名或密码为空', ctx.request.body)
        ctx.app.emit('error', userFormateError, ctx)
        return
    }
    await next()
}

const userVerify = async (ctx, next) => {
    // 合理性
    let { user_name, password } = JSON.parse(ctx.request.body)
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

const cryptPassword = async (ctx, next) => {
    let { password } = JSON.parse(ctx.request.body)
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    console.log(salt, hash)
    ctx.request.body.password = hash
    console.log('12==', hash)
    await next()
}
module.exports = {
    userValidator,
    userVerify,
    cryptPassword
}