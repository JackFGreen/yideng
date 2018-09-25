(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./praise.js', '../lib/jquery/dist/jquery.js', '../lib/axios/dist/axios.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./praise.js'), require('../lib/jquery/dist/jquery.js'), require('../lib/axios/dist/axios.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.praise, global.jquery, global.axios);
    global.index = mod.exports;
  }
})(this, function (_praise, _jquery, _axios) {
  'use strict';

  var _praise2 = _interopRequireDefault(_praise);

  var _jquery2 = _interopRequireDefault(_jquery);

  var _axios2 = _interopRequireDefault(_axios);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.skr = function (type, fn) {
    console.log('jq', type);
    var skr = new _praise2.default(type);
    return (0, _jquery2.default)(this).click(function () {
      skr.point();
      var count = skr.count;
      fn(count);
    });
  };

  (0, _jquery2.default)('.praise').skr('praise', postData).css('color', 'red');

  function postData(count) {
    _axios2.default.post('/api/praise', {
      count: count
    }).then(function (res) {
      console.log(res);
    });
  }
});