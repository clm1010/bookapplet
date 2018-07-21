<template>
  <div>
    图书id:{{bookid}}
  </div>
</template>
<script>
import { get } from '@/util'
export default {
  data () {
    return {
      bookid: ''
    }
  },
  methods: {
    async getDetail () {
      const info = await get('/weapp/bookdetail', { id: this.bookid })
      console.log(info)
    }
  },
  mounted () {
    // 在所有 页面 的组件内可以通过 this.$root.$mp.query 进行获取。
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
  }
}
</script>
<style>
</style>

