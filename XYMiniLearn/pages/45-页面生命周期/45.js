// pages/45-页面生命周期/45.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   * 进入后台，跳转到新页面，
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   * onUnload 生命周期函数，监听卸载当前页面，就是关闭当前页面的
   * navigator的下面几个方法 redirect switchTab reLaunch navigateBack 都会触发
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 在 app.json 中配置的 "enablePullDownRefresh": true
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh");
    // 页面的数据，或者效果，重新刷新页面
  },

  /**
   * 页面上拉触底事件的处理函数
   * 需要让页面出现上下滚动才能有，上拉触底
   */
  onReachBottom: function () {
    console.log("onReachBottom");
    // 处理上拉加载下一页数据
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage");
  },

  /**
   * 页面滚动就可以触发
   */
  onPageScroll: function () {
    console.log("onPageScroll");
  },

  /**
   * 页面尺寸发生改变时触发，
   * 因为手机的窗口不像浏览器的窗口可以变大变小，
   * 这里其实指的是手机发生了横屏 竖屏 切换的时候触发
   */
  onResize: function() {
    console.log("onResize");
  },

  /**
   * 1 必须要求当前页面也是 tabBar 页面时，点击tab时触发
   * 2 点击自己的 tab item 的时候才触发
   */
  onTabItemTap: function () {
    console.log("onTabItemTap");
  }


})