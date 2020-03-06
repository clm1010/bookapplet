<template>
  <div class="home-book">
    <div class="home-book-header">{{ title }}</div>
    <div class="home-book-content">
      <div
        class="home-book-row"
        v-for="(itemBook, indexBook) in bookData"
        :key="indexBook"
      >
        <div
          class="home-book-col"
          v-for="(item, index) in itemBook"
          :key="index"
          :style="{ flex: '0 0' + 100 / col + '%' }"
        >
          <div
            v-if="mode === HOME_BOOK_MODE.COL || mode === HOME_BOOK_MODE.ROW"
            class="book-wrapper"
            :style="{
              flexDirection: mode === HOME_BOOK_MODE.COL ? 'column' : 'row'
            }"
            @click="onBookClick"
          >
            <ImageView :src="item.cover" />
            <div
              class="book-title-wrapper book-title-col"
              v-if="mode === HOME_BOOK_MODE.COL"
            >
              <div class="book-title">{{ item.title }}</div>
            </div>
            <div class="book-title-wrapper book-title-row" v-else>
              <div class="book-title">{{ item.title }}</div>
              <div class="book-title-author-wrapper">
                <div class="book-title book-author">{{ item.author }}</div>
                <div class="book-title book-category">
                  {{ item.categoryText }}
                </div>
              </div>
            </div>
          </div>
          <div class="cagegory-wrapper" v-else>
            <div class="cagegory-text">{{ item.categoryText }}</div>
            <div class="cagegory-num">{{ item.num }}本书</div>
            <div class="cagegory-img-wrapper">
              <div class="cagegory-img1">
                <ImageView :src="item.cover" />
              </div>
              <div class="cagegory-img2">
                <ImageView :src="item.cover2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-book-footer" v-if="showBtn" @click="onMoreClick">
      <van-button round custom-class="home-book-btn">{{ btnText }}</van-button>
    </div>
  </div>
</template>

<script>
import { HOME_BOOK_MODE } from '@/utils/const'
import ImageView from '@/components/base/ImageView'
export default {
  name: 'HomeBook',
  components: {
    ImageView
  },
  props: {
    /** 标题栏 */
    title: {
      type: String,
      default: () => '',
      required: true
    },
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    /** 按钮文本 */
    btnText: {
      type: String,
      default: () => '',
      required: true
    },
    /** 行数 */
    row: {
      type: Number,
      default: () => 0,
      required: true
    },
    /** 列数 */
    col: {
      type: Number,
      default: () => 1,
      required: true
    },
    /** 显示模式，row - 按行显示，col - 按列显示，category - 分类显示 */
    mode: {
      type: String,
      default: () => HOME_BOOK_MODE.ROW,
      required: true
    },
    /** 是否显示标题 */
    showTitle: {
      type: Boolean,
      default: () => true,
      required: true
    },
    /** 是否显示按钮 */
    showBtn: {
      type: Boolean,
      default: () => true,
      required: true
    },
    /** 是否显示背景 */
    linearBg: {
      type: Boolean,
      default: () => false,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    HOME_BOOK_MODE() {
      return HOME_BOOK_MODE
    },
    bookData() {
      const { data, row, col } = this
      if (data && data.length > 0) {
        const number = row * col
        const _bookData = data.slice(0, number)
        const _bookDataRow = []
        let _row = 0
        while (_row < row) {
          _bookDataRow.push(_bookData.slice(_row * col, _row * col + col))
          _row++
        }
        return _bookDataRow
      } else {
        return []
      }
    }
  },
  mounted() {
    console.log(this.bookData)
  },
  methods: {
    /** 点击更多按钮事件 */
    onMoreClick() {
      this.$emit('onMoreClick')
    },
    /** 图书点击事件 */
    onBookClick() {
      this.$emit('onBookClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-book {
  margin-top: 23px;
  .home-book-header {
    padding: 13px 0 0 20.5px;
  }
  .home-book-content {
    padding: 0 12px;
    margin-top: 10.5px;
    .home-book-row {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 12px;
      .home-book-col {
        padding: 0 8px;
        box-sizing: border-box;
        .book-wrapper {
          display: flex;
          .book-title-wrapper {
            &.book-title-col {
              .book-title {
                font-size: 12px;
                font-weight: 500;
                color: rgba(33, 39, 49, 1);
                line-height: 16.5px;
                max-height: 35.5px;
                overflow: hidden;
                word-break: break-word;
              }
            }
            &.book-title-row {
              flex: 0 0 50%;
              padding: 10px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .book-title {
                font-size: 14px;
                color: rgba(31, 31, 31, 1);
                line-height: 18px;
                max-height: 36px;
                overflow: hidden;
                word-break: break-word;
              }
              .book-author,
              .book-category {
                font-size: 12px;
                color: rgba(134, 134, 134, 1);
                line-height: 14px;
                max-height: 14px;
              }
            }
          }
        }
        // 分类查询样式
        .cagegory-wrapper {
          position: relative;
          display: flex;
          background-color: rgba(248, 249, 251, 1);
          .cagegory-text {
            font-size: 16px;
            line-height: 22.5px;
            color: rgba(33, 40, 50, 1);
          }
          .cagegory-num {
            font-size: 12px;
            line-height: 16.5px;
            color: rgba(134, 134, 134, 1);
          }
          .cagegory-img-wrapper {
            .cagegory-img1 {
            }
            .cagegory-img2 {
            }
          }
        }
      }
    }
  }
  .home-book-footer {
    padding: 12px 20px 20px;
    >>> .home-book-btn {
      width: 100%;
      font-size: 14px;
      color: rgba(54, 150, 239, 1);
      border: 1px solid rgba(237, 238, 238, 1);
    }
  }
}
</style>
