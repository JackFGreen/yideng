class Person {
  constructor (name) {
    this.name = name
  }
  say () {
    console.log('My name is ' + this.name)
  }
  static getKind () {
    console.log('Person')
  }
}

class Man extends Person {
  constructor (name) {
    super(name)
    this.arr = []
  }
  say (word) {
    super.say()
    console.log(word)
  }
  set menu (data) {
    this.arr.push(data)
  }
  get menu () {
    return this.arr
  }
}

const xiaoming = new Man('xiaoming')
console.log(xiaoming)
console.log(xiaoming.name)
console.log(xiaoming.say('hhhhh'))

xiaoming.menu = 'add menu'
console.log(xiaoming.menu)

// xiaoming.getKind()
Person.getKind()
