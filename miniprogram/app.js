//app.js
App({
  globalData: {
    userInfo: {},
    avatarUrl: ""
  },
  onLaunch: function (option) {
    console.log(option)
    console.log('onLaunch')
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {

      console.info('init')
      wx.cloud.init({
        env: 'dev-jfyd',
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    // 小程序跳转到指定的 TAB
    // wx.switchTab({
    //   url: 'pages/persion/persion'
    // })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log("getSetting res :", res)
        // wx.authorize({
        //   scope: 'scope.record',
        //   success () {
        //     // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        //     // wx.startRecord()
//         boolean scope.userInfo
// 是否授权用户信息，对应接口 wx.getUserInfo

// boolean scope.userLocation
// 是否授权地理位置，对应接口 wx.getLocation, wx.chooseLocation

// boolean scope.address
// 是否授权通讯地址，对应接口 wx.chooseAddress

// boolean scope.invoiceTitle
// 是否授权发票抬头，对应接口 wx.chooseInvoiceTitle

// boolean scope.invoice
// 是否授权获取发票，对应接口 wx.chooseInvoice

// boolean scope.werun
// 是否授权微信运动步数，对应接口 wx.getWeRunData

// boolean scope.record
// 是否授权录音功能，对应接口 wx.startRecord

// boolean scope.writePhotosAlbum
// 是否授权保存到相册 wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum

// boolean scope.camera
// 是否授权摄像头，对应[camera]((camera)) 组件
        //     wx.login();
        //   }
        // });
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log("scope success :", res);
              this.globalData.userInfo=res.userInfo;
              this.globalData.avatarUrl=res.userInfo.avatarUrl;
            },
            fail: res => {
              console.log("getUserInfo fail: ", res)
            }
          })
        }
      }
    });
    console.log("gloubleData: ", this.globalData);
  },
  
  onShow: function(option) {
    console.log('onShow')
  },
  onHide: function(option) {
    console.log('onHide')
  },
  onError: function(option) {
    console.log('onError')
  }
})
