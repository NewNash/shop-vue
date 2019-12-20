<template>
    <div class="home">
        <MyHeader></MyHeader>
        <MyNav></MyNav>
        <MySlider></MySlider>
        <Banner></Banner>
        <BestSeller title="BEST SELLER"></BestSeller>
        <BestSeller title="FEATURED PRODUCTS"></BestSeller>
        <MyFooter></MyFooter>
        <FixedSec></FixedSec>
    </div>
</template>

<script>
    // @ is an alias to /src
    import MyHeader from '../components/MyHeader.vue'
    import MyNav from '../components/MyNav.vue'
    import MySlider from '../components/MySlider.vue'
    import Banner from '../components/Banner.vue'
    import BestSeller from '../components/BestSeller.vue'
    import MyFooter from '../components/MyFooter.vue'
    import FixedSec from '../components/FixedSec.vue'
    export default {
        name: 'home',
        components: {
            MyHeader, MyNav, MySlider, Banner,BestSeller,MyFooter,FixedSec
        }
    }
</script>
<style scoped>
    .home{
        position: relative;
        width: 100%;
    }
</style>
