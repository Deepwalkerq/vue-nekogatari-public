<template>
  <div class="content">
    <GroupList
      v-bind:groups="groups"
     />
  </div>
</template>

<script>
import GroupList from '@/components/GroupList'

export default {
  name: 'Groups',
  data() {
    return {
      groups: [
        {id: 1, title: 'Nekogatari', owner: 'deep', isActive: true, link: 'https://steamcommunity.com/groups/Nekogatari'},
        {id: 2, title: 'girlbulge', owner: 'fassu', isActive: true, link: 'https://steamcommunity.com/groups/girlbulge'},
      ]
    }
  },
  components: {
    GroupList,
  }
}
</script>