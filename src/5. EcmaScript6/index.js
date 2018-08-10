const eat = {
  getEat () {
    return 'eat'
  }
}
const drink = {
  getDrink () {
    return 'drink'
  }
}

const sunday = Object.create(eat)
console.log(sunday)
console.log(Object.getPrototypeOf(sunday))

Object.setPrototypeOf(sunday, drink)
console.log(sunday)
console.log(Object.getPrototypeOf(sunday))

const monday = {
  __proto__: drink,
  getAll () {
    return super.getDrink()
  }
}
console.log(monday.getAll())
