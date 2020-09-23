// pages/goods_list/goods_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"综合",
        isActive:true
      },
      {
        id:1,
        value:"销量",
        isActive:false
      },
      {
        id:2,
        value:"价格",
        isActive:false
      },
    ],

    goods:[
      {
        id:1,
        url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=250&h=250&f=webp&q=90',
        info:'小米10 至尊版 120X 变焦/120W秒充/120Hz屏幕',
        price:'￥5299'
      },
      {
        id:2,
        url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=250&h=250&f=webp&q=90',
        info:'Redmi K30 120Hz弹出全面屏，天玑1000+旗舰处理器',
        price:'￥1999'
      },
      {
        id:3,
        url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=250&h=250&f=webp&q=90',
        info:'小米10 至尊版 120X 变焦/120W秒充/120Hz屏幕',
        price:'￥5299'
      },
      {
        id:4,
        url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=250&h=250&f=webp&q=90',
        info:'Redmi K30 120Hz弹出全面屏，天玑1000+旗舰处理器',
        price:'￥1999'
      },
      {
        id:5,
        url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=250&h=250&f=webp&q=90',
        info:'小米10 至尊版 120X 变焦/120W秒充/120Hz屏幕',
        price:'￥5299'
      },
      {
        id:6,
        url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=250&h=250&f=webp&q=90',
        info:'Redmi K30 120Hz弹出全面屏，天玑1000+旗舰处理器',
        price:'￥1999'
      }

    ]
  },

  onMyEvent: function(e){
      let currentindex = e.detail.index;
      let tabs = this.data.tabs;
      for(let i in tabs){
        if(currentindex == i) { tabs[i].isActive = true; }
        else{ tabs[i].isActive = false; }
      }
      this.setData(
        {tabs:tabs}
      )
      
  },

  onRefresh(){
    //在当前页面显示导航条加载动画
    wx.showNavigationBarLoading(); 
    //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
    wx.showLoading({
      title: '刷新中...',
      
    })
    this.getData();
  },


  getData(){
    setTimeout(() => {
    //隐藏loading 提示框
    wx.hideLoading();
    //隐藏导航条加载动画
    wx.hideNavigationBarLoading();
    //停止下拉刷新
    wx.stopPullDownRefresh();
    }, 1000);

  },

  onPullDownRefresh: function () {
    //调用刷新时将执行的方法
  this.onRefresh();
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})