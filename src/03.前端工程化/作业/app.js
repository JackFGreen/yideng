const Koa = require('koa')
const views = require('koa-views')
const static = require('koa-static')
const router = require('./controllers')
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')

const app = module.exports = new Koa()

app.use(cors({
  origin: '*'
}))

app.use(views(__dirname + '/views', {
  map: {
    html: 'swig'
  }
}))
app.use(static(__dirname + '/static'))

app.use(bodyparser())
app.use(router.routes())

if(!module.parent) {
  app.listen(3000)
}
