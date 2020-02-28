<template>
  <div class="home">
    <search-bar :disabled="true" @onClick="onSearchBarClick" />
    <home-card />
    <home-banner
      img="http://www.youbaobao.xyz/book/res/bg.jpg"
      title="MpVue2.0"
      subTitle="立即体验"
      @onClick="onBannerClick"
    />
    <!--
      <image-view
      src="https://www.youbaobao.xyz/mpvue-res/big.jpg"
      round
      mode="scaleToFill"
      height="200px"
    />
    -->
  </div>
</template>

<script>
import SearchBar from '@/components/home/SearchBar'
import HomeCard from '@/components/home/HomeCard'
import ImageView from '@/components/base/ImageView'
import HomeBanner from '@/components/home/HomeBanner'
export default {
  components: {
    SearchBar,
    HomeCard,
    ImageView,
    HomeBanner
  },
  data() {
    return {}
  },
  created() {
    // let app = getApp()
  },
  methods: {
    /**  跳转到搜索页 */
    onSearchBarClick() {},
    /** 点击Banner事件 */
    onBannerClick() {
      console.log('点击Banner事件')
    }
  }
}
</script>

<style lang="scss" scoped></style>
