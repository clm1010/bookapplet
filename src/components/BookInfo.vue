<template>
  <div class='book-info'>
    <div class='thumb'>
      <img class='back' 
      :src='info.image'
      mode='aspectFill'
      >
      <img class='img'
      :src='info.image'
      mode='aspectFit'
      >
      <div class='info'>
        <p class='title'>
          {{info.title}}
        </p>
        <p class='author'>
          {{info.author}}
        </p>
      </div>
    </div>
    <div class='owner'>
      <img class='avatar' :src='userinfo.avatarUrl' mode='aspectFit'>
      {{userinfo.nickName}}
      <div class='right text-warning'>
        {{info.rate}}分<rate :value='info.rate'></rate>
      </div>
      <div class='detail'>
        {{info.publisher}}
        <div class='right'>
          {{info.price}}
        </div>
      </div>
    </div>
    <div class='tags'>
      <div class='badge' 
      v-for='(tag, tagIndex) in info.tags'
      :key='tagIndex'
      >{{tag}}</div>
    </div>
    <div class='summary'>
      <p 
      v-for='(summ, summIndex) in info.summary' 
      :key='summIndex'
      >{{summ}}</p>
    </div>
  </div>
</template>
<script>
import Rate from '@/components/Rate'
export default {
  components: {
    Rate
  },
  props: {
    info: Object
  },
  data () {
    return {}
  },
  computed: {
    userinfo () {
      return this.info.user_info || {}
    }
  }
}
</script>
<style lang='scss' scoped>
.book-info{
  font-size: 14px;
  .badge{
    display: inline-block;
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #0084FF;
    color: #0084FF;
  }
  .summary{
    padding: 10px 15px;
    p{
      text-indent: 2em;
      font-size: 14px;
    }
  }
  .right{
    float: right;
  }
  .owner{
    padding: 5px 10px;
    .avatar{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
  .thumb{
    width: 100%;
    height: 500rpx;
    overflow: hidden;
    position: relative;
    .back{
      filter: blur(5px);
      width: 100%;
      height: 100%;
    }
    .img{
      position: absolute;
      width: 100%;
      height:70%;
      top: -15%;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
    }
    .info{
      color:#FFF;
      position: absolute;
      width: 100%;
      right: 0;
      bottom: 1%;
      left:0;
      text-align: center;
      .title{
        font-size: 18px;
      }
      .author {
        font-size: 14px;
      }
    }
  }
}
</style>

