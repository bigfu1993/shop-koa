const Router = require('koa-router')
const router = new Router({ prefix: '/test' })

router.get('/', async (ctx, next) => {
    try {
        ctx.body = {
            code: 0,
            message: `hello koa!`,
            result: ''
        }
    } catch (error) {
        console.error('error', error)
    }
})

module.exports = router