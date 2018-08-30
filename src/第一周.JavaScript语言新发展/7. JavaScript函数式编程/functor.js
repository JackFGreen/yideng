class Functor {
  constructor (val) {
    this.val = val
  }
  map (f) {
    return Functor.of(f(this.val))
  }
}
Functor.of = val => new Functor(val)


class Maybe extends Functor {
  map (f) {
    return this.val ? Maybe.of(f(this.val)) : Maybe.of(null)
  }
}
Maybe.of = val => new Maybe(val)

class Either extends Functor {
  constructor (left, right) {
    super()
    this.left = left
    this.right = right
  }
  map (f) {
    return this.right ? Either.of(this.left, f(this.right)) : Either.of(f(this.left), this.right)
  }
}
Either.of = (left, right) => new Either(left, right)

exports.Functor = Functor
exports.Maybe = Maybe
exports.Either = Either
