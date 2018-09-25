const Mocha = require('mocha')

const mocha = new Mocha()
mocha.addFile('./src/02.大话NodeJS72般变化/作业/test/praise.spec.js')
mocha.run(() => {
  console.log('run mocha')
  process.exit()
})
