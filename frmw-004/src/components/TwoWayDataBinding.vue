<template>
  <div>
    <input :style="{ zoom }" v-model="message" placeholder="Мы связаны!" />
    <input :style="{ zoom }" v-model="message" placeholder="Мы связаны!" />
  </div>
</template>

<script>
  export default {
    props: {
      zoom: String,
      message: String
    }
  }
</script>
