"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    pageHeight: 'auto'
  },
  methods: {
    disableScroll: function disableScroll(ev) {
      this.pageHeight = ev.pageHeight + 'px';
    }
  }
}, {info: {"components":{"search":{"path":"../components/search"}},"on":{"2-0":["search"]}}, handlers: {'2-0': {"search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.disableScroll($event)
      })();
    
  }}}, models: {} });