<template>
  <div>
    <div class="home" v-if="isAuth">
      <search-bar
        :disabled="true"
        @onClick="onSearchBarClick"
        :hot-search="hotSearch"
      />
      <home-card :data="homeCard" />
      <home-banner
        img="http://www.youbaobao.xyz/book/res/bg.jpg"
        title="MpVue2.0"
        subTitle="立即体验"
        @onClick="onBannerClick"
      />
      <div :style="{ marginTop: '23px' }">
        <home-book
          title="为你推荐"
          :row="1"
          :col="3"
          :data="recommend"
          mode="col"
          btn-text="换一批"
          @onMoreClick="recommendChange('recommend')"
          @onBookClick="onHomeBookClick"
        />
      </div>
      <div :style="{ marginTop: '23px' }">
        <home-book
          title="免费阅读"
          :row="2"
          :col="2"
          :data="freeRead"
          mode="row"
          btn-text="换一批"
          @onMoreClick="recommendChange('freeRead')"
          @onBookClick="onHomeBookClick"
        />
      </div>
      <div :style="{ marginTop: '23px' }">
        <home-book
          title="当前最热"
          :row="1"
          :col="4"
          :data="hotBook"
          mode="col"
          btn-text="换一批"
          @onMoreClick="recommendChange('hotBook')"
          @onBookClick="onHomeBookClick"
        />
      </div>
      <div :style="{ marginTop: '23px' }">
        <home-book
          title="分类"
          :row="3"
          :col="2"
          :data="category"
          mode="category"
          btn-text="查看全部"
          @onMoreClick="onCategoryMoreClick"
          @onBookClick="onHomeBookClick"
        />
      </div>
    </div>
    <!-- 用户授权组件 -->
    <Auth v-if="!isAuth" @getUserInfo="init" />
  </div>
</template>

<script>
import SearchBar from '@/components/home/SearchBar'
import HomeCard from '@/components/home/HomeCard'
import HomeBanner from '@/components/home/HomeBanner'
import HomeBook from '@/components/home/HomeBook'
import Auth from '@/components/base/Auth'
import {
  getHomeData,
  recommend,
  freeRead,
  hotBook,
  register
} from '@/api/index'
import {
  getSetting,
  getUserInfo,
  setStorageSync,
  getStorageSync,
  getUserOpenId,
  showLoading,
  hideLoading
} from '@/api/wechat'
export default {
  components: {
    SearchBar,
    HomeCard,
    HomeBanner,
    HomeBook,
    Auth
  },
  data() {
    return {
      /** 热门搜索 */
      hotSearch: '',
      /** 书架推荐图书 */
      homeCard: {},
      /** banner图 */
      banner: {},
      /** 为你推荐 */
      recommend: [],
      /** 免费阅读 */
      freeRead: [],
      /** 当前最热 */
      hotBook: [],
      /** 分类 */
      category: [],
      isAuth: true
    }
  },
  created() {
    // let app = getApp()
  },
  mounted() {
    // this.getHomeData()
    this.init()
  },
  methods: {
    /** 初始化 */
    init() {
      this.getSetting()
    },
    /** 为你推荐改变方法 */
    recommendChange(key) {
      // console.log(key)
      switch (key) {
        case 'recommend':
          recommend().then((response) => {
            // console.log(response.data.data)
            this.recommend = response.data.data
          })
          break
        case 'freeRead':
          freeRead().then((response) => {
            // console.log(response.data.data)
            this.freeRead = response.data.data
          })
          break
        case 'hotBook':
          hotBook().then((response) => {
            // console.log(response.data.data)
            this.hotBook = response.data.data
          })
          break
      }
    },

    /** 点击分类更多按钮事件 */
    onCategoryMoreClick() {
      console.log('分类')
    },
    /** 图书点击事件 */
    onHomeBookClick() {
      console.log('home book click')
    },
    /**  跳转到搜索页 */
    onSearchBarClick() {},
    /** 点击Banner事件 */
    onBannerClick() {
      console.log('点击Banner事件')
    },
    /** 获取首页数据 */
    getHomeData(openId, userInfo) {
      getHomeData({ openId })
        .then((response) => {
          // console.log(response)
          const {
            data: {
              banner,
              category,
              freeRead,
              hotBook,
              hotSearch: { keyword },
              recommend,
              shelf,
              shelfCount
            }
          } = response.data
          this.banner = banner
          this.hotSearch = keyword
          this.recommend = recommend
          this.freeRead = freeRead
          this.hotBook = hotBook
          this.category = category
          this.homeCard = {
            bookList: shelf,
            npm: shelfCount,
            userInfo
          }
          hideLoading()
        })
        .catch((error) => {
          console.log('捕获异常！', error)
          hideLoading()
        })
    },
    /** 获取用户信息 */
    getUserInfo() {
      const onOpenIdComplete = (openId, userInfo) => {
        this.getHomeData(openId, userInfo)
        register(openId, userInfo)
      }
      getUserInfo(
        (userInfo) => {
          setStorageSync('userInfo', userInfo)
          const openId = getStorageSync('openId')
          if (!openId || openId.length === 0) {
            getUserOpenId((openId) => onOpenIdComplete(openId, userInfo))
          } else {
            onOpenIdComplete(openId, userInfo)
          }
        },
        () => {
          console.log('failed...') // 获取用户信息，抛出异常！
        }
      )
    },
    /** 获取设置 */
    getSetting() {
      getSetting(
        'userInfo',
        () => {
          // console.log('成功')
          this.isAuth = true
          showLoading('正在加载...')
          this.getUserInfo()
        },
        () => {
          // console.log('失败')
          this.isAuth = false
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
