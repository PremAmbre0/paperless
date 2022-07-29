<template>
  <div>
    <NavigationInPaperless />
    <router-view></router-view>
  </div>
</template>

<script>
// importing components
import NavigationInPaperless from "../components/NavigationInPaperless.vue";

export default {
  components: {
    NavigationInPaperless,
  },
};
</script>
