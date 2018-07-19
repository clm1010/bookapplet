<script>
// import {
//   showSuccess
// } from '@/util'
// import qcloud from 'wafer2-client-sdk'
// import config from '@/config'
export default {
  async created () {
    // let user = wx.getStorageSync('userinfo')
    // console.log(user)
    // if (!user) {
    //   // 设置登录地址
    //   qcloud.setLoginUrl(config.loginUrl)
    //   qcloud.login({
    //     success: function (userinfo) {
    //       console.log('登录成功', userinfo)
    //       showSuccess('登录成功')
    //       wx.setStorageSync('userinfo', userinfo)
    //     },
    //     fail: function (err) {
    //       console.log('登录失败', err)
    //     }
    //   })
    // }

    // const res = await get('/weapp/demo')
    // console.log(123, res)
    // wx.request({
    //   url: config.host + '/weapp/demo',
    //   sucess: function (res) {
    //     console.log(res)
    //   }
    // })
    console.log('小程序启动了')
  }
}
</script>

<style>
.btn {
  color: #FFFFFF;
  background-color: #EA5A49;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 2rem;
  font-size: 16px;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.btn:active {
  background-color: #FA5A49;
}
</style>
