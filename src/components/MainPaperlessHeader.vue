<template>
  <header class="header">
    <div class="header-logo">
      <span class="header-logo-text"> Paperless </span>
    </div>
    <div class="header-profile">
      <div class="header-profile-settings">
        <v-icon icon="settings"></v-icon>
      </div>
      <div class="header-profile-image">
        <img src="https://picsum.photos/200" alt="profile image" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap");
.header{
    display: flex;
    justify-content: space-between;
    position:fixed;
    top:0;
    height: 10vh;
    width: 100%;
    background-color: $primary;
    &-logo{
        &-text{
              font-family: "Dancing Script", cursive;
        }
    }
    &-profile{
        &-settings{

        }
        &-image{

        }
    }

}
</style>
