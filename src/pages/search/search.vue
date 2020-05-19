<template>
  <div>
    <SearchBar
      :hot-search="hotSearchKeyword"
      :focus="searchFocus"
      @onChange="onChange"
      @onClear="onClear"
      @onConfirm="onConfirm"
    />
    <TagGroup
      v-if="hotSearchArray.length > 0 && !showList"
      header-text="热门搜索"
      btn-text="换一批"
      :value="hotSearchArray"
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
import { search, hotSearch } from '@/api/index'
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
    },
    hotSearchArray() {
      const _hotSearch = []
      this.hotSearch.forEach((o) => {
        _hotSearch.push(o.title)
      })
      return _hotSearch
    }
  },
  data() {
    return {
      hotSearch: [],
      hotSearchKeyword: '',
      historySearch: [],
      searchList: {},
      searchFocus: true,
      openId: ''
    }
  },
  mounted() {
    this.openId = getStorageSync('openId')
    hotSearch().then((response) => {
      this.hotSearch = response.data.data
    })
    this.hotSearchKeyword = this.$route.query.hotSearch
  },
  methods: {
    onConfirm() {
      // 1、判断是否有关键字
      // 2、如果没有，则获取热门搜索词，通过热门搜索词发起请求
      // 3、如果有，就用搜索关键字发起请求
    },
    /** 清空 */
    onClear() {
      this.searchList = {}
    },
    onChange(keyword) {
      if (!keyword || keyword.trim().length === 0) {
        this.searchList = {}
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
      })
    },
    clearHistorySearch() {
      console.log('clear history search')
    },
    searchKeyWord() {
      console.log('search key word')
    },
    showBookDetail(text, index) {
      console.log('show book detail', text, index)
    },
    changeHotSearch() {
      console.log('change hot search')
    }
  }
}
</script>

<style lang="scss" scoped></style>
