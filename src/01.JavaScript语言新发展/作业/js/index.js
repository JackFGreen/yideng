import Thumb from './praise.js'
import $ from '../../../../lib/jquery/dist/jquery.js'

$.fn.skr = function (type) {
  console.log('jq', type)
  const skr = new Thumb(type)
  return $(this).click(() => {
    skr.point()
  })
}

$('.praise').skr('praise').css('color', 'red')
