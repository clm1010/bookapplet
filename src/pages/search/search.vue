<template>
  <div>
    <TagGroup
      header-text="热门搜索"
      btn-text="换一批"
      :value="tags"
      @onTagClick="onTagClick"
      @onBtnClick="onBtnClick"
    />
    <SearchItem icon="apps-o" title="计算机科学" sub-title="类别" />
  </div>
</template>

<script>
import TagGroup from '@/components/base/TagGroup'
import SearchItem from '@/components/search/SearchItem'
export default {
  components: {
    TagGroup,
    SearchItem
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
