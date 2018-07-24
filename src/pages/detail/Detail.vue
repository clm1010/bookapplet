<template>
<div>
  <!-- <div>
    图书id:{{bookid}}
  </div> -->
  <book-info :info='info'></book-info>
  <comment-list :comments='comments'></comment-list>
  <div class='comment' v-if='showAdd'>
    <textarea 
    v-model='comment'
    class='text-area'
    :maxlength='150'
    placeholder='图书评论'
    ></textarea>
    <div class='location'>
      地理位置：
      <switch 
      color='#0084FF'
      :checked='location'
      @change='getGeo'
      ></switch>
      <span class='text-danger'>{{location}}</span>
    </div>
    <div class='phone'>
      手机型号：
      <switch 
      color='#0084FF'
      :checked='phone'
      @change='getPhone'
      ></switch>
      <span class='text-danger'>{{phone}}</span>
    </div>
    <button class='btn' @click='addComment'>评论</button>
  </div>
  <div v-else class='text-footer'>
    未登录或者已经评论过了！
  </div>
  <button  class='btn' open-type='share'>分享好友</button>
</div>
</template>
<script>
import { get, post, showSuccess, showModal } from '@/util'
import BookInfo from '@/components/BookInfo'
import CommentList from '@/components/CommentList'
export default {
  components: {
    BookInfo,
    CommentList
  },
  data () {
    return {
      comments: [],
      userinfo: {},
      bookid: '',
      info: {},
      comment: '',
      location: '',
      phone: ''
    }
  },
  methods: {
    async getDetail () {
      const info = await get('/weapp/bookdetail', { id: this.bookid })
      // 动态设置当前页面的标题
      wx.setNavigationBarTitle({
        title: info.title
      })
      this.info = info
    },
    // 获取评论列表
    async getComments () {
      const comments = await get('/weapp/commentlist', { bookid: this.bookid })
      this.comments = comments.list || []
    },
    // 获取地理位置
    getGeo (e) {
      const ak = 'dGzTkEL4QuDYye1QloGl87q9YwG4TAhA'
      let url = 'http://api.map.baidu.com/geocoder/v2/'
      if (e.target.value) {
        wx.getLocation({
          success: geo => {
            wx.request({
              url,
              data: {
                ak,
                location: `${geo.latitude},${geo.longitude}`,
                output: 'json'
              },
              success: res => {
                if (res.data.status === 0) {
                  this.location = res.data.result.addressComponent.city
                } else {
                  this.location = '未知地点'
                }
              }
            })
          }
        })
      } else {
        this.location = ''
      }
    },
    // 获取手机号
    getPhone (e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync()
        this.phone = phoneInfo.model
        // console.log(phoneInfo)
      } else {
        // 没有选中
        this.phone = ''
      }
    },
    // 点击评论
    async addComment () {
      if (!this.comment) {
        return
      }
      const data = {
        openid: this.userinfo.openId,
        bookid: this.bookid,
        comment: this.comment,
        phone: this.phone,
        location: this.location
      }
      try {
        await post('/weapp/addcomment', data)
        this.comment = ''
        showSuccess('评论已发表！')
        this.getComments()
      } catch (error) {
        showModal('失败', error.msg)
      }
    }
  },
  computed: {
    // 是否显示添加
    showAdd () {
      // 没有登录
      if (!this.userinfo) {
        return false
      }
      // 在评论列表查到有自己的openid 就不显示
      if (this.comments.filter(v => v.openid === this.userinfo.openId).length) {
        return false
      }
      return true
    }
  },
  mounted () {
    // 在所有 页面 的组件内可以通过 this.$root.$mp.query 进行获取。 跳转获取参数
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
    this.getComments()
    const userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  }
}
</script>
<style lang='stylus' scoped>
.comment
  margin-top: 10px;
  .text-area
    width: 90%;
    min-height: 200px;
    margin: 0 auto 10px auto;
    background-color: #eeeeee;
    padding: 10px;
  .location
    margin-top: 10px;
    padding: 5px 10px;
  .phone
    margin-top: 10px;
    padding: 5px 10px;
</style>

