<template>
  <div class='comment-list'>
    <div class='page-title' v-if='comments.length'>
      评论
    </div>
    <div class='comment'
    v-for='(comment, comIndex) in comments'
    :key='comIndex'
    @click = 'handleClickUser(comment)'
    >
      <div class='user'>
        <div class='inline'>
          <img class='avatar' :src='comment.avatarUrl' mode='aspectFit'>
          {{comment.nickName}}
        </div>
        <div class='right'>
          {{comment.location || '未知地点'}}
          <span class='text-warning'>--</span>
          {{comment.phone || '未知型号'}}
        </div>
      </div>
      <div class='content'>
        {{comment.comment}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comments: Array,
    type: String
  },
  data () {
    return {}
  },
  methods: {
    // 点击评论跳转到所在书的详情
    handleClickUser (comment) {
      if (this.type === 'user') {
        wx.navigateTo({
          url: '/pages/detail/main?id=' + comment.bookid
        })
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
.comment-list
  background-color: #FFFFFF;
  font-size: 14px;
  .page-title
    background-color: #0084ff;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
    line-height 2;
  .comment
    margin: 10px;
    border-bottom: 1px solid #EEEEEE;
    .user
      .inline
        display: inline;
        .avatar
          width: 30px;
          height: 30px;
          border-radius: 50%;
          vertical-align: middle;
      .right
        float: right;
</style>
