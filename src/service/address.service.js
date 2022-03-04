const Address = require('../db/sequelize/models/address')
class AddressService {
    async findAddress(addressObj) {
        return await Address.findAll({
            attributes: ['id', 'receiver', 'phone', 'address', 'is_default'],
            where: addressObj
        })
    }
    async addAddress(addressObj) {
        return await Address.create(addressObj)
    }
    async updateAddress(addressObj) {
        let { id, ...updateData } = addressObj
        return await Address.update(updateData, { where: { id } })
    }
    async removeAddress(addressObj) {
        return await Address.destroy({ where: addressObj })
    }
    async setDefaultAddress(addressObj) {
        let { user_id, id } = addressObj
        await Address.update({ is_default: false }, {
            where: { user_id }
        })
        return await Address.update({ is_default: true }, {
            where: { id }
        })
    }
}

module.exports = new AddressService()