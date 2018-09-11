const Koa = require('koa')
const views = require('koa-views')
const static = require('koa-static')
const router = require('./controllers')
// const cors = require('koa2-cors')

const app = new Koa()

// app.use(cors({
//   origin: '*',
//   allowMethods: ['GET', 'POST', 'DELETE']
// }))

app.use(views(__dirname + '/views'))
app.use(static(__dirname + '/static'))

app.use(router.routes())

app.listen(3000)
