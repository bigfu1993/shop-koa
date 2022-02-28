const mongoose = require('mongoose')
let docSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    tag: {
        type: Array,
        require: true
    },
    path: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
})
module.exports = mongoose.model('Doc', docSchema, 'doc')