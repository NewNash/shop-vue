<template>
    <div class="container">
        <div class="box">
            <div class="content">
                <p class="title">FOLLOW US</p>
                <div class="info">
                    <p>Follow us in social media</p>
                    <div class="contentbox">
                        <a href="" class="icon"><i class="el-icon-eleme"></i></a>
                        <a href="" class="icon"><i class="el-icon-star-off"></i></a>
                        <a href="" class="icon"><i class="el-icon-goods"></i></a>
                        <a href="" class="icon"><i class="el-icon-help"></i></a>
                    </div>
                </div>
            </div>
            <div class="content">
                <p class="title">NEWSLETTER</p>
                <div class="info">Sign up for newsletter
                    <p class="contentbox ">
                        <el-input class="email" v-model="email" type="eamil"
                                  size="small"
                                  placeholder="Enter your eamil address" @change="emailchange"></el-input>
                        <el-button size="small" type="info" class="join">Join</el-button>
                    </p>
                </div>
            </div>
            <div class="content">
                <p class="title">GENERAL LINKS</p>
                <div class="info">
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Return Policy</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="content">
                <p class="title">MY ACCOUNT</p>
                <div class="info">
                    <ul>
                        <li><a href="">My Account</a></li>
                        <li><a href="">My Order</a></li>
                        <li><a href="">My Favorite</a></li>
                        <li><a href="">Site Map</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="rights">Copyright Notice ©2016 FecShop.com All rights reserved.</div>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
        data:()=>{
            return({
                email:''
            })
        },
        methods:{
            emailchange:function(){

            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        background-color: #f2f2f2;
        position: relative;
    }

    .box {
        width: 1200px;
        margin: 0 auto;
        height: 300px;
        display: flex;
        justify-content: space-between;
    }
    .content{
        height: 300px;
        width: 250px;
        overflow: hidden;
    }
    .title{

        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #999999;
    }
    .info{
        margin-top: 20px;
        font-size: 12px;
        color: #666666;
    }
    .info ul{
        list-style: none;
    }
    .info ul li{
        margin-bottom: 15px;
    }
    .info ul li a{
        color:#666666;
    }
    .info ul li a:hover{
        text-decoration: underline;
    }
    .contentbox{
        margin-top: 15px;
    }
    .icon{
        display: inline-block;
        width: 30px;
        height: 30px;
        font-size: 26px;
        background-color: #666666;
        margin-right: 5px;
        text-align: center;
        line-height: 30px;
        border-radius: 5px;
    }
    .iconbox a:first-child:hover{
        background-color: #32c8fa;
    }
    .iconbox a:nth-child(2):hover{
        background-color: #2f7dfa;
    }
    .iconbox a:nth-child(3):hover{
        background-color: #fa0021;
    }
    .iconbox a:last-child:hover{
        background-color: #fa2fda;
    }
    .email{
        width: 180px;
    }

    .rights{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
        color: #666666;
    }
</style>