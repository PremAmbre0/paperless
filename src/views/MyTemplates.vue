<template>
  <div class="container">
    <div class="template-container">
      <template-card v-for="template in templates" :key="template.templateName" :imageUrl="template.imageUrl"
        :templateName="template.templateName" :lastUpdate="template.lastUpdate"
        @click.native="showTemplatePreview(template.templateName)"></template-card>
    </div>
    <div class="add-wrapper" @click="addTemp = !addTemp"><span class="add-wrapper-icon">+</span>
      <template-preview-and-form v-show="addTemp" :template="addNewTemp" @closePreview="closePreview"></template-preview-and-form>
    </div>
    <template-preview-and-form v-show="showPreview" :template="selectedTemplate" @closePreview="closePreview">
    </template-preview-and-form>
  </div>
</template>

<script>
import TemplateCard from "../components/TemplateCard.vue"
import TemplatePreviewAndForm from "../components/TemplatePreviewAndForm.vue"
export default {
  components: {
    TemplateCard,
    TemplatePreviewAndForm
  },
  data() {
    return {
      showPreview: false,
      selectedTemplate: {},
      addTemp: false,
      addNewTemp:{
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        templateName: "",
      },
      templates: [
        {
          imageUrl: "https://picsum.photos/seed/picsum/200/300",
          templateName: "lorem",
          lastUpdate: "xx/xx/xxxx"
        },
        {
          imageUrl: "https://picsum.photos/seed/picsum/300/300",
          templateName: "loremx",
          lastUpdate: "xx/xx/xxxx"
        },
        {
          imageUrl: "https://picsum.photos/seed/picsum/500/300",
          templateName: "loremy",
          lastUpdate: "xx/xx/xxxx"
        },
        {
          imageUrl: "https://picsum.photos/seed/picsum/300/500",
          templateName: "loremz",
          lastUpdate: "xx/xx/xxxx"
        },
        {
          imageUrl: "https://picsum.photos/seed/picsum/700/700",
          templateName: "lorema",
          lastUpdate: "xx/xx/xxxx"
        }
      ]
    }
  },
  methods: {
    showTemplatePreview(tempName) {
      this.showPreview = !this.showPreview
      let template = this.templates.find(({ templateName }) => templateName == tempName)
      this.selectedTemplate = template
    },
    closePreview() {
      this.showPreview = !this.showPreview
    }
  },
  updated(){
    console.log(this.addTemp)
  }
}

</script>
<style lang="scss" scoped>
.template-container {
  margin-top: 2vh;
  width: 100vw;
  padding: 0 6% 0 6%;
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
}

.add-wrapper {
  position: fixed;
  bottom: 5vw;
  right: 5vw;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  background-color: $shade-two ;
  display: flex;
  align-items: center;
  justify-content: center;

  &-icon {
    color: $white;
    font-size: 3rem;
  }
}

@media(min-width:600px){
  .template-container {
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
}
}

@media(min-width:880px){
  .template-container {
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
}

@media(min-width:1440px){
  .template-container {
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
}
}

}
</style>
