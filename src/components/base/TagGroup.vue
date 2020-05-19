<template
  ><div class="tag-group-wrapper">
    <div class="tag-group-header">
      <div class="header-text">{{ headerText }}</div>
      <div class="header-btn" @click="onBtnClick">{{ btnText }}</div>
    </div>
    <div class="tag-group">
      <div class="tag-group-inner" v-for="(text, index) in value" :key="index">
        <Tag :text="text" @onClick="onTagClick(text, index)" />
      </div>
    </div>
  </div>
</template>

<script>
import Tag from './Tag'
export default {
  components: {
    Tag
  },
  props: {
    /** 标题文本 */
    headerText: {
      type: String,
      default: ''
    },
    /** 按钮文本 */
    btnText: {
      type: String,
      default: ''
    },
    /** 标签数据 */
    value: {
      type: Array,
      default: []
    }
  },
  data() {
    return {}
  },
  methods: {
    /** 标签点击事件 */
    onTagClick(text, index) {
      this.$emit('onTagClick', text, index)
    },
    /** 按钮点击事件 */
    onBtnClick() {
      this.$emit('onBtnClick')
    }
  }
}
</script>
<style lang="scss" scoped>
.tag-group-wrapper {
  margin-top: 35px;
  .tag-group-header {
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    font-size: 14px;
    line-height: 20px;
    .header-text {
      color: rgba(51, 51, 51, 1);
    }
    .header-btn {
      color: rgba(54, 150, 239, 1);
    }
  }
  .tag-group {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding: 4px 10px 0 10px;
    box-sizing: border-box;
    .tag-group-inner {
      max-width: 100%;
      box-sizing: border-box;
      padding: 12px 6px 0 6px;
    }
  }
}
</style>
