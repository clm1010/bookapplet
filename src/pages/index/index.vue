<template>
  <div>
    <div class="title">{{ title }}</div>
    <todo :todos="todos"></todo>
  </div>
</template>

<script>
import Todo from '@/components/Todo'
export default {
  data() {
    return {
      title: '我的图书',
      todos: [
        { title: '学习vuejs', done: true },
        { title: '学习mpvue', done: false },
        { title: '学习云开发', done: false }
      ]
    }
  },

  components: {
    Todo
  },

  methods: {},

  created() {
    // let app = getApp()
  }
}
</script>

<style scoped>
.title {
  font-size: 20px;
  text-align: center;
  color: #0000ff;
}
</style>
