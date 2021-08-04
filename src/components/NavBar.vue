<template>
    <div id="nav">
         <!-- | -->
        <router-link to="/members">members</router-link>
        <router-link to="/groups">groups</router-link>
    </div>
</template>

<style lang="scss">
@import "@/main.scss";

#nav {
  height: 6%;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid $primary-color;

  
  a {
  font-weight: bold;
  font-size: 1.2em;
  color: $primary-color;
  text-decoration: none;
  margin: 0.4em;
  }

  a.router-link-exact-active {
  color: $secondary-color;
  }

}
</style>