<template>
    <div class="container">
        <div class="box">
            <div class="title">
                <p>
                    <span>{{title}}</span>
                    <a href="">MORE</a>
                </p>
            </div>
            <div class="mainbox" @mouseenter="arrowshow=true" @mouseleave="arrowshow=false">
                <div class="main"
                     :style="{width:(rightpiclength+leftpicLength+4)*300+'px',transform:`translateX(${translate}px)`}">
                    <div class="content">
                        <div class="content-pic">
                            <img src="" alt="">
                        </div>
                        <p class="picTitle">Raglan Sleeves Letter Printed Crew Neck Sweatshirt kahaki-xl</p>
                        <p class="price">
                            <span class="now"><span class="unit">USD</span><span class="number">$5.00</span></span>
                            <span class="old"><span class="unit">USD</span><span class="number">$6.00</span></span>
                        </p>
                    </div>
                    <div class="content">
                        <div class="content-pic">
                            <img src="" alt="">
                        </div>
                        <p class="picTitle">Raglan Sleeves Letter Printed Crew Neck Sweatshirt kahaki-xl</p>
                        <p class="price">
                            <span class="now"><span class="unit">USD</span><span class="number">$5.00</span></span>
                            <span class="old"><span class="unit">USD</span><span class="number">$6.00</span></span>
                        </p>
                    </div>
                    <div class="content">
                        <div class="content-pic">
                            <img src="" alt="">
                        </div>
                        <p class="picTitle">Raglan Sleeves Letter Printed Crew Neck Sweatshirt kahaki-xl</p>
                        <p class="price">
                            <span class="now"><span class="unit">USD</span><span class="number">$5.00</span></span>
                            <span class="old"><span class="unit">USD</span><span class="number">$6.00</span></span>
                        </p>
                    </div>
                    <div class="content">
                        <div class="content-pic">
                            <img src="" alt="">
                        </div>
                        <p class="picTitle">Raglan Sleeves Letter Printed Crew Neck Sweatshirt kahaki-xl</p>
                        <p class="price">
                            <span class="now"><span class="unit">USD</span><span class="number">$5.00</span></span>
                            <span class="old"><span class="unit">USD</span><span class="number">$6.00</span></span>
                        </p>
                    </div>

                    <div class="content">
                        <div class="content-pic">
                            <img src="" alt="">
                        </div>
                        <p class="picTitle">Raglan Sleeves Letter Printed Crew Neck Sweatshirt kahaki-xl</p>
                        <p class="price">
                            <span class="now"><span class="unit">USD</span><span class="number">$5.00</span></span>
                            <span class="old"><span class="unit">USD</span><span class="number">$6.00</span></span>
                        </p>
                    </div>
                    <div class="content">
                        <div class="content-pic">
                            <img src="" alt="">
                        </div>
                        <p class="picTitle">Raglan Sleeves Letter Printed Crew Neck Sweatshirt kahaki-xl</p>
                        <p class="price">
                            <span class="now"><span class="unit">USD</span><span class="number">$5.00</span></span>
                            <span class="old"><span class="unit">USD</span><span class="number">$6.00</span></span>
                        </p>
                    </div>
                    <div class="content">
                        <div class="content-pic">
                            <img src="" alt="">
                        </div>
                        <p class="picTitle">Raglan Sleeves Letter Printed Crew Neck Sweatshirt kahaki-xl</p>
                        <p class="price">
                            <span class="now"><span class="unit">USD</span><span class="number">$5.00</span></span>
                            <span class="old"><span class="unit">USD</span><span class="number">$6.00</span></span>
                        </p>
                    </div>
                    <div class="content">
                        <div class="content-pic">
                            <img src="" alt="">
                        </div>
                        <p class="picTitle">Raglan Sleeves Letter Printed Crew Neck Sweatshirt kahaki-xl</p>
                        <p class="price">
                            <span class="now"><span class="unit">USD</span><span class="number">$5.00</span></span>
                            <span class="old"><span class="unit">USD</span><span class="number">$6.00</span></span>
                        </p>
                    </div>
                    <div class="content">
                        <div class="content-pic">
                            <img src="" alt="">
                        </div>
                        <p class="picTitle">Raglan Sleeves Letter Printed Crew Neck Sweatshirt kahaki-xl</p>
                        <p class="price">
                            <span class="now"><span class="unit">USD</span><span class="number">$5.00</span></span>
                            <span class="old"><span class="unit">USD</span><span class="number">$6.00</span></span>
                        </p>
                    </div>
                </div>
                <transition name="fade">
                    <div v-show="arrowshow">
                        <div  class="prearrow arrow" @click="leftSlide">
                            <i class="el-icon-arrow-left"></i>
                        </div>
                        <div class="nextarrow arrow" @click="rightSlide">
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BestSeller",
        props: ['title'],
        data() {
            return ({
                arrowshow: false,
                mainWidth: 2400,
                translate: 0,
                leftpicLength:0,
                rightpiclength:5,
            })
        },
        methods: {
            leftSlide:function(){
                if(this.leftpicLength>=4){
                    this.translate += 4 * 300
                    this.leftpicLength -=4
                    this.rightpiclength+=4
                    return
                }if(this.leftpicLength===0){
                    this.rightSlide()
                }
                else{
                    this.translate += 300 * this.leftpicLength
                    this.rightpiclength+=this.leftpicLength
                    this.leftpicLength -= this.leftpicLength
                }
            },
            rightSlide:function(){
                if(this.rightpiclength>=4){
                    this.translate -= 4 * 300
                    this.rightpiclength -=4
                    this.leftpicLength+=4
                    return
                }if(this.rightpiclength===0){
                    this.leftSlide()
                }
                else{
                    this.translate -= 300 * this.rightpiclength
                    this.leftpicLength+=this.rightpiclength
                    this.rightpiclength -= this.rightpiclength
                }
            },
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
    }

    .box {
        width: 1200px;
        margin: 20px auto;
        overflow: hidden;
        position: relative;
    }

    .title p {
        width: 100%;
        border-bottom: 1px solid #000000;
        height: 30px;
    }

    .title p span {
        font-family: source_sans_prosemibold, Arial, sans-serif;
        float: left;
        font-size: 24px;
        font-weight: normal;
    }

    .title p a {
        color: #000000;
        float: right;
        font-size: 14px;
        font-style: italic;
        line-height: 35px;
    }
    .mainbox{
        width: 1200px;
        overflow: hidden;
        position: relative;
    }
    .main {
        margin: 40px auto 20px;
        height: 500px;
        position: relative;
        overflow: hidden;
        transition: all 1s;
    }
    .arrow {
        position: absolute;
        top: 250px;
        height: 40px;
        width: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        line-height: 40px;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.8);
    }
    .arrow:hover {
        cursor: pointer;
    }
    .arrow.prearrow{
        left: 0;
        border-radius: 0 20px 20px 0;
    }
    .arrow.nextarrow {
        border-radius: 20px 0 0 20px;
        left:1180px
    }

    .content {
        width: 300px;
        float: left;
        overflow: hidden;
        height: 100%;
    }

    .content-pic {
        width: 100%;
        height: 75%;
        border: 5px solid #ffffff;
        box-sizing: border-box;
        background-color: #2ca294;
    }

    .picTitle {
        margin-top: 20px;
        height: 50px;
        padding: 0 10px;
    }

    .price {
        padding-left: 10px;
    }

    .price .unit {
        margin-right: 5px;
    }

    .price > .now > .number {
        font-weight: 700;
        font-size: 20px;
        margin-right: 20px;
    }

    .price > .old > .number {
        font-size: 14px;
        text-decoration: line-through;
        color: #999999;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

</style>