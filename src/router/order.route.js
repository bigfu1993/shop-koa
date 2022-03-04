const Router = require('koa-router')
const router = new Router({ prefix: '/orders' })
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/validator.middleware')
const { create } = require('../controller/order.controller')

router.post('/', auth, validator({
    address_id: 'int',
    goods_info: 'string',
    total: 'string'
}, 'orderValidatorError'), create)

module.exports = router