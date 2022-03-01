
const { register, login } = require('../controller/user.controller')
const { userValidator, userVerify, enCrypt } = require('../middleware/user.middleware')
const Router = require('koa-router')
const router = new Router({ prefix: '/users' })

router.post('/register', userValidator, userVerify, enCrypt, register)
router.post('/login', login)

module.exports = router

