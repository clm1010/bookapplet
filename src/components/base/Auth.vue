<template>
  <div class="auth-wrapper">
    <div class="auth-inner-wrapper">
      <div class="auth-info-wrapper">
        <div class="auth-img">
          <ImageView src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" round />
        </div>
        <div class="auth-title">登录小慕读书</div>
        <div class="auth-sub-title">全球好书免费读</div>
      </div>
      <button class="auth-btn">授权登录</button>
    </div>
  </div>
</template>

<script>
import ImageView from '@/components/base/ImageView'
export default {
  components: {
    ImageView
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.auth-wrapper {
  width: 100%;
  height: 100%;
  background-color: rgba(153, 153, 153, 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  .auth-inner-wrapper {
    width: 270px;
    height: 248px;
    background-color: rgba(245, 245, 245, 1);
    border-radius: 18px;
    .auth-info-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 22.5px;
      .auth-img {
        width: 74px;
        height: 74px;
      }
      .auth-title {
        font-size: 13px;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 18.5px;
        margin-top: 18.5px;
      }
      .auth-sub-title {
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
        line-height: 22.5px;
        margin-top: 3.5px;
      }
    }

    .auth-btn {
    }
  }
}
</style>
