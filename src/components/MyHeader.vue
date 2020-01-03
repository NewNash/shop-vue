<template>
    <div class="container">
        <div class="box">
            <div class="myinfo">
                <ul>
                    <li>
                        <router-link to="/">Sign In / Join Free</router-link>
                    </li>
                    <li class="user">
                        <i class="el-icon-user" @mouseover="showuserinfo" @mouseout="hideuserinfo"></i>
                        <div class="userinfo" v-show="ifshowuserinfo" @mouseover="showuserinfo" @mouseout="hideuserinfo">
                            <ul>
                                <li><router-link to="/">My Account</router-link></li>
                                <li><router-link to="/">My Orders</router-link></li>
                                <li><router-link to="/">My Favorites</router-link></li>
                                <li><router-link to="/">My Review</router-link></li>
                            </ul>
                        </div>
                    </li>
                    <li><i class="el-icon-user"></i></li>
                    <li><i class="el-icon-goods"></i></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "myheader",
        data:()=>{
            return({
                ifshowuserinfo:false
            })
        },
        methods:{
            showuserinfo:function(){
                this.ifshowuserinfo = true
            },
            hideuserinfo:function(){
                this.ifshowuserinfo = false
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        height: 40px;
        background-color: #000000;
    }

    .box {
        width: 1200px;
        margin: 0 auto;
        height: 40px;
    }

    .myinfo {
        float: right;
        width: 400px;
    }

    .myinfo>ul {
        height: 40px;
        line-height: 40px;
        color: #ffffff;
        font-size: 12px;
    }

    .myinfo>ul>li {
        float: left;
        display: inline-block;
        margin: 0 20px;
    }
    .myinfo>ul>li>i:hover{
        cursor: pointer;
    }

    .myinfo>ul>li>i {
        font-size: 25px;
        line-height: 40px;
    }
    .user{
        position: relative;
    }
    .userinfo{
        width: 120px;
        border: 1px solid #bdbbbb;
        position: absolute;
        background-color: #ffffff;
        left: -35px;
        top: 40px;
        z-index: 99;
    }
    .userinfo ul{
        padding: 10px;
    }
    .userinfo ul li a{
        font-size: 15px;
        color: #1e1e1e;
    }

</style>