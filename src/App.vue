<template>
  <div>
    <MainPaperlessHeader />
    <router-view />
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