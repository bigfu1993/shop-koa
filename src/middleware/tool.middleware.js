
const enCrypto = async (ctx, next) => {
    let { password } = ctx.request.body
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    ctx.request.body.password = hash
    await next()
}
module.exports = {
    enCrypto
}