<template>
  <div class="home-banner" @click="onClick">
    <div class="bg-img" :style="{ backgroundImage: bgImage }">
      <div class="title">{{ title }}</div>
      <div class="sub-title">{{ subTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  props: {
    /** banner图片 */
    img: {
      type: String,
      default: () => '',
      required: true
    },
    /** 标题 */
    title: {
      type: String,
      default: () => '',
      required: true
    },
    /** 副标题 */
    subTitle: {
      type: String,
      default: () => '',
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    /** 解决背景图初始报错 */
    bgImage() {
      return 'url(' + this.img + ')'
    }
  },
  methods: {
    /** banner点击事件 */
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-banner {
  margin-top: 20px;
  padding: 0 20px;
  .bg-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 125px;
    border-radius: 10px;
    .title {
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }
    .sub-title {
      padding: 5px 15px;
      background-color: #4585ff;
      border: 1px solid #ccc;
      border-radius: 50px;
      margin-top: 10px;
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>
