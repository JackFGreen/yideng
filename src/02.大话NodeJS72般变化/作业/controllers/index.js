const router = require('koa-router')()

const home = require('./home')
const praise = require('./praise')
const api = require('./api')

router.use('/', home.routes())
router.use('/praise', praise.routes())
router.use('/api', api.routes())

module.exports = router
