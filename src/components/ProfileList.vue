<template>
    <div class="profile-list">
        <div class="row">
            <div class="item">
                <img src="@/assets/fassu.jpg" alt="avatar">
                <ul>
                    <li><span>fassu</span></li>
                    <li><a href="https://steamcommunity.com/id/fassu">steam</a></li>
                </ul>
            </div>
            <div class="item">
                <img src="@/assets/fassu.jpg" alt="avatar">
                <ul>
                    <li><span>cappy</span></li>
                    <li><a href="https://steamcommunity.com/id/fassu">steam</a></li>
                </ul>
            </div>
            <div class="item">
                <img src="@/assets/fassu.jpg" alt="avatar">
                <ul>
                    <li><span>cony</span></li>
                    <li><a href="https://steamcommunity.com/id/fassu">steam</a></li>
                </ul>
            </div>

        </div>

        <div class="row">
            <div class="item">
                <img src="@/assets/fassu.jpg" alt="avatar">
                <ul>
                    <li><span>cony</span></li>
                    <li><a href="https://steamcommunity.com/id/fassu">steam</a></li>
                </ul>
            </div>
            <div class="item">
                <img src="@/assets/fassu.jpg" alt="avatar">
                <ul>
                    <li><span>cony</span></li>
                    <li><a href="https://steamcommunity.com/id/fassu">steam</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";

.profile-list {
    width: 100%;
    height: 100%;
    background: green;

    display: flex;
    flex-flow: column;


}

.row {
    height: 100%;
    display: flex;
    justify-content: space-around;
}

.item {
    width: 25%;
    height: 95%;
    background: yellow;
    text-align: center;
}

img {
    border-radius: 50%;
    border: 2px solid $primary-color;
    margin-bottom: 20px;
}


// List
ul {
    list-style: none;
    text-align: center;

    li {
        margin: 5px auto;
        color: $primary-color;

        &:first-child {
        font-size: 1.4em;
        margin-top: 0;
    }

        a {
            color: $primary-color;
            text-decoration: none;

            &:hover {
                color: $secondary-color;
                transition: .2s;
            }
        }
    }
}
</style>