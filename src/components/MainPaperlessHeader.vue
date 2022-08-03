<template>
  <header class="header">
    <span class="header-logo"> Paperless </span>
    <div class="header-profile">
      <div class="header-profile-settings">
        <v-icon>settings</v-icon>
      </div>
      <img class="header-profile-image" src="https://picsum.photos/200" alt="profile image" />
    </div>
  </header>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap");

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0 1.5rem 0 1.5rem;
  top: 0;
  height: 6vh;
  width: 100%;
  background-color: $primary;
  z-index: 100;
  &-logo {
    font-family: "Dancing Script", cursive;
    color: $white;
    font-size: 2rem;
  }

  &-profile {
    display: flex;
    height: 100%;
    width: 8rem;
    align-items: center;
    justify-content: space-around;
    &-image {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .v-icon{
    font-size:2.2rem;
  }
}
</style>
