<template>
    <div class="container">
        <div class="main">
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
                <div class="subNavBox" v-for="(item,index) in navs"
                     :key="item.id"
                     v-show="item.sub.show"
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
    }

    .info {
        color: red;
    }
</style>
