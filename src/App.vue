<template>
<div class="container">
  <div class="logo"><router-link to="/">Nekogatari</router-link></div>
  <NavBar />
  <router-view/>
</div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar,
  }
}
</script>

<style lang="scss">
@import "@/main.scss";
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

#app {
  font-family: 'Archivo Black', sans-serif;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

// Nekogatari logo
.logo {
  height: 14%;
  display: flex;
  justify-content: center;
  align-items: center;


  a {
    text-decoration: none;
    color: $primary-color;
    text-transform: uppercase;
    font-size: 6em;
  }
}
</style>
