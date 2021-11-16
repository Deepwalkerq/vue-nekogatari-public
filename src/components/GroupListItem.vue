<template>
<tr v-if="group.isActive">
    <td>{{ group.groupName }}</td>
    <td>
        <a :href="'https://steamcommunity.com/profiles/' + group.groupOwner">
        {{ group.groupOwnerName || "steam" }}</a>
    </td>
    <td>{{ group.groupTag }}</td>
    <td>{{ group.memberCount }}</td>
    <td v-bind:class = "group.isActive ? 'active' : 'inactive'">{{group.isActive ? 'active' : 'inactive'}}</td>
    <td><a :href="group.groupURL">join</a></td>
</tr>

<tr v-else>
    <td><span><del>Invalid group</del></span></td>
    <td><span>-</span></td>
    <td><span>-</span></td>
    <td><span>-</span></td>
    <td v-bind:class = "group.isActive ? 'active' : 'inactive'">{{group.isActive ? 'active' : 'inactive'}}</td>
    <td><span>-</span></td>

</tr>

</template>

<script>

export default {
    props: {
        group: {
            type: Object
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