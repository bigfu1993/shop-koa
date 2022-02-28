
const Mongoose = require('mongoose')
const { DB_DOMAIN, DB_PORT, DB_NAME } = require('../../config/config.default')
Mongoose.connect(`${DB_DOMAIN}:${DB_PORT}/${DB_NAME}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
Mongoose.connection.once('open', () => {
    console.log('[db] connect success')
})
Mongoose.connection.once('close', () => {
    console.log('[*db*] close success')
})