<template>
    <div class="profile-list">
        <div class="row">
            <div class="item">
                <img src="@/assets/fassu.png" alt="avatar">
                <ul>
                    <li><span>fassu</span></li>
                    <li><a href="https://steamcommunity.com/id/fassu">steam</a></li>
                </ul>
            </div>
            <div class="item">
                <img src="@/assets/cappy.png" alt="avatar">
                <ul>
                    <li><span>cappy</span></li>
                    <li><a href="https://steamcommunity.com/id/TransFemale">steam</a></li>
                </ul>
            </div>
            <div class="item">
                <img src="@/assets/cony.png" alt="avatar">
                <ul>
                    <li><span>cony</span></li>
                    <li><a href="https://steamcommunity.com/id/lxyalcony">steam</a></li>
                </ul>
            </div>
            <div class="item">
                <img src="@/assets/visual.png" alt="avatar">
                <ul>
                    <li><span>visual</span></li>
                    <li><a href="https://steamcommunity.com/id/katzenmaedchen">steam</a></li>
                </ul>
            </div>
            <div class="item">
                <img src="@/assets/fermi.png" alt="avatar">
                <ul>
                    <li><span>fermi</span></li>
                    <li><a href="https://steamcommunity.com/id/xFermion">steam</a></li>
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
    // background: green;

    display: flex;
    flex-flow: column;
}

.row {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.item {
    width: 300px;
    height: 300px;
    // background: yellow;
    text-align: center;

    @media (min-width: 576px) {
        width: 50%;
    }

    @media (min-width: 992px) {
        width: 30%;
    }

}

img {
    border-radius: 50%;
    border: 2px solid $primary-color;
    margin-bottom: 20px;
    width: 132px;
    height: 132px;
    object-fit: cover;
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