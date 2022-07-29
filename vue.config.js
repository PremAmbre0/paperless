module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/main.scss";
          @import "@/scss/colors.scss";
        `
      }
    }
  },
  transpileDependencies: ["vuetify"],
};
