const Router = require('koa-router')
const { list, add, update, remove, toggleAllSelect } = require('../controller/carts.controller')
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/carts.middleware')
const router = new Router({ prefix: '/carts' })

router.post('/', auth, validator({ goods_id: 'number' }), add)
router.get('/', auth, list)
router.patch('/:id', auth, validator({
    number: { type: 'number', required: false },
    selected: { type: 'bool', required: false }
}), update)
router.delete('/', auth, validator({
    ids: { type: 'array', required: true }
}), remove)
router.post('/toggleAllSelect', auth, validator({
    state: { type: 'number', required: true }
}), toggleAllSelect)

module.exports = router