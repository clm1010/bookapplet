<template>
  <div>
    <card v-for='book of books' :key='book.id' :book='book'></card>
  </div>
</template>
<script>
import {
  get
} from '@/util'
import Card from '@/components/Card'
export default {
  components: {
    Card
  },
  data () {
    return {
      books: []
    }
  },
  methods: {
    async getList () {
      const books = await get('/weapp/booklist')
      this.books = books.list
      console.log(JSON.stringify(this.books))
    }
  },
  mounted () {
    this.getList()
  }
}
</script>
<style lang="scss" scoped>

</style>
