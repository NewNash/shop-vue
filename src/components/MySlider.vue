<template>
    <div class="container">
        <el-carousel class="slider" trigger="click" height="600px">
            <el-carousel-item v-for="(item,index) in imgurls" :key="index">
                <div class="slide">
                    <img :src="item.url"   alt="">
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "MySlider",
        data(){
            return({
                pics:['#63dea2','#abcdef','#b34524','#eee8be'],
                imgurls:[]
            })
        },
        created() {
            axios.get('http://127.0.0.1:5000/sliderimgurls').then(res=>this.imgurls=res.data.data).catch((error)=>console.log(error))
        }
    }
</script>

<style scoped>
    .container{
        width: 100%;
    }
.slider{
    width: 1200px;
    margin: 0 auto;
    background-color: #333;
}
    .slide{
        width: 100%;
        height: 100%;
    }

</style>