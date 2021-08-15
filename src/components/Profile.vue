<template>
    <div class="profile">
        <img src="@/assets/deep.png" alt="avatar">
        <ul>
            <li><span>deep</span></li>
            <li><a href="https://steamcommunity.com/id/-6q/">steam</a></li>
        </ul>

    </div>
</template>

<style lang="scss" scoped>
@import "@/main.scss";

img {
    border-radius: 50%;
    border: 2px solid $primary-color;
    margin-bottom: 20px;
}

.profile {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    font-size: 1.2em;

    ul {
    list-style: none;
    text-align: center;


    li {
        margin: 5px auto;
        color: $primary-color;

        &:first-child {
        font-size: 1.8em;
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
}

</style>