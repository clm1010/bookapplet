<template>
  <div class="home">
    <search-bar :disabled="true" @onClick="onSearchBarClick" />
    <home-card />
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
export default {
  components: {
    SearchBar,
    HomeCard,
    ImageView
  },
  data() {
    return {}
  },

  methods: {
    onSearchBarClick() {
      // 跳转到搜索页
    }
  },

  created() {
    // let app = getApp()
  }
}
</script>

<style lang="scss" scoped></style>
