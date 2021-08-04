<template>
  <div class="content">
    <Profile />
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile'

export default {
  name: 'Home',
  components: {
    Profile,
  }
}
</script>
