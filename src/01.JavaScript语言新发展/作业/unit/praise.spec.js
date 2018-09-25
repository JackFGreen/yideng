import Thumb from '../js/praise'

describe('Thumb', function () {
  it('constructor', function () {
    const test = new Thumb('test')
    expect(test.count).toBe(0)
    expect(test.type).toBe('test')
    test.point()
    expect(test.count).toBe(1)
  })
})
