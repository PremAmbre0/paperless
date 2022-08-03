<template>
    <div class="container" @click.self="$emit('closePreview')">
            <img class="templatepreview" :src="imageUrl" alt="Template Iamge" />
        <header>
            <div class="exit">exit</div>
            <div class="templateName">{{ templateName }} edit</div>
            <div class="options">
                <div>builder</div>
                <div>delete</div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    props: {
        template: {
            type: Object,
            required: true,
        }
    },
    computed: {
        templateName() {
            return this.template.templateName
        },
        imageUrl() {
            return this.template.imageUrl
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
    background-color: rgba($black, 0.8);
    z-index: 1000;
}

.templatepreview {
    position: fixed;
    top: 10%;
    left:50%;
    transform: translateX(-50%);
    max-width: 80vw;
    object-fit: cover;
}
</style>