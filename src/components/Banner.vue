<template>
    <div class="container">
        <div class="bannerbox">
            <div class="banner1box">
                <div class="banner1"><a href="">1</a></div>
                <div class="banner1"><a href="">2</a></div>
                <div class="banner1"><a href="">3</a></div>
            </div>
            <div class="banner2box">
                <div class="banner2"><a href="">4</a></div>
                <div class="banner2"><a href="">5</a></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "banner.vue"
    }
</script>

<style scoped>
    .container {
        width: 100%;
        overflow: hidden;
    }

    .bannerbox {
        width: 1200px;
        margin: 0 auto;
    }
    .bannerbox a{
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
    }
    .banner1box {
        width: 1200px;
        margin: 20px 0;
        height: 100px;
        display: flex;
        justify-content: space-between;
    }
    .banner1 {
        width: 380px;
        height: 100%;
        background-color: #0a6999;
    }
    .banner1 a{
        line-height: 100px;
    }
    .banner2box {
        width: 1200px;
        height: 500px;
        display: flex;
        justify-content: space-between;
    }

    .banner2 {
        width: 590px;
        height: 100%;
        background-color: #d4a1ee;
    }
    .banner2 a{
        line-height: 500px;
    }
</style>