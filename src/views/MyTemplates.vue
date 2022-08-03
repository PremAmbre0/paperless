<template>
  <div class="container">
    <div class="template-container">
      <template-card v-for="template in templates" :key="template.templateName" :imageUrl="template.imageUrl"
        :templateName="template.templateName" :lastUpdate="template.lastUpdate" 
        @click.native="showTemplatePreview(template.templateName)"></template-card>
    </div>
    <div class="add">+</div>
    <template-preview-and-form v-show="showPreview" :template="selectedTemplate" @closePreview="closePreview"></template-preview-and-form>
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
      showPreview:false,
      selectedTemplate:{},
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
  methods:{
    showTemplatePreview(tempName){
      this.showPreview = !this.showPreview
      let template = this.templates.find(({templateName})=> templateName == tempName)
      this.selectedTemplate = template
    },
    closePreview(){
      this.showPreview = !this.showPreview
    }
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
</style>
