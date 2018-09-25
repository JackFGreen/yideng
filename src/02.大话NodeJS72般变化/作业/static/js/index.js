import Thumb from './praise.js'
import $ from '../lib/jquery/dist/jquery.js'
import axios from '../lib/axios/dist/axios.js'

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

function postData(count) {
  axios.post('/api/praise', {
    count
  }).then(res => {
    console.log(res)
  })
}
