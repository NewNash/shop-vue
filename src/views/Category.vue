<template>
    <div class="container">
        <MyHeader></MyHeader>
        <MyNav></MyNav>
        <MyFooter></MyFooter>
        <FixedSec></FixedSec>
    </div>
</template>

<script>
    import MyHeader from '../components/MyHeader.vue'
    import MyNav from '../components/MyNav.vue'
    // import MySlider from '../components/MySlider.vue'
    // import Banner from '../components/Banner.vue'
    // import BestSeller from '../components/BestSeller.vue'
    import MyFooter from '../components/MyFooter.vue'
    import FixedSec from '../components/FixedSec.vue'
    export default {
        name: "Category",
        components:{
            MyHeader,MyFooter,MyNav,FixedSec
        },
        watch:{
            $route(to,from){
                console.log(to)
                console.log(from)
                console.log(this.$route.params)
            }
        }
    }
</script>

<style scoped>

</style>