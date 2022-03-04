const Router = require('koa-router')
const router = new Router({ prefix: '/orders' })
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/validator.middleware')
const { list, create, update } = require('../controller/orders.controller')

router.post('/', auth, validator({
    address_id: 'int',
    goods_info: 'string',
    total: 'string'
}, 'orderValidatorError'), create)

router.get('/', auth, list)
router.patch('/:id', auth, validator({ status: 'number' }), update)

module.exports = router