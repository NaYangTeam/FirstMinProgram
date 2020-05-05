//main.js
const app = getApp()

Page({
  data: {
    background: ['/images/ad1.jpg', '/images/ad2.jpg', '/images/ad3.jpg'],
    indicatorDots: true, // 是否显示指示器
    userInfo: {},
    categoryMenu: []
  },

  onClikc: function() {
    console.log("onClikc");
    wx.navigateTo({
      url: '/pages/main/searchView/searchView'
    })
  },

  onLoad: function() {
    console.log("onLoad");
    this.setData({
      categoryMenu: [{src: '/images/menu1.jpeg', name: '菜单'},{src: '/images/menu1.jpeg', name: '菜单'},{src: '/images/menu1.jpeg', name: '菜单'},{src: '/images/menu1.jpeg', name: '菜单'},{src: '/images/menu1.jpeg', name: '菜单'},{src: '/images/menu1.jpeg', name: '菜单'},{src: '/images/menu1.jpeg', name: '菜单'},{src: '/images/menu1.jpeg', name: '菜单'}, {}, {}]
    });
    wx.request({
      url: 'http://106.52.105.162:22761/api/service/manageList',
      method: 'POST',
      data: {},
      success (res) {
        console.log(res.data)
      }
    })
  }

})
