<template>
  <div class="content">
    <Profile
    v-bind:player="player" />
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile'

export default {
  props: ["player"],
  name: 'Home',
  components: {
    Profile,
  }
}
</script>
