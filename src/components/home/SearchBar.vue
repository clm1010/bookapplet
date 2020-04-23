<template>
  <div class="search-bar">
    <div class="search-bar-wrapper" @click="onSearchBarClick">
      <van-icon
        class="search"
        name="search"
        size="16px"
        color="rgba(133, 140, 150,1)"
      ></van-icon>
      <input
        class="search-bar-input"
        :focus="focus"
        :disabled="disabled"
        :maxlength="limit"
        :placeholder="hotSearch.length === 0 ? '搜索' : hotSearch"
        v-model="searchWord"
        @input="onChange"
        confirm-type="search"
        @confirm="onConfirm"
        placeholder-style="color: rgba(173,180,190,1);font-size:15px;"
      />
      <van-icon
        class="clear"
        name="clear"
        size="16px"
        color="rgba(204, 204, 204,1)"
        @click="onClearClick"
        v-if="searchWord.length > 0"
      ></van-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /** 搜索框是否获得焦点 */
    focus: {
      type: Boolean,
      default: false
    },
    /** 搜索框是否可交互 */
    disabled: {
      type: Boolean,
      default: false
    },
    /** 搜索框最大可输入字符数 */
    limit: {
      type: Number,
      default: 50
    },
    /** 热门搜索词 */
    hotSearch: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      /** 搜索关键字 */
      searchWord: ''
    }
  },
  methods: {
    /** 搜索框点击事件 */
    onSearchBarClick() {
      this.$emit('onClick')
    },
    /** 点击清空事件 */
    onClearClick() {
      this.searchWord = ''
      this.$emit('onClear')
    },
    /** 输入监听事件 */
    onChange(e) {
      const { value } = e.mp.detail
      this.$emit('onChange', value)
    },
    /** 点击虚拟键盘搜索事件 */
    onConfirm(e) {
      const { value } = e.mp.detail
      this.$emit('onConfirm', value)
    },
    /** 对输入框关键字赋值 */
    setValue(v) {
      this.searchWord = v
    },
    /** 获取输入框的关键字 */
    getValue() {
      return this.searchWord
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 15px 15.5px;
  .search-bar-wrapper {
    display: flex;
    align-items: center;
    height: 40px;
    box-sizing: border-box;
    background-color: rgba(245, 247, 249, 1);
    border-radius: 20px;
    padding: 12px 17px;
    .search-bar-input {
      flex: 1;
      margin: 0 8px;
      color: rgba(51, 51, 51, 1);
      font-size: 15px;
    }
  }
  .search,
  .clear {
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>
