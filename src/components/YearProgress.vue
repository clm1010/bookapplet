<template>
  <div class="progressbar">
    <progress percent="20" activeColor='#EA5A49' />
    <p>{{year}}已经过去了{{days}}天，20%</p>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    isLeapYear () {
      const year = new Date().getFullYear()
      if (year % 400 === 0) {
        return true
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true
      } else {
        return false
      }
    },
    getDayOfYead () {
      return this.isLeapYear() ? 366 : 365
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    days () {
      // start 就是今年第一天
      let start = new Date()
      start.setMonth(0)
      start.setDate(1)
      // 今天的时间戳 减去今年第一天的时间戳
      let offset = new Date().getTime() - start.getTime()
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1
    }
  }
}
</script>

<style lang="scss">
.progressbar{
  width: 100%;
  progress {
    margin-bottom: 10px;
  }
}
</style>
