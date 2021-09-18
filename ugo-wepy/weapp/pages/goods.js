"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  methods: {
    goCart: function goCart() {
      wx.switchTab({
        url: '/pages/cart'
      });
    },
    createOrder: function createOrder() {
      wx.navigateTo({
        url: '/pages/order'
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goCart($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.createOrder($event)
      })();
    
  }}}, models: {} });