// components/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    focused: false,
    placeholder: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goSearch() {
      this.setData({
        focused: true,
        placeholder: "请输入您要搜索的内容",
      });

      // 触发父组件自定义事件
      this.triggerEvent("search", {
        pageHeight: wx.getSystemInfoSync().windowHeight,
      });

      // 隐藏tabBar
      wx.hideTabBar();
    },
    cancleSearch() {
      this.setData({
        focused: false,
        placeholder: "",
      });

      // 触发父组件自定义事件
      this.triggerEvent("search", {
        pageHeight: "auto",
      });

      // 显示tabBar
      wx.showTabBar();
    },
  },
});
