"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  methods: {
    goDetail: function goDetail() {
      wx.navigateTo({
        url: '/pages/goods'
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'7-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }}}, models: {} });