<template>
  <div>
    <top-swiper :tops='tops'></top-swiper>
    <card v-for='book of books' :key='book.id' :book='book'></card>
    <p class="text-footer" v-if="!more">
      没有更多数据
    </p>
  </div>
</template>
<script>
import {
  get
} from '@/util'
import Card from '@/components/Card'
import TopSwiper from '@/components/TopSwiper'
export default {
  components: {
    Card,
    TopSwiper
  },
  data () {
    return {
      books: [],
      page: 0,
      more: true,
      tops: []
    }
  },
  methods: {
    async getList (init) {
      // 分页判断
      if (init) {
        this.page = 0
        this.more = true
      }
      // 小程序 加载动画load
      wx.showNavigationBarLoading()
      const books = await get('/weapp/booklist', {page: this.page})
      // console.log(JSON.stringify(this.books))
      if (books.list.length < 10 && this.page > 0) {
        this.more = false
      }
      if (init) {
        this.books = books.list
        // 停止当前页面下拉刷新
        wx.stopPullDownRefresh()
      } else {
        // 下拉刷新，不能直接覆盖books 而是累加
        this.books = this.books.concat(books.list)
      }
      // 小程序 隐藏导航条加载动画
      wx.hideNavigationBarLoading()
    },
    async getTop () {
      const tops = await get('/weapp/top')
      this.tops = tops.list
    }
  },
  // 小程序监听用户下拉动作
  onPullDownRefresh () {
    this.getList(true)
    this.getTop()
    console.log('下拉动作')
  },
  onReachBottom () {
    if (!this.more) {
      // 没有更多了
      return false
    }
    this.page = this.page + 1
    this.getList()
  },
  mounted () {
    this.getList(true)
    this.getTop()
  }
}
</script>
<style lang="scss" scoped>

</style>
