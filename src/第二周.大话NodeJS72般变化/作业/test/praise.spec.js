const request = require('supertest')
const app = require('../app')
const server = app.listen()

describe('API', () => {
  it('res praise', done => {
    request(server)
      .post('/api/praise')
      .send({
        count: 1
      })
      .expect('Content-Type', /json/)
      .expect(200, {
        code: 200,
        data: {
          count: 1
        },
        message: ''
      }, done)
  })
})
