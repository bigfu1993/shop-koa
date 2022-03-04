const Router = require('koa-router')
const router = new Router({ prefix: '/address' })
const { list, add, update, remove, setDefault } = require('../controller/address.controller')
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/validator.middleware')
router.post('/', auth, validator({
    receiver: 'string',
    phone: { type: 'number', format: /^1\d{10}$/ },
    address: 'string'
}), add)
router.get('/', auth, list)
router.put('/:id', auth, validator({
    receiver: 'string',
    phone: { type: 'number', format: /^1\d{10}$/ },
    address: 'string'
}), update)
router.delete('/:id', auth, remove)
router.patch('/:id', auth, setDefault)

module.exports = router