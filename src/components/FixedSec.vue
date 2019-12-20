<template>
    <div class="container">
        <el-button class="mybtn mybtn-toTop" icon="el-icon-arrow-up" @click="toTop"></el-button>
        <el-button class="mybtn mybtn-survery" icon="el-icon-edit-outline" @click="toSurvery"></el-button>
        <el-button class="mybtn mybtn-toBottom" icon="el-icon-arrow-down" @click="toBottom"></el-button>
    </div>
</template>

<script>
    export default {
        name: "FixedSec",
        data: () => {
            return ({
                timer: null
            })
        },
        methods: {
            toTop: function () {
                clearInterval(this.timer)
                this.timer = setInterval(() => {
                    document.documentElement.scrollTop -= 20
                    if (document.documentElement.scrollTop < 10) {
                        document.documentElement.scrollTop = 0
                    }
                    if (document.documentElement.scrollTop === 0) {
                        clearInterval(this.timer)
                    }
                }, 1)

            },
            toSurvery: function () {
                this.$router.push({name: 'about'})
            },
            toBottom: function () {
                clearInterval(this.timer)
                this.timer = setInterval(() => {
                    let a = document.documentElement.scrollTop
                    document.documentElement.scrollTop += 20
                    if (document.documentElement.scrollTop === a) {
                        clearInterval(this.timer)
                    }
                }, 1)
            },
        }
    }
</script>

<style scoped>
    .container {
        position: fixed;
        bottom: 5%;
        right: 5%;
        width: 50px;
        height: 150px;
        background-color: #ffffff;
    }

    .container .mybtn {
        margin: 0;
        padding: 0;
        display: block;
        width: 50px;
        height: 50px;
        font-size: 30px;
        border-radius: 0;
    }

</style>