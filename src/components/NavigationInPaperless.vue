<template>
  <div class="sub-header">
    <div class="dropdown">
      <div class="dropdown-btn" @click="showSections = !showSections">{{ selectedSection }}</div>
      <div v-if="showSections" class="sections-list">
        <router-link :to="section.value" class="sections-list-items" v-for="section in sectionsToShow" :key="sections.indexOf(section)" @click.native="showSections = false , dropdownButtonText(section)">{{ section.text }}

        </router-link>
      </div>
    </div>
    <div class="searchbar">
      <input type="text" class="searchbar-input" placeholder="Search">
      <!-- <v-icon>mdi-magnify
      </v-icon> -->
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showSections: false,
      selectedSection: "My Templates",
      sections:[{
        text:"My Templates",
        value:"my-templates"
      },
      {
        text:"My Datasets",
        value:"my-datasets"
      },
      {
        text:"My Jobs",
        value:"my-jobs"
      },
      {
        text:"Dashboard",
        value:"dasboard"
      }
      ]
    }
  },
  computed: {
    sectionsToShow() {
      return this.sections.filter((section) => section != this.selectedSection)
    }
  },
  mounted(){
    console.log(this.selectedSection.trim())
  },
  methods:{
    dropdownButtonText(section){
      this.selectedSection = section.text
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
  display: flex;
  align-items: center;
  justify-content: center;

  &-input {
    height: 2rem;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: $light-five;
    border-radius: 0.4rem;
    ::placeholder{
      color: $shade-four; ;
      background-color: $light-four;
    }
  }
}

.v-icon{
  height: 2rem;
  width: 3rem;
  background-color:$light-two;
  font-size: 1.7rem;
  border-radius: 0.4rem;
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