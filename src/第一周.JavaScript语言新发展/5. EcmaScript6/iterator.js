const arr = [1, 2, 3]
const ilet = arr[Symbol.iterator]()
console.log(ilet)
console.log(ilet.next())
console.log(ilet.next())
console.log(ilet.next())
console.log(ilet.next())

for (const i of arr) {
  console.log(i)
}
// const iterator = function* () {
//   yield '1'
//   yield '2'
// }
// const r = iterator()
// console.log(r)
// console.log(r.next())
// console.log(r.next())
// console.log(r.next())
