<template>
    <div class="container">
        <el-carousel class="slider" trigger="click" height="500px">
            <el-carousel-item v-for="item in pics" :key="item">
                <div class="slide" :style="{backgroundColor:item }"></div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "MySlider",
        data(){
            return({
                pics:['#63dea2','#abcdef','#b34524','#eee8be']
            })
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