<template>
  <div id="app">
    <MainPaperlessHeader />
    <!-- <router-view /> -->
  </div>
</template>

<script>
// importiong components
import MainPaperlessHeader from "./components/MainPaperlessHeader.vue";

export default {
  components: {
    MainPaperlessHeader
  }
}
</script>
<style lang="scss">
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}
</style>