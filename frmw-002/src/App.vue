<template>
  <div id="app">
    <h3>Связанные компоненты на Vue</h3>
    <TwoWayDataBinding/>
  </div>
</template>

<script>
  import TwoWayDataBinding from './components/TwoWayDataBinding.vue'
  export default {
    name: 'app',
    components: {
      TwoWayDataBinding
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial;
    text-align: center;
    margin-top: 5%;
  }
</style>
