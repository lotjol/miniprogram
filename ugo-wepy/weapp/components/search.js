"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    focused: false,
    placeholder: ''
  },
  methods: {
    goSearch: function goSearch(ev) {
      this.focused = true;
      this.placeholder = '请输入您要搜索的内容'; // 触发父组件自定义事件

      this.$emit('search', {
        pageHeight: wx.getSystemInfoSync().windowHeight
      });
    },
    cancleSearch: function cancleSearch() {
      this.focused = false;
      this.placeholder = ''; // 触发父组件自定义事件

      this.$emit('search', {
        pageHeight: 'auto'
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'9-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goSearch($event)
      })();
    
  }},'9-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cancleSearch($event)
      })();
    
  }}}, models: {} });