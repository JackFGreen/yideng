const router = require('koa-router')()

const home = require('./home')
const praise = require('./praise')

router.get('/', home)
router.get('/praise', praise)

module.exports = router
