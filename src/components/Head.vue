<template>
  <div class="header" :class="{detail: name==='detail'}">
    <div class="title">
      <svg class="icon left" aria-hidden="true"
           v-if="name==='detail'"
           @click="goBack"
      >
        <use xlink:href="#icon-left"></use>
      </svg>
      Your Collections
    </div>
    <svg class="icon search" aria-hidden="true" v-if="name==='collections'">
      <use xlink:href="#icon-align-right"></use>
    </svg>
    <svg class="icon calendar" aria-hidden="true" v-if="name==='detail'">
      <use xlink:href="#icon-calendar"></use>
    </svg>
  </div>
</template>

<script>
  export default {
    name: "Head",
    props: {
      name: String,
      default: null
    },
    methods: {
      goBack(){
        this.$router.push({name: 'collections'})
      }
    }
  }
</script>

<style scoped lang="scss">
  @import  '../assets/css/variable.scss';
  .header {
    height: px(64);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: px(20) px(20) 0 px(20);
    background: #fafafa;
    z-index: 1;
    &.detail {
      background: $detail-bg;
      .title {
        color: #fff;
      }
      .icon {
        fill: #fff
      }
    }
    .title {
      font-family: PFBold;
      color: $main-color;
      font-size: px(20);
      display: flex;
      align-items: center;
    }
    .search, .left, .calendar {
      width: px(22);
      height: px(22);
      fill: #1A2B5B;
    }
    .left {
      margin-right: px(10)
    }
  }
</style>