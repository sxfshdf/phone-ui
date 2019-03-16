<template>
  <div class="footer">
    <ul>
      <li
        v-for="(item, index) in icons" :key="index"
        @click="changeNav(index)"
        :class="{'active': index === selected}"
      >
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#icon-'+item"></use>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data(){
      return {
        selected: 0,
        icons: [
          'appstore', 'star', 'search', 'user'
        ]
      }
    },
    methods: {
      changeNav(index){
        this.selected = index
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/css/variable.scss';

  .footer {
    height: px(54);
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 0 px(-2) px(8) rgba(0,0,0,0.1);
    padding: 0 px(20);
    display: flex;
    align-items: center;
    background: #fff;
    z-index: 1;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      li {
        @include positionCenter;
        height: px(36);
        width: px(36);
        border-radius: 50%;
        &.active {
          background: #D8F4F8;
          .icon {
            fill: #4AC5E0
          }
        }
        .icon {
          width: px(22);
          height: px(22);
          fill: #283867;
        }
      }
    }
  }

</style>