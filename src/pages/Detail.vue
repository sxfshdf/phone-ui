<template>
  <div class="detail">
    <Head :name="$route.name"></Head>
  </div>
</template>

<script>
  import Head from '../components/Head.vue'

  export default {
    name: "Detail",
    components: {
      Head
    },
    created(){
      console.log(this.$route.name)
    }
  }
</script>

<style scoped>

</style>