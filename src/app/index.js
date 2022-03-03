const Koa = require('koa')
const KoaBody = require('koa-body')
const app = new Koa()
app.use(KoaBody())

// routes 
const router = require('../router')
app.use(router.routes(), router.allowedMethods())

// error handler
const errorHandle = require('./errorHandle')
app.on('error', errorHandle)

module.exports = app