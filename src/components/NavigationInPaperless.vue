<template>
  <div class="sub-header">
    <div class="dropdown">
      <ul class="sections-list">
        <li class="sections-list-item drop-animation" v-for="section in sections" :key="sections.indexOf(section)">{{
            section == selectedSection ? '' : section
        }}</li>
      </ul>
      <div class="dropdown-btn">{{ selectedSection }}</div>
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
      selectedSection: "My Templates",
      sections: ["My Templates", "My Datasets", "My Jobs", "Dashboard"]
    }
  },
}

</script>

<style scoped lang="scss">
.sub-header {
  position: fixed;
  top: 10vh;
  left: 0;
  width: 100vw;
  min-height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $light-four;
  padding: 0 8% 0 8%;
  color: $shade-four;
}

.dropdown {
  position: relative;

  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.5vh;
    width: 20vw;
    background-color: rgba($tint-five, 0.55);
    border-radius: 0.4rem;
  }
}

.sections-list {
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  top: 0;
  left: 0;
  opacity: 0;
  :first-child {
    visibility: hidden;
  }

  :last-child {
    border-radius: 0 0 0.4rem 0.4rem;
  }

  &-item {
    height: 4.5vh;
    width: 15vw;
    text-align: center;
    background-color: rgba($tint-five, 0.3);
  }
}
.drop-animation{
  &:hover {
    animation: dropdown 1s;
  }
}

.searchbar {
  &-input {}
}

.space {
  width: cal;
}

@keyframes dropdown {
  from {
    opacity: 0;
    transform: translateY(-0.5rem);
  }

  to {
    opacity: 1;
    transform: translate(0);
  }
}
</style>