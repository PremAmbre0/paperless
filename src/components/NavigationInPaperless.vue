<template>
  <div class="sub-header">
    <div class="dropdown">
      <div class="dropdown-btn" @click="showSections = !showSections">{{ selectedSection }}</div>
      <div v-if="showSections" class="sections-list">
        <router-link :to="section.trim()" class="sections-list-items" v-for="section in sectionsToShow" :key="sections.indexOf(section)">{{ section }}
        </router-link>
      </div>
    </div>
    <div class="searchbar">
      <input type="text" class="searchbar-input" placeholder="Search">
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showSections: false,
      selectedSection: "My Templates",
      sections: ["My Templates", "My Datasets", "My Jobs", "Dashboard"]
    }
  },
  computed: {
    sectionsToShow() {
      return this.sections.filter((section) => section != this.selectedSection)
    }
  }
}

</script>

<style scoped lang="scss">
.sub-header {
  position: fixed;
  top: 6vh;
  left: 0;
  width: 100vw;
  min-height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $light-four;
  padding: 0 5% 0 5%;
  color: $shade-four;
  z-index: 1000;
}

.dropdown {
  position: relative;


  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 3vh;
    width: 30vw;
    background-color: $tint-four;
    border-radius: 0.4rem;
  }
}

.sections-list {
  position: absolute;
  top: 2.7vh;
  animation: dropdown 0.3s;
  
  :last-child {
    border-radius: 0 0 0.4rem 0.4rem;
  }

  &-items , &-items:active{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 3vh;
    width: 30vw;
    background-color: $tint-five;
    color: $shade-four;
  }
}

.searchbar {
  &-input {}
}

@keyframes dropdown{
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }

  to {
    opacity: 1;
    transform:translateY(0);
  }
}

</style>