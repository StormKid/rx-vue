<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-btn round color="primary" dark>{{name|real(vue)}}</v-btn>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
       name:'value',
       vue:this
    }
  },
   filters: {
      real(value,vue){
          console.log('===============vue=====================');
          console.log(vue);
          console.log('====================================');
          console.log('================value====================');
          console.log(value);
          console.log('====================================');
      }
   }

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
