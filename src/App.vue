<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style >
  *{
    margin:0;
    padding: 0;
  }
  a,a:hover,a:active,a:visited{
    text-decoration: none;
    color:#ffffff;
  }
  a:hover{
    text-decoration: underline;
  }
  ul{
    list-style: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
