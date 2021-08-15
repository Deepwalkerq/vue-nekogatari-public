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
        th {
            padding: 5px;
            border-bottom: 1px solid $primary-color;
            white-space: nowrap;

            &:last-child {
                border-bottom: 1px solid $primary-color;

                @media (min-width: 576px) {
                border-bottom: none;
            }
            }

            @media (min-width: 576px) {
                padding: 15px;
            }
        }

        td {
            text-align: center;
            padding: 5px;

            @media (min-width: 576px) {
                width: 25%;
            }
        }  
    }
}
</style>