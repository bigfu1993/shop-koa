const Koa = require('koa')
const KoaBody = require('koa-body')
const errorHandle = require('./errorHandle')
const app = new Koa()
app.use(KoaBody({
    multipart: true, // 支持文件上传
    // encoding: 'gzip',
}))
// routes 
const user = require('../router/user.route')
app.use(user.routes(), user.allowedMethods())
app.on('error', errorHandle)
module.exports = app