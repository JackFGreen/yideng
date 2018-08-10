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
  box.style.transform = `translate(-50%, -50%) rotateY(-${rotateDeg}deg) translateZ(-${moveR}px)`
  frag.appendChild(box)
  n++
}

boxWrap.appendChild(frag)

let startX = 0
let currX = 0
let lastX = 0
let diffX = 0
document.addEventListener('touchstart', e => {
  e.preventDefault
  const touch = e.targetTouches[0]
  startX = touch.clientX
}, false)

document.addEventListener('touchmove', e => {
  e.preventDefault
  const touch = e.targetTouches[0]
  const mvX = touch.clientX

  diffX = mvX - startX
  currX = lastX + diffX

  boxWrap.style.transform = `rotateY(${currX * 360 / l}deg)`
}, false)

document.addEventListener('touchend', e => {
  e.preventDefault
  lastX = currX
}, false)
