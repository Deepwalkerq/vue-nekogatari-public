<template>
    <div class="groups-list">
        <table id="groups-table" v-if="groups">

            <th>Group name</th>
            <th>Owner</th>
            <th>Group tag</th>
            <th>Members</th>
            <th>Status</th>
            <th></th>
            
            <GroupListItem
            v-for="group in groups"
            v-bind:group="group"
            v-bind:key="group.id"
            />
            
            
            
        </table>
        <div v-else><span>No groups at the moment</span></div>
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
    flex-flow: column;
    align-items: center;

    color: $primary-color;
    font-size: 1.1em;

    @media (min-width: 576px) {
        font-size: 1.6em;
    }


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
        
        td {
            text-align: center;
            padding: 0;

            @media (min-width: 576px) {
                padding: 10px;
            }
        }  
    }

    th {
    padding: 5px;
    border-bottom: 1px solid $primary-color;
    white-space: nowrap;
    
    &:last-of-type {
        border-bottom: none;

        @media (min-width: 576px) {
            border-bottom: none;
        }
    }
    
    @media (min-width: 576px) {
                padding-bottom: 10px;
            }
    }
}

</style>