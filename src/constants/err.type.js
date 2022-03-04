module.exports = {
    validatorError: {
        code: '00001',
        message: '数据规则未通过',
        result: ''
    },
    userFormateError: {
        code: '10001',
        message: '用户名或者密码为空',
        result: ''
    },
    userAlreadyExited: {
        code: '10002',
        message: '用户已经存在',
        result: ''
    },
    registerError: {
        code: '10003',
        message: '用户注册错误',
        result: ''
    },
    userDoseNotExited: {
        code: '10004',
        message: '用户不存在',
        result: ''
    },
    userLoginError: {
        code: '10005',
        message: '用户登陆失败',
        result: ''
    },
    invalidPassword: {
        code: '10006',
        message: '密码不匹配',
        result: ''
    },
    tokenExpiredError: {
        code: '10101',
        message: 'token已过期',
        result: ''
    },
    invalidTokenError: {
        code: '10102',
        message: '无效的token',
        result: ''
    },
    pluginTokenError: {
        code: '10112',
        message: 'token验证出错',
        result: ''

    },
    noAdminPermission: {
        code: '10103',
        message: '没有管理员权限',
        result: ''
    },
    sourceUploadError: {
        code: '10201',
        message: '文件资源上传失败',
        result: ''
    },
    goodsValidatorError: {
        code: '10203',
        message: '商品参数格式错误',
        result: ''
    },
    publishGoodsError: {
        code: '10204',
        message: '发布商品错误',
        result: ''
    },
    invalidGoodsID: {
        code: '10205',
        message: '无效的商品id',
        result: ''
    },
    cartsFormatError: {
        code: '10301',
        message: '购物车数据格式错误',
        result: ''
    },
}