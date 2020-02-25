<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wrapper">
          <ImageView src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" round />
        </div>
        <div class="nickname">{{ 'CLM' }}</div>
        <div class="shelf-text">书架共有{{ 3 }}本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info"></div>
      <div class="feedback-wrapper"></div>
    </div>
  </div>
</template>

<script>
import ImageView from '@/components/base/ImageView'
export default {
  name: 'HomeCard',
  components: {
    ImageView
  },
  props: {
    /** 界面需要展示的数据，userInfo为用户信息，bookList为推荐图书信息，num为书架图书数量 */
    data: Object,
    /** 今天是否签到 */
    hasSign: {
      type: Boolean,
      default: false
    },
    /** 连续签到天数 */
    signDay: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  methods: {
    /** 跳转到书架列表 */
    gotoShelf() {},
    /** 图书点击事件 */
    onBookClick() {},
    /** 签到事件 */
    sign() {}
  }
}
</script>

<style lang="scss" scoped>
.home-card {
  background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
  border-radius: 15px;
  margin: 22px 20px 0;
  .home-card-inner {
    padding: 21.5px 17px 20px 20px;
    box-sizing: border-box;
    .user-info {
      display: flex;
      align-items: center;
      .avatar-wrapper {
        width: 20px;
        height: 20px;
      }
      .nickname,
      .shelf-text {
        font-size: 12px;
        color: #ffffff;
      }
      .nickname {
        margin: 0 8.5px;
      }
      .shelf-text {
        opacity: 0.7;
      }
      .round-item {
        width: 4px;
        height: 4px;
        background-color: #a2a2a2;
        border-radius: 50%;
        margin: 0 8px;
      }
    }
    .book-info {
    }
    .feedback-wrapper {
    }
  }
}
</style>
