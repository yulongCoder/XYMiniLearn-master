// pages/37-自定义组件的初体验/components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   * 里面存放的是要从父组件中接收的数据
   */
  properties: {
    // 要接收的数据的名称
    aaa: {
      // type 要接收的数据的类型
      type: String,
      // value 默认值
      value: ""
    },
    tabArray: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

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
     *
     * 5 点击事件触发的时候，触发父组件中的自定义事件，同时传递数据到 父组件
     * - 这里修改子组件中的 tabArray，父组件中的 tabArray 并没有被修改。
     * this.triggerEvent("父组件中自定义事件的名称", 要传递的参数);
     */
    handleItemTap(e) {
      console.log("--------->");
      console.log(e);
      console.log(e.currentTarget.dataset);

      // 2 获取索引
      var index1 = e.currentTarget.dataset.index;
      this.triggerEvent("itemChange", {
        index1
      });
    },
  },

  lifetimes: {
    created: function () {
      console.log("ll created");
    },
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log("ll attached");
    },
    ready: function () {
      console.log("ll ready");
    },
    moved: function () {
      // 在组件实例被移动到节点树另一个位置时执行	
      console.log("ll moved");
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      console.log("ll detached");
    },
  }
})