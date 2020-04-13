// pages/37-自定义组件的初体验/components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: [{
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

  // 页面的 .js 文件中，存放事件回调函数的是放在 data 同层级。
  // 但是组件的方法必须都在 methods 中
  /**
   * 组件的方法列表
   */
  methods: {

    /* 1 绑定点击事件，需要在 这里
     * 2 获取被点击的索引
     * 3 获取原数组
     * 4 对数组循环，给每一个item 选中属性改为 false，给当前的索引项添加激活选中效果
     */
    handleItemTap(e) {
      console.log("--------->");
      console.log(e);
      console.log(e.currentTarget.dataset);

      // 2 获取索引
      var index1 = e.currentTarget.dataset.index;
      const {
        index
      } = e.currentTarget.dataset;
      console.log(index1);
      console.log(index);

      // 3 获取 data 中的数组
      var tabs1 = this.data.tabs;
      // 解构，对复杂类型进行解构的时候，复制了一份变量的引用而已
      let {
        tabs
      } = this.data;
      console.log("list=======");
      console.log(tabs1);

      // [].forEach 方法遍历数组，修改了v，也会导致源数组被修改
      tabs.forEach((v, i) => (i === index) ? v.isActive = true : v.isActive = false);
      console.log(tabs);

      this.setData({
        tabs: tabs1
      });


      /*
       MARK: 上面的是直接对数组进行了修改
       最严谨的做法是重新拷贝一份数组，再对这个数组的备份进行修改
      */
      var str = JSON.stringify(this.data.tabs);
      var array = JSON.parse(str);
      console.log("str--------------");
      console.log(str);
      console.log(array);
    },
  }
})