<template>
  <div class="content">
    <GroupList
      v-bind:groups="groups"
     />
  </div>
</template>

<script>
import GroupList from '@/components/GroupList'
import groupsData from '@/data/updatedgroups'

export default {
  name: 'Groups',
  data() {
    return {
      groups: groupsData
    }
  },
  components: {
    GroupList,
  }
}
</script>