<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Head from './components/Head.vue'
export default {
  name: 'app',
  components: {
    Head
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="scss">
  @import  './assets/css/variable.scss';
#app {
  padding: px(20);
  background: #fafafa;
  min-height: 100vh;
}
</style>
