// pages/demo04/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 111
  },

  // 输入框input事件
  handleInput(e) {
    console.log(e);
    console.log(e.detail.value);
    this.setData({
      num: e.detail.value
    });
  },

  // 按钮点击事件
  handleTap(e) {
    console.log("------->");
    console.log(e.currentTarget.dataset.operation);

    // 获取自定义属性 operation
    const operation = e.currentTarget.dataset.operation;    
    this.setData({
      num: this.data.num + operation
    });

    console.log(this.data.num);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})