const praise = require('koa-router')()

praise
  .get('/', index)

async function index(ctx, next) {
  await ctx.render('index')
}

module.exports = praise
