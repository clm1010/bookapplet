<template>
  <div class="search-list-wrapper">
    <SearchItem
      v-if="category"
      icon="apps-o"
      :title="category"
      sub-title="Category"
      @onClick="showList(category, 'category')"
    />
    <SearchItem
      v-if="author"
      icon="user-o"
      :title="author"
      sub-title="Author"
      @onClick="showList(author, 'author')"
    />
    <SearchItem
      v-if="publisher"
      icon="newspaper-o"
      :title="publisher"
      sub-title="publisher"
      @onClick="showList(publisher, 'publisher')"
    />
    <SearchTable :data="data.book" @onClick="onBookClick" />
  </div>
</template>

<script>
import SearchItem from './SearchItem'
import SearchTable from './SearchTable'
export default {
  name: 'SearchList',
  components: {
    SearchItem,
    SearchTable
  },
  props: {
    /** 列表数据 */
    data: {
      type: Object,
      default: {}
    }
  },
  computed: {
    category() {
      if (this.data && this.data.category && this.data.category.length > 0) {
        return this.data.category[0].categoryText
      } else {
        return null
      }
    },
    author() {
      if (this.data && this.data.author && this.data.author.length > 0) {
        return this.data.author[0].author
      } else {
        return null
      }
    },
    publisher() {
      if (this.data && this.data.publisher && this.data.publisher.length > 0) {
        return this.data.publisher[0].publisher
      } else {
        return null
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    /** 展示分类点击后的列表 */
    showList(text, key) {
      console.log(text, key)
    },
    /** 图书点击事件 */
    onBookClick(book) {
      console.log(book)
    }
  }
}
</script>

<style lang="scss" scoped></style>
