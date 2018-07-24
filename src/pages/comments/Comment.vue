<template>
    <div class='container'>
        <comment-list v-if='userinfo.openId' type='user' :comments='comments'></comment-list>
        <div v-if='userinfo.openId'>
            <div class='comment-title'>我的图书</div>
            <card 
            v-for='(book, indexBook) in books' 
            :key='indexBook'
            :book=book
            ></card>
            <div v-if='!books.length'>暂时还没添加过书籍！</div>
        </div>
    </div>
</template>
<script>
import { get } from '@/util'
import CommentList from '@/components/CommentList'
import Card from '@/components/Card'
export default {
  components: {
    CommentList,
    Card
  },
  data () {
    return {
      comments: [],
      userinfo: {},
      books: []
    }
  },
  methods: {
    async getComments () {
      const comments = await get('/weapp/commentlist', {
        openid: this.userinfo.openId
      })
      // console.log(comments)
      this.comments = comments.list
    },
    async getBooks () {
      const books = await get('/weapp/booklist', {
        openid: this.userinfo.openId
      })
      this.books = books.list
    },
    // 初始方法
    init () {
      wx.showNavigationBarLoading()
      this.getComments()
      this.getBooks()
      wx.hideNavigationBarLoading()
    }
  },
  //   下拉刷新
  onPullDownRefresh () {
    this.init()
    // 停止下拉刷新
    wx.stopPullDownRefresh()
  },
  //  这里如果用 mounted tabbar切换页面当前只会渲染一次，所用用 onShow 每次到当前页，监听页面显示
  onShow () {
    //  判断是否登录
    if (!this.userinfo.openId) {
      let userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        this.userinfo = userinfo
        this.init()
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
.container >>> .comment-list .page-title
      background-color: #EEEEEE;
      color: #0084ff;
      font-size: 16px;
.comment-title
    background-color: #0084ff;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
</style>
