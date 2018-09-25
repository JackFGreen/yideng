(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./praise.js', '../../../../lib/jquery/dist/jquery.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./praise.js'), require('../../../../lib/jquery/dist/jquery.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.praise, global.jquery);
    global.index = mod.exports;
  }
})(this, function (_praise, _jquery) {
  'use strict';

  var _praise2 = _interopRequireDefault(_praise);

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.skr = function (type) {
    console.log('jq', type);
    var skr = new _praise2.default(type);
    return (0, _jquery2.default)(this).click(function () {
      skr.point();
    });
  };

  (0, _jquery2.default)('.praise').skr('praise').css('color', 'red');
});