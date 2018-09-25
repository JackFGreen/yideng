import Thumb from './praise.js'
import $ from 'jquery'
import axios from 'axios'

$.fn.skr = function(type, fn) {
  console.log('jq', type)
  const skr = new Thumb(type)
  return $(this).click(() => {
    skr.point()
    const count = skr.count
    fn(count)
  })
}

$('.praise').skr('praise', postData).css('color', 'red')

const ajax = axios.create({
  baseURL: 'http://localhost:3000'
})

function postData(count) {
  ajax.post('/api/praise', {
    count
  }).then(res => {
    console.log(res)
  })
}
