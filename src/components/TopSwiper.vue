<template>
  <div class='swiper'>
   <swiper
   :indicator-dots='true'
   indicator-color='#CCCCCC'
   indicator-active-color='#0084FF'
   :autoplay='true'
   :interval='5000'
   :duration='1000'
   :circular='true'
   >
  <div v-for='(top, imgIndex) in imgUrls' :key='imgIndex'>
    <swiper-item>
      <img
      @click='bookDetail(img)'
      class='slide-image'
      mode='aspectFit'
      v-for='img in top'
      :src='img.image'
      :key='img.id'
      >
    </swiper-item>
  </div>
   </swiper>
  </div>
</template>
<script>
export default {
  props: {
    tops: Array
  },
  data () {
    return {}
  },
  methods: {
    bookDetail (item) {
      // 点击图片跳转到详情页
      wx.navigateTo({
        url: '/pages/detail/main?id=' + item.id
      })
    }
  },
  computed: {
    imgUrls () {
      // 如果通用 请用chunk函数 比如lodash的chunk方法
      // 轮播图剪切每3个一组
      let res = this.tops
      return [res.slice(0, 3), res.slice(3, 6), res.slice(6)]
    }
  },
  mounted () {
    console.log(this.imgUrls)
  }
}
</script>
<style lang="stylus" scoped>
.swiper {
  margin-top: 5px;
  .slide-image {
    width: 33%;
    height: 250rpx;
  }
}
</style>
