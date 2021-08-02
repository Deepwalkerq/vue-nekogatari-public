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
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  padding: 30px;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;


  a {
    text-decoration: none;
    color: #ede0d4;
    text-transform: uppercase;
    font-size: 6em;

  }
}
</style>
