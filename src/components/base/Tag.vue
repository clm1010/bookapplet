<template>
  <div class="tag-wrapper" @click="onClick">
    <div class="tag">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-wrapper {
  display: flex;
  justify-content: center;
  background-color: rgba(247, 247, 249, 1);
  border-radius: 16px;
  padding: 6px 17px;
  .tag {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: rgba(39, 46, 55, 1);
    line-height: 20px;
  }
}
</style>
