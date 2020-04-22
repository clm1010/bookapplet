<template>
  <div class="search-list-wrapper">
    <SearchItem
      :icon="category.icon"
      :title="category.title"
      :subTitle="category.subTitle"
      @onClick="showList(category.title, 'category')"
    />
    <SearchItem
      :icon="author.icon"
      :title="author.title"
      :subTitle="author.subTitle"
      @onClick="showList(author.title, 'author')"
    />
    <SearchItem
      :icon="publisher.icon"
      :title="publisher.title"
      :subTitle="publisher.subTitle"
      @onClick="showList(publisher.title, 'publisher')"
    />
    <SearchTable :data="data.list" @onClick="onBookClick" />
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
    data: Object
  },
  computed: {
    category() {
      return this.data.item[0]
    },
    author() {
      return this.data.item[1]
    },
    publisher() {
      return this.data.item[2]
    }
  },
  data() {
    return {}
  },
  methods: {
    showList(text, key) {
      console.log(text, key)
    },
    onBookClick() {}
  }
}
</script>

<style lang="scss" scoped></style>
