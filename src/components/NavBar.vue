<template>
    <div id="nav">
         <!-- | -->
        <router-link to="/members">members</router-link> |
        <router-link to="/groups">groups</router-link>
    </div>
</template>

<style lang="scss">

#nav {
  padding: 30px;
  height: 10%;
  
  a {
  font-weight: bold;
  color: #2c3e50;
  }

  a.router-link-exact-active {
  color: #42b983;
  }

}
</style>