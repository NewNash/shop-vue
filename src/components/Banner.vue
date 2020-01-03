<template>
    <div class="container">
        <div class="bannerbox">
            <div class="banner1box">
                <div class="banner1" v-for="item in banner1img" :key="item">
                    <a href=""><img :src="item" alt=""></a>
                </div>
            </div>
            <div class="banner2box">
                <div class="banner2" v-for="item in banner2img" :key="item">
                    <a href=""><img :src="item" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "banner.vue",
        data(){
            return({
                banner1img:[],
                banner2img:[]
            })
        },
        created() {
            axios.get('http://127.0.0.1:5000/banner1img').then(res=>this.banner1img = res.data.data)
            axios.get('http://127.0.0.1:5000/banner2img').then(res=>this.banner2img = res.data.data)
        }
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
        height: 90px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
    }
    .banner1 {
        width: 390px;
        height: 100%;
        background-color: #0a6999;
        overflow: hidden;
    }
    .banner1 a{
        line-height: 100px;
    }
    .banner1 img{
        width: 100%;
        height: 100%;
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
    .banner2 img{
        width: 100%;
        height: 100%;
    }
</style>