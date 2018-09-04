const events = require('events')
const eventEmitter = new events.EventEmitter()

const TEST = 'test'
const testHandle = () => {
  console.log('test..')
}

eventEmitter.on(TEST, testHandle)
eventEmitter.emit(TEST)

console.log('end...')
