<template>
  <div class="image-view">
    <img
      v-show="!isLoading && !error"
      :class="round ? 'round image' : 'image'"
      :style="{ height }"
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      @load="onLoad"
      @error="onError"
    />
    <img
      v-show="isLoading || error"
      :class="round ? 'round image' : 'image'"
      :style="{ height }"
      src="https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg"
      :mode="mode"
      :lazy-load="lazyLoad"
    />
  </div>
</template>

<script>
export default {
  props: {
    /** 图片地址 */
    src: {
      type: String,
      default: ''
    },
    /** 图片伸缩模式 */
    mode: {
      type: String,
      default: 'widthFix'
    },
    /** 是否启动懒加载 */
    lazyLoad: {
      type: Boolean,
      default: true
    },
    /** 是否为圆形图片 */
    round: {
      type: Boolean,
      default: false
    },
    /** 图片高度 */
    height: {
      type: String,
      default: 'auto'
    }
  },
  data() {
    return {
      /** 图片是否处于加载状态 */
      isLoading: true,
      /** 是否加载失败 */
      error: false
    }
  },
  watch: {
    /** 监听src变化，如果src变化，则将isLoading置为true */
    src(newValue, preValue) {}
  },
  methods: {
    /** 图片点击事件 */
    onClick() {
      this.$emit('onClick')
    },
    /** 图片加载成功事件 */
    onLoad() {
      this.isLoading = false
      this.error = false
      console.log('onLoad')
    },
    /** 图片加载失败事件 */
    onError() {
      this.error = true
      this.isLoading = false
      console.log('onError')
    }
  }
}
</script>

<style lang="scss" scoped>
.image-view {
  width: 100%;
  .image {
    width: 100%;
    &.round {
      border-radius: 50%;
    }
  }
}
</style>
