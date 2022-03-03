const path = require('path')
const Koa = require('koa')
const app = new Koa()

// koa static
const KoaStatic = require('koa-static')
app.use(KoaStatic(path.resolve(__dirname, '../upload')));

// koa body
const KoaBody = require('koa-body')
app.use(KoaBody({
    multipart: true,
    formidable: {
        uploadDir: path.resolve(__dirname, '../upload'),
        keepExtensions: true
    }
}))

// routes 
const router = require('../router')
app.use(router.routes(), router.allowedMethods())

// error handler
const errorHandle = require('./errorHandle')
app.on('error', errorHandle)

module.exports = app