// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left_bar_item:[
      '热门推荐',
      '家用家电',
      '手机数码',
      '母婴用品',
      '美妆护肤',
      '书本书籍',
      '电玩娱乐',
      '在线课程',
      '数据结构',
      '电路理论',
      '编不出来'
    ],

    right_bar_item:[
      {id:1, url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f834e0dcded7308aaedb77b5ee7269c.jpg?w=2452&h=920'},
      {id:2, url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/733138cea0a4d0e77127124cceb91bc3.jpg?thumb=1&w=1533&h=575&f=webp&q=90'},
      {id:3, url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cffcccd38ab20f2cfecc5b5c51a77bb6.jpg?thumb=1&w=1533&h=575&f=webp&q=90'},
      {id:4, url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6d74432da3ee355087e8e9d5eb46057.jpg?thumb=1&w=1533&h=575&f=webp&q=90'},
      {id:5, url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f834e0dcded7308aaedb77b5ee7269c.jpg?w=2452&h=920'},
      {id:6, url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/733138cea0a4d0e77127124cceb91bc3.jpg?thumb=1&w=1533&h=575&f=webp&q=90'},
      {id:7, url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cffcccd38ab20f2cfecc5b5c51a77bb6.jpg?thumb=1&w=1533&h=575&f=webp&q=90'},
      {id:8, url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6d74432da3ee355087e8e9d5eb46057.jpg?thumb=1&w=1533&h=575&f=webp&q=90'},

    ],

    currentIndex: 0
  },
  
  barClick(e){
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentIndex:index
    })
  }

})