// miniprogram/pages/persion/persion.js
// https://developers.weixin.qq.com/miniprogram/dev/extended/weui/download.html
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    manageShow: 'false',
    userInfo: {}
  },

  getOpenId: function() {
    
  },
  goToManageView: function(params) {
    // 获取界面传入的参数
    console.log(params);
    console.log(params.target.dataset);
    
    wx.login({// 登录失效，重新登录
      success (res) {
        console.log("success:", res)
        let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx5d5e047bf5dc2cfa&secret=9c386514cab7478f867313b0132a6f37&js_code='+res.code+'&grant_type=authorization_code';
        wx.request({
          url: url,
          success (res) {
            console.log("success res: ", res);
          },
          fail (res) {
            console.error("success fail: ", res);
          }
        })
      },
      fail (res) {
        console.error("fail:", res)
      }
    })
    
    // 校验登录信息是否失效
    // wx.checkSession({
    //   success (sessionRes) {
    //     //session_key 未过期，并且在本生命周期一直有效
    //     console.log("session info :", sessionRes);
    //   },
    //   fail () {
    //     // session_key 已经失效，需要重新执行登录流程
    //     // 调用login 方法
    //     wx.login({// 登录失效，重新登录
    //       success (res) {
    //         console.log("success:", res)
    //       },
    //       fail (res) {
    //         console.error("fail:", res)
    //       }
    //     })
    //   }
    // })
  },

  onGotUserInfo: function(e) {
    console.log("===============");
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("============"+wx.canIUse('button.open-type.getUserInfo'))
    // 设置title
    wx.setNavigationBarTitle({
      title: "个人中心"
    });
    this.setData({
      manageShow: 'false'
    })
    console.log(this.data.manageShow)
    // 调用云函数
    // wx.cloud.callFunction({
    //   name: 'login',
    //   data: {},
    //   success: res => {
    //     console.log('[云函数] [login] user openid: ', res.result.openid)
    //     app.globalData.openid = res.result.openid
    //     wx.navigateTo({
    //       url: '../userConsole/userConsole',
    //     })
    //   },
    //   fail: err => {
    //     console.error('[云函数] [login] 调用失败', err)
    //     wx.navigateTo({
    //       url: '../deployFunctions/deployFunctions',
    //     })
    //   }
    // })
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