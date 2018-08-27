class PraiseButton {
  constructor () {
    this.count = 0
  }
  point () {
    this.count++
  }
}

class Thumb extends PraiseButton {
  constructor (type) {
    super()
    this.type = type
  }
  point () {
    super.point()
    console.log(this.type, this.count)
  }
}

export default Thumb
