
const { register, login } = require('../controller/user.controller')
const { userValidator, userVerify, cryptPassword } = require('../middleware/user.middleware')
const Router = require('koa-router')
const router = new Router({ prefix: '/users' })

router.post('/register', userValidator, userVerify, cryptPassword, register)
router.post('/login', login)

module.exports = router

