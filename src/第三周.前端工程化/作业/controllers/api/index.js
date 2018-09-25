const api = require('koa-router')()
const axios = require('axios')

api
  .post('/praise', postPraise)

async function postPraise(ctx, next) {
  const res = await axios.get('http://192.168.64.2/phptest/koa_test/?count=' + ctx.request.body.count)
  console.log(res.data)
  if (res.data.code === 200) {
    const count = res.data.count
    ctx.body = {
      code: 200,
      data: {
        count
      },
      message: ''
    }
  } else {
    ctx.status = 500
    ctx.body = 'error...'
  }
}

module.exports = api
