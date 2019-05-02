<template>
  <div id="app">
    <h3>Связанные компоненты</h3>
    <TwoWayDataBinding zoom="150%" />
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
