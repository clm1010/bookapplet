<template>
  <div>
    <SearchList />
  </div>
</template>

<script>
import SearchList from '@/components/search/SearchList'
export default {
  components: {
    SearchList
  },
  data() {
    return {}
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
