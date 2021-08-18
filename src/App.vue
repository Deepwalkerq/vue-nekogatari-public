<template>
<div class="container">
  <div class="logo"><router-link to="/">Nekogatari</router-link></div>
  <NavBar />
  <router-view
  v-bind:player="player"/>
</div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar,
  },
  data() {
    return {
      player: new Audio(require('./assets/music/sound1.mp3'))
    }
  },
  created() {
    this.player.volume = "0.2"
    this.player.loop = true
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
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;


  @media (min-width: 992px) {
    height: 5%;
  }


  a {
    text-decoration: none;
    color: $primary-color;
    text-transform: uppercase;
    font-size: 2.5em;

    @media (min-width: 576px) {
      font-size: 4em;
    }
    
    @media (min-width: 992px) {
      font-size: 6em;
    }


  }
}
</style>
