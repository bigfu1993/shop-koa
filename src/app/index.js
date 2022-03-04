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
    parsedMethods: ['PUT', 'POST', 'PATCH', 'DELETE'],
    formidable: {
        uploadDir: path.resolve(__dirname, '../upload'),
        keepExtensions: true
    }
}))

// parameter
const parameter = require('koa-parameter');
app.use(parameter(app))

// routes 
const router = require('../router')
app.use(router.routes(), router.allowedMethods())

// error handler
const errorHandle = require('./errorHandle')
app.on('error', errorHandle)

module.exports = app