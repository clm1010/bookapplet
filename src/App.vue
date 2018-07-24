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

<style lang='stylus'>
html
  color: #333333;
  line-height: 1.5;
.text-footer
  text-align: center;
  font-size: 12px;
  margin-bottom: 20px;
.text-footer
  text-align: center;
  font-size: 14px;
  margin-bottom: 5px;
.text-primary
  color: #0084ff;
.text-danger
  color: #c9302c;
.text-warning
  color: #ec971f;
.btn
  color: #ffffff;
  background-color: #0084ff;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 2rem;
  font-size: 16px;
  width: 100%;
  height: 40px;
  line-height: 40px;
.btn:active
  background-color: #0084ff;
</style>
