<template>
  <div>
    <TagGroup
      header-text="热门搜索"
      btn-text="换一批"
      :value="tags"
      @onTagClick="onTagClick"
      @onBtnClick="onBtnClick"
    />
  </div>
</template>

<script>
import TagGroup from '@/components/base/TagGroup'
export default {
  components: {
    TagGroup
  },
  data() {
    return {
      tags: ['aaaaa', 'bbbbb', 'ccccc', 'ddddddddddddddddddddddd', 'eeeeeeeee']
    }
  },
  methods: {
    onTagClick(text, index) {
      console.log('tag...', text, index)
    },
    onBtnClick() {
      console.log('btn...')
    }
  }
}
</script>

<style lang="scss" scoped></style>
