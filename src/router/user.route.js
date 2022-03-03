
const Router = require('koa-router')
const router = new Router({ prefix: '/users' })
const { register, login, changePassword } = require('../controller/user.controller')
const { enCrypto } = require('../middleware/tool.middleware')
const { auth } = require('../middleware/auth.middleware')
const { userValidator, userVerify, loginVerify } = require('../middleware/user.middleware')


router.post('/register', userValidator, userVerify, enCrypto, register)
router.post('/login', userValidator, loginVerify, login)
router.patch('/', auth, enCrypto, changePassword)

module.exports = router

