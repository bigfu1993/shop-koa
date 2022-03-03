const Router = require('koa-router')
const { auth } = require('../middleware/auth.middleware')
const router = new Router({ prefix: '/cart' })

router.post('/', auth, (ctx, next) => {
    ctx.body = ctx.state.user
})

module.exports = router