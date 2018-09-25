const arr = new Set('12')
arr.add(4)
arr.add(5)
arr.add(5)
arr.add(1)

arr.clear()
console.log(arr)
arr.delete(1)
console.log(arr.has(1))

const list = [1, 1, 2, 3, 2]
const result = [...new Set(list)]
console.log(result)
