<template>
  <div>
    <input v-model="message" placeholder="Мы связаны!" class="button fit small"/>
    <hr>
    <input v-model="message" placeholder="Мы связаны!" class="button fit small"/>
  </div>
</template>

<script>
  export default {
    props: {
      message: String
    }
  }
</script>
