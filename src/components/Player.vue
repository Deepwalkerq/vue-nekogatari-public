<template>
    <div class="title"><span>Music</span></div>
    <div class="controls">
        <button @click="play"><img src="../assets/play.svg" alt="play"></button>
        <button @click="pause"><img src="../assets/pause.svg" alt="play"></button>
    </div>
</template>
<script>


export default {
    props: ["player"],
    methods: {
        play() {
            this.player.play()
        },
        pause() {
            this.player.load()
            this.player.pause()
        }
    }
};
</script>

<style lang="scss" scoped>
.title {
    margin-bottom: 20px;
    text-align: center;
}

.controls {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

button {
    border: none;
    background: none;
    width: 80px;
    height: 80px;
    cursor: pointer;
}

</style>