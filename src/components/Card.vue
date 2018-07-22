<template>
<a :href="detailUrl">
  <div class="book-card">
    <div class="thumb" @click.stop='preview'>
      <img class="img" :src="book.image" modle='aspectFit'>
    </div>
    <div class="detail">
      <div class="row">
        <div class="right text-warning">
          {{book.rate}}<rate :value='book.rate'></rate>
        </div>
        <div class="left text-danger">
          {{book.title}}
        </div>
      </div>
      <div class="row">
        <div class="right text-danger">
          浏览量：{{book.count}}
        </div>
        <div class="left">
          {{book.author}}
        </div>
      </div>
      <div class="row">
        <div class="right">
          {{book.user_info.nickName}}
        </div>
        <div class="left">
          {{book.publisher}}
        </div>
      </div>
    </div>
  </div>
</a>
</template>

<script>
import Rate from '@/components/Rate'
export default {
  components: {
    Rate
  },
  props: {
    book: Array
  },
  data () {
    return {}
  },
  methods: {
    // 点图书图片放大
    preview () {
      wx.previewImage({
        current: this.book.image,
        urls: [this.book.image]
      })
    }
  },
  computed: {
    detailUrl () {
      return '/pages/detail/main?id=' + this.book.id
    }
  }
}
</script>

<style lang="scss" scoped>
.book-card {
  padding: 5px;
  overflow: hidden;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  .thumb {
    width: 90px;
    height: 100px;
    float: left;
    margin: 0 auto;
    overflow: hidden;
    .img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .detail {
    margin-left: 100px;
    .row {
      line-height: 20px;
      margin-bottom: 3px;
      .left {
        margin-right: 80px;
      }
      .right {
        float: right;
      }
    }
  }
}
</style>
