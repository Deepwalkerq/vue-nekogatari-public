<template>
    <div class="groups-list">
        <table id="groups-table" v-if="groups">
            <tr>
                <th>Group name</th>
                <th>Owner</th>
                <th>Status</th>
                <th></th>
            </tr>
            <GroupListItem
            v-for="group in groups"
            v-bind:group="group"
            v-bind:key="group.id"
            />
            
            
            
        </table>
        <div v-else><span>no groups at the moment</span></div>
    </div>
</template>
<script>
import GroupListItem from '@/components/GroupListItem'

export default {
    props: ['groups'],
    components: {
        GroupListItem,
    }
}
</script>

<style lang="scss">
@import "@/main.scss";

.groups-list {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-flow: column;

    color: $primary-color;
    font-size: 1.4em;
}

a {    
    color: $primary-color;
    text-decoration: none;

    &:hover {
        color: $secondary-color;
        transition: .2s;
    }
}

#groups-table {
    border-collapse: collapse;
    tr {
        th {
            padding: 15px;
            border-bottom: 1px solid $primary-color;
            &:last-child {
                border-bottom: none;
            }
        }
        td {
            padding: 5px;
            width: 20%;
            text-align: center;
        }  
    }
}
</style>