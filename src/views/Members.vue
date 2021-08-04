<template>
  <div class="content">
    <ProfileList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileList from '@/components/ProfileList'

export default {
  name: 'Members',
  components: {
    ProfileList,
  }
}
</script>