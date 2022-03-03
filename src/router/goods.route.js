const Router = require('koa-router')
const router = new Router({ prefix: '/goods' })
const { create, update, remove, restore, list } = require('../controller/goods.controller')
const { upload } = require('../controller/source.controller')
const { auth, adminPermission } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/goods.middleware')
router.get('/', list)
router.post('/', auth, adminPermission, validator, create)
router.post('/upload', auth, adminPermission, upload)
router.put('/:id', auth, adminPermission, validator, update)
router.post('/:id/off', auth, adminPermission, remove)
router.post('/:id/on', auth, adminPermission, restore)
// router.delete('/:id', auth, adminPermission, remove) //硬删除，从数据库删除

module.exports = router