const { findAddress, addAddress, updateAddress, removeAddress, setDefaultAddress } = require('../service/address.service')
class AddressController {
    async list(ctx, next) {
        try {
            let { id: user_id } = ctx.state.user
            let res = await findAddress({ user_id })
            ctx.body = {
                code: 0,
                message: '获取地址列表成功',
                result: res
            }
        } catch (err) {
            console.error('获取地址列表报错', err)
        }
    }
    async add(ctx, next) {
        try {
            let { id: user_id } = ctx.state.user
            let { receiver, phone, address } = ctx.request.body
            let res = await addAddress({ user_id, receiver, phone, address })
            ctx.body = {
                code: 0,
                message: '添加地址成功',
                result: res
            }
        } catch (err) {
            console.error('添加地址报错', err)
        }

    }
    async update(ctx, next) {
        try {
            let { id } = ctx.request.params
            let { receiver, phone, address } = ctx.request.body
            let res = await updateAddress({ id, receiver, phone, address })
            ctx.body = {
                code: 0,
                message: '更新地址成功',
                result: res
            }
        } catch (err) {
            console.error('更新地址报错', err)
        }

    }
    async remove(ctx, next) {
        try {
            let { id } = ctx.request.params
            let res = await removeAddress({ id })
            ctx.body = {
                code: 0,
                message: '删除地址成功',
                result: res
            }
        } catch (err) {
            console.error('删除地址报错', err)
        }
    }
    async setDefault(ctx, next) {
        try {
            let { id: user_id } = ctx.state.user
            let { id } = ctx.request.params
            let res = await setDefaultAddress({ user_id, id })
            ctx.body = {
                code: 0,
                message: '设置默认地址成功',
                result: res
            }
        } catch (err) {
            console.error('设置默认地址报错', err)
        }
    }
}

module.exports = new AddressController()