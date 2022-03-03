const path = require('path')
const { sourceUploadError } = require('../constants/err.type')
class SourceController {
    async upload(ctx, next) {
        try {
            let { file } = ctx.request.files
            if (file) {
                ctx.body = {
                    code: 0,
                    message: '文件资源上传成功',
                    result: {
                        url: path.basename(file.path)
                    }
                }
            } else {
                console.error('文件资源上传失败')
                return ctx.app.emit('error', sourceUploadError, ctx)
            }
        } catch (err) {
            console.error('文件资源上传报错', err)
        }
        await next()
    }
}

module.exports = new SourceController()