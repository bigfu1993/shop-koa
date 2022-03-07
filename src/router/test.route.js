const Router = require('koa-router')
const router = new Router({ prefix: '/test' })

router.get('/', (ctx, next) => {
    ctx.body = 'test node'
})

module.exports = router