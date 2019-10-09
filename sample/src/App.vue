<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "66666"
    };
  },
  created() {
    console.log("==============created======================");
    console.log(this.$router.resolveHooks);
    console.log("====================================");
  },
  mounted() {
    this.$data.demoQ = "DemoQiang";
    console.log("==============mounted======================");
    console.log(this.$router.resolveHooks);
    console.log("====================================");
  },
  beforeCreate() {
    console.log("================beforeCreate====================");
    console.log(this.$router.resolveHooks);
    console.log("====================================");
  },
  updated() {
    console.log('===================updated=================');
     console.log(this.$router.resolveHooks);
     console.log('====================================');
  },

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
