<template>
    <div class="container">
        <div class="main">
            <div class="logobox">
                <a href="/" class="logo"><img src="../img/logo.png" alt=""></a>
                <el-button @click="increment"><i class="el-icon-plus"></i></el-button>
                <p>{{count}}</p>
                <el-button @click="decrement"><i class="el-icon-minus"></i></el-button>
                <div class="searchbox">
                    <label>
                        <input type="text">
                    </label>
                    <i class="el-icon-search "></i>
                </div>
            </div>
            <div class="navbox">
                <ul class="nav">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li v-for="(item,index) in navs" :key="item.id">
                        <router-link :to="'/c/'+item.name"
                                     @mouseover.native="handleMouseOver(index)"
                                     @mouseout.native="handleMouseOut(index)">{{item.name}}
                        </router-link>
                    </li>
                </ul>
                <div v-for="(item,index) in navs"
                     :key="item.id"
                     :class="item.sub.show?'subNavBox active':'subNavBox'"

                     @mouseover="handleMouseOver(index)"
                     @mouseout="handleMouseOut(index)">
                    <div class="info">{{item.sub.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        components: {},
        computed:{
          count:function () {
              return this.$store.state.count
          }
        },
        data: () => {
            return ({
                ifshow: false,
                navs: [
                    {
                        id: 1,
                        name: 'wedding',
                        sub: {
                            show: false,
                            name: 'wedding description'
                        }
                    }, {
                        id: 2,
                        name: 'man',
                        sub: {
                            show: false,
                            name: 'man description'
                        }
                    }, {
                        id: 3,
                        name: 'computer',
                        sub: {
                            show: false,
                            name: 'computer description'
                        }
                    },
                    {
                        id: 4,
                        name: 'phone',
                        sub: {
                            show: false,
                            name: 'phone description'
                        }
                    }
                ],
                // nav: ['wedding', 'man', 'computer'],
                // navinfo:['wedding description','man description','computer description'],
                // infoshow:false
            })
        },
        methods: {
            handleMouseOver: function (index) {
                this.navs[index].sub.show = true
            },
            handleMouseOut: function (index) {
                this.navs[index].sub.show = false
            },
            increment:function(){
                this.$store.commit('increatement')
            },
             decrement:function(){
                this.$store.commit('decrement')
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        position: relative;
    }

    .main {
        width: 1200px;
        margin: 0 auto;
        position: relative;
    }

    .logobox {
        width: 1200px;
        height: 60px;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
    }

    .logo {
        margin-top: 10px;
        text-align: center;
    }

    .logo img {
        height: 40px;
    }

    .searchbox {
        width: 300px;
        height: 40px;
        border: 1px solid #bbbbbb;
        margin-top: 10px;
        border-radius: 4px;
    }

    .searchbox input {
        border: none;
        outline: none;
        width: 75%;
        vertical-align: top;
        padding: 0 8px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
    }

    .searchbox i {
        font-size: 38px;
        color: #c3c3c3;
    }

    .navbox {
        position: relative;
        margin-top: -20px;
    }

    .nav {
        position: relative;
        width: 100%;
        height: 60px;
        display: flex;
        list-style: none;
    }

    .nav li {
        line-height: 60px;
        text-align: center;
    }

    .nav li a {
        color: #000000;
        padding: 10px;
    }

    .nav li a:hover {
        text-decoration: underline;
    }

    .subNavBox {
        background-color: #ffffff;
        position: absolute;
        box-sizing: border-box;
        width: 1200px;
        height: 400px;
        top: 40px;
        left: 0;
        padding: 20px;
        z-index: 10;
        opacity: 0;
        transition: all .3s ease;
        transform: perspective(500px) rotateX(-90deg);
        transform-origin: top center 0;
    }
    .subNavBox.active{
        opacity: 1;
        transform: perspective(500px) rotateX(0deg);
    }
    .info {
        color: red;
    }
</style>
