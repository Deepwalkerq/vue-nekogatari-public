<template>
    <div class="groups-list">
        <table>
            <tr>
                <th>Group name</th>
                <th>Owner</th>
                <th>Status</th>
                <th></th>
            </tr>
            <tr>
                <td>Nekogatari</td>
                <td>deep</td>
                <td>Active</td>
                <td><a href="https://steamcommunity.com/groups/Nekogatari">Join</a></td>
            </tr>
            <tr>
                <td>girlbulge</td>
                <td>fassu</td>
                <td>Active</td>
                <td><a href="https://steamcommunity.com/groups/girlbulge">Join</a></td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
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

table {
    tr {
        th {
            padding: 15px;
            border-bottom: 1px solid $primary-color;
            &:last-child {
                border-bottom: none;
            }
        }

        td {
            padding: 10px;
            width: 25%;
            text-align: center;

            &:nth-child(3) {
                color: green;
            }
        }
    }
}
</style>