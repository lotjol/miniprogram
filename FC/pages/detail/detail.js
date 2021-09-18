
Page({
  data: {
    collapsed: true,
    flag: true
  },
  expand: function () {
    this.setData({
      collapsed: false
    })
  },
  contact: function () {
    wx.makePhoneCall({
      phoneNumber: '13400001234'
    })
  },
  poplayer: function () {
    this.setData({
      flag: false
    });
  },
  cancel: function () {
    this.setData({
      flag: true
    });
  }
});