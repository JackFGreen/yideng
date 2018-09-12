const request = require('supertest')
// const app = require('../app')
const home = require('../controllers/home/index')

// const server = app.listen()

describe('API', () => {
  it('res html', done => {
    request.agent(home)
      .get('/')
      // .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          done()
        }
      })
  })
})
