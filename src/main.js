
const { APP_PORT, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require('./config/config.default')
// console.log(MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB)

const app = require('./app')

app.listen(APP_PORT, () => {
    console.log(`[server] service is starting at port 'http://localhost:${APP_PORT}'`)
})