<template>
    <div id="nav">
         <!-- | -->
        <router-link to="/members">members</router-link>
        <router-link to="/groups">groups</router-link>
    </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";

#nav {
  height: 8%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid $primary-color;
  padding: 10px 0;
  flex-flow: column;

  @media (min-width: 576px) {
    flex-flow: row;
  }

  @media (min-width: 992px) {
    width: 840px;
    height: 5%;
  }

  
  a {
  font-weight: bold;
  font-size: 1.4em;
  color: $primary-color;
  text-decoration: none;
  margin: 0.2em;

  @media (min-width: 576px) {
    margin: 0.4em;

  }

  &:hover {
    color: $secondary-color;
    transition: .2s;
    }
  }

  a.router-link-exact-active {
  color: $secondary-color;
  }

}
</style>