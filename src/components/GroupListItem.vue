<template>
<tr>
    <td>{{ group.title }}</td>
    <td>{{ group.owner }}</td>
    <td v-bind:class = "group.isActive ? 'active' : 'inactive'">{{group.isActive ? 'active' : 'inactive'}}</td>
    <td><a :href="'https://steamcommunity.com/groups/' + group.gid">join</a></td>
</tr>
</template>

<script>

export default {
    props: {
        group: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/main.scss";

.active {
    color: green;
}

.inactive {
    color: $secondary-color;
}


</style>