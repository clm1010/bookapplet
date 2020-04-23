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
      color: rgba(255, 255, 255, 1);
    }
    .sub-title {
      padding: 5px 15px;
      background-color: rgba(69, 133, 255, 1);
      border: 1px solid rgba(204, 204, 204, 1);
      border-radius: 50px;
      margin-top: 10px;
      font-size: 14px;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
