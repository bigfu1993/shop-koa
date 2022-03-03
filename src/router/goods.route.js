const Router = require('koa-router')
const router = new Router({ prefix: '/goods' })
const { create, update } = require('../controller/goods.controller')
const { upload } = require('../controller/source.controller')
const { auth, adminPermission } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/goods.middleware')
router.post('/upload', auth, adminPermission, upload)
router.post('/', auth, adminPermission, validator, create)
router.put('/:id', auth, adminPermission, validator, update)

module.exports = router