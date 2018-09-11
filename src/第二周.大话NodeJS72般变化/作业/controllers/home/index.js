const home = require('koa-router')()

home.get('/', index)

async function index(ctx, next) {
  const req = ctx.request
  const querystring = req.querystring
  const query = req.query
  ctx.body = `
    <h1>Hello World</h1>
    <p>querystring ${querystring}</p>
    <p>user ${query.user}</p>
    <ul>
      <li><a href="/praise">praise</a></li>
    </ul>
  `
}

module.exports = home
