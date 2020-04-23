<template>
  <div>
    <SearchBar :focus="searchFocus" @onChange="onChange" @onClear="onClear" />
    <TagGroup
      v-if="hotSearch.length > 0 && !showList"
      header-text="热门搜索"
      btn-text="换一批"
      :value="hotSearch"
      @onBtnClick="changeHotSearch"
      @onTagClick="showBookDetail"
    />
    <TagGroup
      v-if="historySearch.length > 0 && !showList"
      header-text="历史搜索"
      btn-text="清空"
      :value="historySearch"
      @onBtnClick="clearHistorySearch"
      @onTagClick="searchKeyWord"
    />
    <SearchList v-if="showList" :data="searchList" />
  </div>
</template>

<script>
import SearchBar from '@/components/home/SearchBar'
import TagGroup from '@/components/base/TagGroup'
import SearchList from '@/components/search/SearchList'
import { getStorageSync } from '@/api/wechat'
import { search } from '@/api/index'
export default {
  name: 'Search',
  components: {
    SearchBar,
    TagGroup,
    SearchList
  },
  computed: {
    showList() {
      const keys = Object.keys(this.searchList)
      return keys.length > 0
    }
  },
  data() {
    return {
      hotSearch: [],
      historySearch: [],
      searchList: {},
      searchFocus: true,
      openId: ''
    }
  },
  mounted() {
    this.openId = getStorageSync('openId')
    console.log(this.openId)
  },
  methods: {
    /** 清空 */
    onClear() {
      this.searchList = {}
    },
    onChange(keyword) {
      console.log(keyword)
      if (!keyword || keyword.trim().length === 0) {
        return
      }
      this.onSearch(keyword)
    },
    onSearch(keyword) {
      search({
        keyword,
        openId: this.openId
      }).then((response) => {
        this.searchList = response.data.data
        console.log(this.searchList)
      })
    },
    clearHistorySearch() {
      console.log('clear history search')
    },
    searchKeyWord() {
      console.log('search key word')
    },
    showBookDetail() {
      console.log('show book detail')
    },
    changeHotSearch() {
      console.log('change hot search')
    }
  }
}
</script>

<style lang="scss" scoped></style>
