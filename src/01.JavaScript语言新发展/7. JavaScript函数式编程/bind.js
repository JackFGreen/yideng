Function.prototype.bind = function () {
  const ctx = arguments[0]
  const _this = this
  return function () {
    _this.call(ctx)
  }
}

function test() {
  console.log(this.val)
}

const a = {
  val: 2
}

test.bind(a)()
