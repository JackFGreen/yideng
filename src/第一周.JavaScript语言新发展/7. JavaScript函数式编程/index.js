const Functor = require('./functor').Functor
const Maybe = require('./functor').Maybe
const Either = require('./functor').Either


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
