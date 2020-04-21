<template>
  <div class="search-table-wrapper">
    <div class="search-table-inner">
      <div
        class="search-table-book"
        v-for="(book, index) in data"
        :key="index"
        @click="onClick(book)"
      >
        <div class="book-img-wrapper">
          <div class="book-img">
            <ImageView :src="book.cover" />
          </div>
        </div>
        <div class="book-info-wrapper">
          <div class="book-title">{{ book.title }}</div>
          <div class="book-author">{{ book.author }}</div>
          <div class="book-category">{{ book.category }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageView from '@/components/base/ImageView'
export default {
  name: 'SearchTable',
  components: {
    ImageView
  },
  props: {
    data: Array
  },
  data() {
    return {}
  },
  methods: {
    onClick(book) {
      this.$emit('onClick', book)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-table-wrapper {
  padding: 0 16px;
  .search-table-inner {
    .search-table-book {
      border: 1px solid red;
      margin: 15.5px 0;
      display: flex;
      align-items: center;
      .book-img-wrapper {
        .book-img {
          width: 47px;
          height: 68.5px;
        }
      }
      .book-info-wrapper {
        .book-title {
        }
        .book-author {
        }
        .book-category {
        }
      }
    }
  }
}
</style>
