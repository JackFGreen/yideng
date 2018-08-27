import Thumb from './praise.js'
import $ from '../../../../lib/jquery/dist/jquery.js'

// const skr = new Thumb('skr')
// skr.point()
// skr.point()

// const skr = new Thumb('type')
// $('.praise').click(() => {
//   skr.point()
// })

$.fn.skr = function (type) {
  console.log('jq', type)
  const skr = new Thumb(type)
  return $(this).click(() => {
    skr.point()
  })
}

$('.praise').skr('praise').css('color', 'red')
