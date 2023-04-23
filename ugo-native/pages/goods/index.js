// pages/goods/index.js
Page({
  goCart() {
    wx.switchTab({
      url: "/pages/cart/index",
    });
  },
  createOrder() {
    wx.navigateTo({
      url: "/pages/order/index",
    });
  },
});
