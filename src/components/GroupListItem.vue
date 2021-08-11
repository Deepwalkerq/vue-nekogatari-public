<template>
<tr>
    <td>{{ group.title }}</td>
    <td>{{ group.owner }}</td>
    <!-- <td class="active" v-if="group.isActive">active</td>
    <td class="inactive" v-else>inactive</td> -->
    <td v-bind:class = "group.isActive ? 'active' : 'inactive'">{{group.isActive ? 'active' : 'inactive'}}</td>
    <td><a :href="group.link">join</a></td>
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