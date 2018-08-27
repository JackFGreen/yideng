'use strict';

var _praise = require('./praise.js');

var _praise2 = _interopRequireDefault(_praise);

var _jquery = require('../../../../lib/jquery/dist/jquery.js');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const skr = new Thumb('skr')
// skr.point()
// skr.point()

// const skr = new Thumb('type')
// $('.praise').click(() => {
//   skr.point()
// })

_jquery2.default.fn.skr = function (type) {
  console.log('jq', type);
  var skr = new _praise2.default(type);
  return (0, _jquery2.default)(this).click(function () {
    skr.point();
  });
};

(0, _jquery2.default)('.praise').skr('praise').css('color', 'red');