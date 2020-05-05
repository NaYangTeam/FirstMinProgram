// miniprogram/pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    adList: [{
      id: "1",
      url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1638584675,2927678713&fm=26&gp=0.jpg"
    }, {
      id: "1",
      url: "https://image.baidu.com/sehttps://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567831708997&di=88692673de6e29d0f7809dea8b1d7206&imgtype=0&src=http%3A%2F%2Fimg.18183.com%2Fuploads%2Fallimg%2F161116%2F70-161116110253.jpg"
    }, {
      id: "1",
      url: "https://image.baidu.com/sehttps://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567831708997&di=88692673de6e29d0f7809dea8b1d7206&imgtype=0&src=http%3A%2F%2Fimg.18183.com%2Fuploads%2Fallimg%2F161116%2F70-161116110253.jpg"
    }, {
      id: "1",
      url: "https://image.baidu.com/sehttps://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567831708997&di=88692673de6e29d0f7809dea8b1d7206&imgtype=0&src=http%3A%2F%2Fimg.18183.com%2Fuploads%2Fallimg%2F161116%2F70-161116110253.jpg"
    }],
    foodList: [{
      id: "1",
      title: "墨鱼【限时抢购】",
      description: "墨鱼名为淡水名贵鱼，有很高的营养价值【鱼在3斤左右】墨鱼名为淡水名贵鱼，有很高的营养价值【鱼在3斤左右】",
      price: 130,
      salesAndLikeInfo: "月售5 赞1",
      image: "https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=大小姐驾到&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=1091951287,1477805030&os=3134170155,375337431&simid=4159655084,409895823&pn=228&rn=1&di=31130&ln=433&fr=&fmq=1567819815014_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=b4&objurl=http%3A%2F%2Fimg.18183.com%2Fuploads%2Fallimg%2F161116%2F70-161116110253.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined",
      number: ""
    }, {
      id: "2",
      title: "墨鱼【限时抢购】",
      description: "墨鱼名为淡水名贵鱼，有很高的营养价值【鱼在3斤左右】",
      price: 130,
      salesAndLikeInfo: "月售5 赞1",
      number: ""
    }, {
      id: "3",
      title: "墨鱼【限时抢购】",
      description: "墨鱼名为淡水名贵鱼，有很高的营养价值【鱼在3斤左右】",
      price: 130,
      salesAndLikeInfo: "月售5 赞1",
      number: ""
    }, {
      id: "4",
      title: "墨鱼【限时抢购】",
      description: "墨鱼名为淡水名贵鱼，有很高的营养价值【鱼在3斤左右】",
      price: 130,
      salesAndLikeInfo: "月售5 赞1",
      number: ""
    }, {
      id: "5",
      title: "墨鱼【限时抢购】",
      description: "墨鱼名为淡水名贵鱼，有很高的营养价值【鱼在3斤左右】",
      price: 130,
      salesAndLikeInfo: "月售5 赞1",
      number: ""
    }, {
      id: "6",
      title: "墨鱼【限时抢购】",
      description: "墨鱼名为淡水名贵鱼，有很高的营养价值【鱼在3斤左右】",
      price: 130,
      salesAndLikeInfo: "月售5 赞1",
      number: ""
    }, {
      id: "7",
      title: "墨鱼【限时抢购】",
      description: "墨鱼名为淡水名贵鱼，有很高的营养价值【鱼在3斤左右】",
      price: 130,
      salesAndLikeInfo: "月售5 赞1",
      number: ""
    }, {
      id: "8",
      title: "墨鱼【限时抢购】",
      description: "墨鱼名为淡水名贵鱼，有很高的营养价值【鱼在3斤左右】",
      price: 130,
      salesAndLikeInfo: "月售5 赞1",
      number: ""
    }],
    emptMessage: "暂无订单信息"
  },

  // 数量加
  numberAdd: function(e) {
    var foodInfo = e.target.dataset.food;
    var index = e.target.dataset.index;
    this.numberOption(1, index, foodInfo);
  },

  // 数量减
  numberReduce: function(e) {
    var foodInfo = e.target.dataset.food;
    var index = e.target.dataset.index;
    this.numberOption(-1, index, foodInfo);
  },

  // 数量加减
  numberOption: function (option, index, foodInfo) {
    var number = foodInfo.number;
    if (!foodInfo.number) {
      number = 0;
    }
    number = number+option;
    number = number < 0 ? 0 : number;
    number = number > 99 ? number-1 : number;
    this.setData({
      ["foodList["+index+"].number"]: number
    });
  },

  // itemClike
  listItemTap: function() {
    console.log("numberChange");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info("onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.info("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.info("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.info("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.info("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.info("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.info("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.info("onSahreAppMessage");
  }
})