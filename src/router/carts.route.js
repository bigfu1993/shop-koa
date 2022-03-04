const Router = require('koa-router')
const { list, add } = require('../controller/carts.controller')
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/carts.middleware')
const router = new Router({ prefix: '/carts' })

router.post('/', auth, validator, add)
router.get('/', auth, list)

module.exports = router