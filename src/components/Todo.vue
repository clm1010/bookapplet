<template>
  <div>
    <ul>
      <li>
        <input type="text" v-model="val" placeholder="请输入" />
      </li>
      <li
        :class="{ done: item.done }"
        v-for="(item, index) in todos"
        :key="index"
      >
        {{ index + 1 }}
        {{ item.title }}
        <switch
          :checked="item.done"
          @change.stop.prevent="switchChange(index)"
        ></switch>
      </li>
      <li>
        <button type="dange" @click.prevent="add">添加</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      val: ''
    }
  },
  methods: {
    add() {
      let that = this
      if (that.val) {
        that.todos.push({
          title: that.val,
          doen: false
        })
      }
      that.val = ''
    },
    switchChange(i) {
      let that = this
      console.log(i)
      that.todos[i].done = !that.todos[i].done
    }
  }
}
</script>
<style scoped>
.done {
  color: #ff0000;
  text-decoration: line-through;
}
</style>
