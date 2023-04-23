// index.js
Page({
  data: {
    pageHeight: "auto",
  },
  disableScroll(ev) {
    this.setData({ pageHeight: ev.pageHeight + "px" });
  },
});
