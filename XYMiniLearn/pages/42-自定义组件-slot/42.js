Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArray: [{
      id: 0,
      name: "首页",
      isActive: true,
    }, {
      id: 1,
      name: "原创",
      isActive: false,
    }, {
      id: 2,
      name: "分类",
      isActive: false,
    }, {
      id: 3,
      name: "关于",
      isActive: false
    }]
  },

  // 自定义事件，用来接收子组件传递数据的
  handleItemChange(e) {
    console.log("handleItemChange");
    console.log(e);

    const {
      index1
    } = e.detail;
    console.log(index1);

    console.log("----------->");

    // 循环数组
    let array = this.data.tabArray;
    array.forEach(function (v, i) {
      (i === index1) ? v.isActive = true: v.isActive = false;
    });
    this.setData({
      tabArray: array
    });
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