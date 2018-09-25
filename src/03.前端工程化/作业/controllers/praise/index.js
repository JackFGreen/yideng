const praise = require('koa-router')()

praise
  .get('/', index)

async function index(ctx, next) {
  await ctx.render('index.html', {
    title: 'swig',
    content: 'swig'
  })
}

module.exports = praise
