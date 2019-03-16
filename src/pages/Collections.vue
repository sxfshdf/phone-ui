<template>
  <div class="collections">
    <Head :name="$route.name"></Head>
    <header>
      <div class="title">Your all collections</div>
      <div class="title">is here</div>
    </header>
    <tabs :tabs-list="tabsList" :selected="selected">
      <div class="content">
        <div class="box sport" @click="toDetail">
          <div class="icon-wrapper">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-smile"></use>
            </svg>
          </div>
          <div class="box-title">
            Sport Collections
          </div>
          <div class="box-content">
            28 Articals
          </div>
        </div>
        <div class="box science" @click="toDetail">
          <div class="icon-wrapper">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-earth"></use>
            </svg>
          </div>
          <div class="box-title">
            Science Collections
          </div>
          <div class="box-content">
            42 Articals
          </div>
        </div>
        <div class="box add">
          <div class="content-wrapper">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-plus"></use>
            </svg>
            <div class="title">
              ADD NEW
            </div>
          </div>
        </div>
        <div class="box favourite" @click="toDetail">
          <div class="icon-wrapper">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-heart"></use>
            </svg>
          </div>
          <div class="box-title">
            Favourite Collections
          </div>
          <div class="box-content">
            50 Articals
          </div>
        </div>
      </div>
    </tabs>
    <Footer></Footer>
  </div>
</template>

<script>
  import Head from '../components/Head.vue'
  import Tabs from '../components/Tabs.vue'
  import Footer from '../components/Footer.vue'

  export default {
    name: "Collections",
    data(){
      return {
        tabsList: ['All','Sport','Favourite','Science'],
        selected: 'All'
      }
    },
    components: {
      Head, Tabs, Footer
    },
    methods: {
      toDetail(){
        console.log('xxx')
        this.$router.push({name: 'detail'})
      }
    },
    created(){
      console.log(this.$router.name)
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/css/variable';

  @mixin iconStyle {
    width: px(26);
    height: px(26);
    fill: rgba(255,255,255,0.7);
  }


  .collections {
    padding: px(54) px(20) px(40) px(20);
    header {
      margin-top: px(10);
      .title {
        font-size: px(30);
        font-family: PFBold;
        color: #233461;
        
      }
    }
    .tabs {
      margin-top: px(10);
      .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: px(48) 0;
        .box {
          width: px(160);
          height: px(200);
          border-radius: px(4);
          margin-bottom: px(25);
          padding: px(20) px(20) px(30) px(20);
          .box-title {
            font-size: px(19);
            color: #fff;
            font-family: PFMedium;
            margin-top: px(24);
          }
          .box-content {
            font-size: px(16);
            color: #fff;
            font-family: PFRegular;
            opacity: 0.8;
            margin-top: px(8);
          }
          .icon-wrapper {
            @include positionCenter;
            height: px(44);
            width: px(44);
            border: 1px solid rgba(255,255,255,0.5);
            background: rgba(255,255,255,0.2);
            border-radius: px(4);
            box-shadow: 0 px(8) px(18) px(-2) rgba(0,0,0,0.1);
            .icon {
              @include iconStyle
            }
          }
          &.sport {
            background: linear-gradient(rgba(11,185,213,1) 0%, rgba(9,167,205,1) 100%);
            box-shadow: 0 px(16) px(20) px(-6) rgba(12,182,213,0.3);
          }
          &.science {
            background: linear-gradient(rgba(55,80,166,1) 0%, rgba(51,74,157,1) 100%);
            box-shadow: 0 px(16) px(20) px(-6) rgba(54,79,164,0.3);
          }
          &.add {
            background: #fff;
            box-shadow: 0 px(16) px(20) px(-6) rgba(0,0,0,0.1);
            @include positionCenter;
            .content-wrapper {
              text-align: center;
              .icon {
                font-size: px(40);
                margin-bottom: px(16);
                fill: #283867
              }
              .title {
                font-size: px(16);
                font-family: PFBold;
                color: #283867;
              }
            }
          }
          &.favourite {
            background: linear-gradient(rgba(88,120,232,1) 0%, rgba(78,109,217,1) 100%);
            box-shadow: 0 px(16) px(20) px(-6) rgba(86,117,228,0.3);
          }
        }

      }
    }
  }
</style>