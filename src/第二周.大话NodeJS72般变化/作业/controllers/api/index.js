const api = require('koa-router')()

api
  .post('/praise', postPraise)

async function postPraise(ctx, next) {
  ctx.body = {
    code: 200,
    data: {
      count: ctx.request.body.count
    },
    message: ''
  }
}

module.exports = api
