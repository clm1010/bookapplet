<template>
<div class="book-card">
  <div class="thumb">
    <img class="img" :src="book.image" :alt="book.title" modle='aspectFit'>
  </div>
  <div class="detail">
    <div class="row">
      <div class="right">
        {{book.rate}}
      </div>
      <div class="left">
        {{book.title}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    book: Array
  }
}
</script>

<style lang="scss">
.book-card{
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  display: flex;
  overflow: hidden;
  .thumb{
    flex: 1;
    width: 90px;
    height: 90px;
    .img{
      max-width: 100%;
      max-height: 100%;
    }
  }
  .detail{
    flex: 3;
  }
}
</style>
