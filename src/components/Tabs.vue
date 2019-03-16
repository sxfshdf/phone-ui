<template>
  <div class="tabs">
    <div class="tabs-head" ref="tabsHead">
      <div class="tabs-item" ref="tabsItem"
           v-for="(item, index) in tabsList" :key="index"
           @click="changeTab(item)"
           :class="{active: item === selectedTab}"
      >{{item}}</div>
      <div class="line-bg"></div>
      <div class="line" ref="line"></div>
    </div>
    <div class="tabs-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tabs",
    props: {
      tabsList: {
        type: Array,
        required: true
      },
      selected: {
        type: String,
      }
    },
    data(){
      return {
        selectedTab: ''
      }
    },
    methods: {
      changeTab(tab){
        this.selectedTab = tab
        this.setLineStyle(tab)
      },
      setLineStyle(selected){
        this.$refs.tabsItem.forEach( tab => {
          if(tab.innerHTML === selected){
            let {width, left} = tab.getBoundingClientRect()
            let {left: left2} = this.$refs.tabsHead.getBoundingClientRect()
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.left = `${left-left2}px`
          }
        })
      }
    },
    mounted(){
      this.selectedTab = this.selected
      this.setLineStyle(this.selectedTab)
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/css/variable.scss';
  .tabs {
    .tabs-head {
      display: flex;
      justify-content: space-between;
      position: relative;
      .tabs-item {
        font-size: px(18);
        color: $main-color;
        font-family: PFBold;
        padding: px(20) px(10);
        &.active {
          color: $tab-selected-color;
        }
      }
      .line-bg {
        height: 2px;
        width: 100%;
        background: #E7EAEF;
        position: absolute;
        bottom: 0;
      }
      .line {
        position: absolute;
        height: 4px;
        background: $tab-selected-color;
        border-radius: 1px;
        width: px(40);
        bottom: 0;
        transition: all 0.3s;
      }
    }
  }
</style>