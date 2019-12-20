<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="tohome">home</el-button>
  </div>
</template>
<script>
  export default {
    methods:{
      tohome:function(){
        this.$router.push({name:'home'})
      }
    }
  }
</script>