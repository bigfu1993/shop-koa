
const bcrypt = require('bcryptjs')
const enCrypto = async (ctx, next) => {
    try {
        let { password } = ctx.request.body
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        ctx.request.body.password = hash
    } catch (err) {
        console.error('密码加密出错', err)
    }
    await next()
}
module.exports = {
    enCrypto
}