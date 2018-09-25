const Functor = require('./functor').Functor
const Maybe = require('./functor').Maybe
const Either = require('./functor').Either
const Ap = require('./functor').Ap
const Monad = require('./functor').Monad
const IO = require('./functor').IO


function addOne (val) {
  return val + 1
}
const r1 = Functor.of(1).map(addOne)
console.log(r1)


function toUpCase (val) {
  return val.toUpperCase()
}
const r2 = Maybe.of(null).map(toUpCase)
console.log(r2)
const r3 = Maybe.of('maybe').map(toUpCase)
console.log(r3)


function getRes() {
  // return {
  //   data: 'right'
  // }
  return
}
const left = {
  data: 'left'
}
const r4 = Either.of(left, getRes()).map(res => {
  console.log(res)
  return res
})
console.log(r4)

function parseJSON(json) {
  try {
    return Either.of(null, JSON.parse(json))
  } catch (e) {
    return Either.of(e, null)
  }
}
parseJSON()

const r5 = Ap.of(addOne).ap(Functor.of(1))
const r6 = Ap.of(addOne).ap(r5)
console.log(r5)
console.log(r6)


const r7 = Monad.of('monad').flatMap(toUpCase)
console.log(r7)


const fs = require('fs')
function readFile (name) {
  return IO.of(() => {
    return fs.readFileSync(name, 'UTF-8')
  })
}
function print (s) {
  return IO.of(() => {
    return s
  })
}
const r8 = readFile('./user.txt').flatMap(print)
console.log(r8.val())
