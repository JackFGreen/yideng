class Skr {
  constructor (user) {
    this.user = user
  }
  point () {
    console.log(`${this.user} skr!`)
  }
}

class Finger extends Skr {
  constructor (finger) {
    super(finger)
  }
}

const BigFinger = new Finger('BigFinger')
BigFinger.point()
