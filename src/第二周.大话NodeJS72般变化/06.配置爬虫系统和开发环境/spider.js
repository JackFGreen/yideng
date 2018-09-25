const Koa = require('koa')
const router = require('koa-router')()
const axios = require('axios')
const cheerio = require('cheerio')

const app = new Koa()

app.use(router.routes())

router.get('/', async (ctx, next) => {
  // ctx.body = 'Hello World'
  const resp = await axios.get('https://www.jikexueyuan.com/')
  const data = resp.data
  const $ = cheerio.load(data)
  ctx.body = $('.aside-cList>li>div>a').html()
})

app.listen(3000)
