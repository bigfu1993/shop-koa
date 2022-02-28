const mongoose = require('mongoose')
let countSchema = new mongoose.Schema({
    key: {
        type: String,
    },
    count: {
        type: Number,
        default: 1
    }
})
module.exports = mongoose.model('Count', countSchema, 'count')