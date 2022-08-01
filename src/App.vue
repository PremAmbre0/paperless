<template>
  <div>
    <MainPaperlessHeader />
    <div id="app">
      <router-view />
    </div>
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
<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  max-width: 192rem;
  margin: 10vh auto 0 auto;
  background-color: $light-five;
}
</style>