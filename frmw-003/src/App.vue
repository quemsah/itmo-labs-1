<template>
  <div id="app">
    <h3>Список задач</h3>
    <TaskList/>
  </div>
</template>

<script>
  import TaskList from './components/TaskList.vue'
  export default {
    name: 'app',
    components: {
      TaskList
    }
  }
</script>

<style>
body {
  /* font-family: Karla, sans-serif; */
  font-size: 16px;
  margin: 0;
}

#app {
  max-width: 510px;
  margin: 50px auto;
  padding: 0 10px;
}
</style>
