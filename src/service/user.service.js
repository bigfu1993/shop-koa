
const User = require('../db/sequelize/models/user')
class UserService {
    async createUser(user_name, password) {
        let res = await User.create({ user_name, password })
        return res.dataValues
    }
    async getUser(userObj) {
        const whereOpt = { ...userObj }
        const res = await User.findOne({
            attributes: ['id', 'user_name', 'password', 'is_admin'],
            where: whereOpt
        })
        return res ? res.dataValues : null
    }
}

module.exports = new UserService()