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
      <div class="book-info">
        <div class="book-wrapper">
          <div class="book-img-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
          <div class="book-img-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
          <div class="book-img-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon
            class="arrow"
            name="arrow"
            size="12px"
            color="#828489"
          ></van-icon>
        </div>
      </div>
      <div class="feedback-wrapper"></div>
      <div class="feedback-text" @click="onFeedBackClick">反馈</div>
    </div>
    <van-dialog id="van-dialog"></van-dialog>
  </div>
</template>

<script>
import ImageView from '@/components/base/ImageView'
import Dialog from '@vant/weapp/dist/dialog/dialog'
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
    sign() {},
    onFeedBackClick() {
      Dialog.confirm({
        title: '反馈',
        message: '您是否确认提交反馈信息？',
        confirmButtonText: '是',
        cancelButtonText: '否'
      })
        .then(() => {
          console.log('点击是之后的事件')
        })
        .catch(() => {
          console.log('点击否之后的事件')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-card {
  background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
  border-radius: 15px;
  margin: 22px 20px 0;
  .home-card-inner {
    position: relative;
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
      display: flex;
      margin-top: 16.5px;
      .book-wrapper {
        display: flex;
        flex: 1;
        justify-content: space-around;
        .book-img-wrapper {
          width: 72px;
          height: 101px;
        }
      }
      .shelf-wrapper {
        display: flex;
        align-items: center;
        .shelf {
          width: 12px;
          font-size: 12px;
          word-break: break-all;
          color: #fff;
          opacity: 0.8;
        }
      }
    }
    .feedback-wrapper {
      position: absolute;
      top: 19.5px;
      right: 0;
      width: 44.5px;
      height: 23.5px;
      background-color: rgba($color: #d8d8d8, $alpha: 0.3);
      border-radius: 100px 0 0 100px;
    }
    .feedback-text {
      position: absolute;
      top: 19.5px;
      right: 0;
      width: 44.5px;
      height: 23.5px;
      line-height: 23.5px;
      text-align: center;
      font-size: 11px;
      color: #fff;
    }
  }
}
</style>
