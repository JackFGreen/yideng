const boxWrap = document.getElementById('boxWrap')
const frag = document.createDocumentFragment()

let n = 1
const count = 20
const width = 129

const deg = 360 / count
const r = width / Math.tan(count / 180 * Math.PI)
const l = 2 * r * Math.PI

while (n < count + 1) {
  const box = document.createElement('div')
  box.className = 'box box-' + n
  box.style.width = width + 'px'
  box.style.backgroundImage = `url(./images/p${n}.png)`

  const rotateDeg = n * deg
  const moveR = r + 50
  box.style.transform = `translateX(-50%) rotateY(-${rotateDeg}deg) translateZ(-${moveR}px)`
  frag.appendChild(box)
  n++
}

boxWrap.appendChild(frag)

// let start = 0
// let currDeg = 0
// document.addEventListener('touchstart', e => {
//   e.preventDefault
//   const touch = e.targetTouches[0]
//   start = touch.clientX
// }, false)

// document.addEventListener('touchmove', e => {
//   e.preventDefault
//   const touch = e.targetTouches[0]
//   const mvX = touch.clientX
//   const diff = mvX - start
//   console.log(mvX)

//   currDeg = currDeg + mvX / l * 360
//   boxWrap.style.transform = `rotateY(${currDeg}deg)`
// }, false)

// document.addEventListener('touchend', e => {
//   e.preventDefault
//   const touch = e.changedTouches[0]
//   console.log(touch.clientX)
// }, false)
