<template>
  <div class='comment-list'>
    <div class='page-title' v-if='comments.length'>
      评论
    </div>
    <div class='comment'
    v-for='(comment, comIndex) in comments'
    :key='comIndex'
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
    comments: Array
  },
  data () {
    return {}
  }
}
</script>
<style lang='scss' scoped>
.comment-list {
  background-color: #FFFFFF;
  font-size: 14px;
  .page-title {
    background-color: #0084ff;
    color: #FFFFFF;
    font-size: 16px;
  }
  .comment {
    margin: 10px;
    border-bottom: 1px solid #EEEEEE;
    .user {
      .inline {
        display: inline;
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
      .right {
        float: right;
      }
    }
  }
}
</style>
