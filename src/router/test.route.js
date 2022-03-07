const Router = require('koa-router')
const router = new Router({ prefix: '/test' })

router.get('/', (ctx, next) => {
    ctx.body = {
        code: 0,
        message: 'get请求成功,abc',
        result: ''
    }
})

module.exports = router