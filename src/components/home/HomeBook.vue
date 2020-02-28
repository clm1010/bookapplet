<template>
  <div class="home-book">
    <div class="home-book-header"></div>
    <div class="home-book-content"></div>
    <div class="home-book-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeBook',
  props: {
    /** 标题栏 */
    title: {
      type: String,
      default: () => '',
      required: true
    },
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    /** 按钮文本 */
    btnText: {
      type: String,
      default: () => '',
      required: true
    },
    /** 行数 */
    row: {
      type: Number,
      default: () => 0,
      required: true
    },
    /** 列数 */
    col: {
      type: Number,
      default: () => 1,
      required: true
    },
    /** 显示模式，row - 按行显示，col - 按列显示，category - 分类显示 */
    mode: {
      type: String,
      default: () => 'row',
      required: true
    },
    /** 是否显示标题 */
    showTitle: {
      type: Boolean,
      default: () => true,
      required: true
    },
    /** 是否显示按钮 */
    showBtn: {
      type: Boolean,
      default: () => true,
      required: true
    },
    /** 是否显示背景 */
    linearBg: {
      type: Boolean,
      default: () => false,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    /** 点击更多按钮事件 */
    onMoreClick() {},
    /** 图书点击事件 */
    onBookClick() {}
  }
}
</script>

<style lang="scss" scoped>
.home-book {
  .home-book-header {
  }
  .home-book-content {
  }
  .home-book-footer {
  }
}
</style>
