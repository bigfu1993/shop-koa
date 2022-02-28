const mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    gender: {
        type: Number 
    },
    // email: {
    //     type: String,
    //     require: true
    // }
})
module.exports = mongoose.model('User', userSchema)