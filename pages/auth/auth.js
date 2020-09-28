// pages/auth/auth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getuserinfoHandler(e){
    const {encData, rawData, iv, signature} = e.detail;
    wx.login({
      timeout: 10000,
      success:(res) => {
        const code = res.code;
        console.log(code);
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' +'wxf9072fc16c98ba8a'+ '&secret=' + '1822332bc1eefabe68a6c5f43995be7c' + '&js_code=' + code + '&grant_type=authorization_code',
          data: {},
          header: {
            'content-type': 'json'
          },
          success: function (res) {
            console.log(res);
            const openid = res.data.openid //返回openid
            console.log('openid为' + openid);
          }
        })
        
      }
    })
  }

})