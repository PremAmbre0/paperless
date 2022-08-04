<template>
    <div class="container" @click.self="$emit('closePreview')">
        <img v-if="imageUrl" class="templatepreview" :src="imageUrl" alt="Template Iamge" />
        <header class="header">
            <div class="header-exit">exit</div>
            <div>
                <input class="header-templateName" v-model="templateName" @input="isEditing=true"/>
                <span class="edit">save</span>
            </div>
            <div class="header-options">
                <div>builder</div>
                <div>delete</div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isEditing:false,
        }
    },
    props: {
        template: {
            type: Object,
            required: false,
        }
    },
    computed: {
        templateName() {
            if(this.template.templateName){
                return this.template.templateName
            }
            else{
                return ''
            }
        },
        imageUrl() {
            if(this.template.imageUrl){
                return this.template.imageUrl
            }else{
                return 'https://transparent.imageonline.co/'
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba($black, 0.8);
    z-index: 1000;
}

.templatepreview {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 80vw;
    height: 80vw;
    object-fit: cover;
}

.header {
    height: 10%;
    width: 100%;
    background: linear-gradient(rgba($black, 0.5), rgba($black, 0));
    color: $white;

    &-exit {
        &>i {
            font-size: 2rem;
        }
    }
    &-templateName{
        color:$white;
        border-bottom: 0.2rem solid $white;
        align-items: center;
    }
}
</style>