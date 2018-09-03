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

class Ap extends Functor {
  ap (f) {
    return Ap.of(this.val(f.val))
  }
}
Ap.of = val => new Ap(val)

class Monad extends Functor {
  map (f) {
    return Monad.of(f(this.val))
  }
  join () {
    return this.val
  }
  flatMap (f) {
    return this.map(f).join()
  }
}
Monad.of = val => new Monad(val)

class IO extends Monad {
  map (f) {
    return IO.of(f(this.val()))
  }
  flatMap (f) {
    return super.flatMap(f)
  }
}
IO.of = val => new IO(val)

exports.Functor = Functor
exports.Maybe = Maybe
exports.Either = Either
exports.Ap = Ap
exports.Monad = Monad
exports.IO = IO
