<template>
  <div class="detail">
    <Head :name="$route.name" :title="title"></Head>
    <div class="content">
      <section class="head">
        <div class="wrapper">
          <div class="image-wrapper">
            <img src="../assets/img/image.png" alt="">
          </div>
          <div class="title-wrapper">
            <div class="title">How to build clean workspace</div>
            <div class="time-message">01/03/2019</div>
          </div>
        </div>
      </section>
      <section class="body">
        <div class="chart-title">
          February 2019
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ellipsis"></use>
          </svg>
        </div>
        <div id="chart"></div>
        <div class="data">
          <ul>
            <li>
              <div class="data-wrapper">
                <div class="data-title">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-user"></use>
                  </svg>
                  Readers
                </div>
                <div class="number">
                  4,900
                </div>
              </div>
            </li>
            <li>
              <div class="data-wrapper">
                <div class="data-title">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-heart"></use>
                  </svg>
                  Likes
                </div>
                <div class="number">
                  8,500
                </div>
              </div>
            </li>
            <li>
              <div class="data-wrapper">
                <div class="data-title">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-share"></use>
                  </svg>
                  Shares
                </div>
                <div class="number">
                  5,400
                </div>
              </div>
            </li>
            <li>
              <div class="data-wrapper">
                <div class="data-title">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-star"></use>
                  </svg>
                  Saves
                </div>
                <div class="number">
                  4,200
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import Head from '../components/Head.vue'
  export default {
    name: "Detail",
    components: {
      Head
    },
    data(){
      return {
        title: "Article Insight"
      }
    },
    created(){
      console.log(this.$route.name)
    },
    methods: {
      setChart(){
        const echarts = require('echarts');
        const myChart = echarts.init(document.getElementById('chart'),'light')
        myChart.setOption({
          // title: {
          //   text: 'February 2019',
          //   textStyle: {
          //     color: '#4f5b83',
          //     fontSize:'16',
          //   }
          // },
          tooltip : {
            trigger: 'axis',
            axisPointer : {          // 坐标轴指示器，坐标轴触发有效
              type : 'shadow',      // 默认为直线，可选为：'line' | 'shadow'
            },
            show: false,
          },
          legend: {
            data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎'],
            selectedMode:false,//取消图例上的点击事件
          },
          grid: {
            left: '-4%',
            right: '4%',
            bottom: '2%',
            top: '0',
            containLabel: true
          },
          yAxis:  {
            show: false,
            type: 'value'
          },
          xAxis: {
            type: 'category',
            clickable:false,
            data: ['20','21','22','23','24','25'],
            max: 5,
            splitLine:{
              show:true,
              lineStyle: {
                type: 'solid',
                color: '#fafafa',//左边线的颜色
                width:'2'//坐标线的宽度
              }
            },
            // axisLine: {show: false},
            // axisTick: {show: false},
            axisLabel: {
              show: true,
              textStyle: {
                color: '#b6bbcc',
                fontSize:'16',
              }
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#ccc',//左边线的颜色
                width:'2'//坐标线的宽度
              }
            },
          },
          series: [
            {
              // name: '直接访问',
              type: 'bar',
              barCategoryGap: 1,
              stack: '总量',
              label: {
                normal: {
                  show: false,
                  position: 'insideRight'
                }
              },
              itemStyle:{
                normal:{
                  color:'#04b9d9'
                }
              },
              data: [0, 0, 0, 0, 120, 0]
            },
            {
              // name: '邮件营销',
              type: 'bar',
              barCategoryGap: 1,
              stack: '总量',
              label: {
                normal: {
                  show: false,
                  position: 'insideRight'
                }
              },
              itemStyle:{
                normal:{
                  color:'#e6eff6'
                }
              },
              data: [80, 60, 100, 60, 40, 130]
            }
          ]
        })
      }
    },
    mounted() {
      this.setChart()
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/css/variable.scss';
  .detail {
    .content {
      padding-top: px(64);
      .head {
        background: $detail-bg;
        padding: px(40) px(20);
        .wrapper {
          background: rgba(255,255,255,0.2);
          border-radius: px(4);
          display: flex;
          padding: px(20);
          .image-wrapper {
            height: px(80);
            width: px(80);
            flex-shrink: 0;
            border-radius: px(4);
            img {
              max-width: 100%;
              border-radius: px(4);
            }
          }
          .title-wrapper {
            margin-left: px(20);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
              font-size: px(20);
              font-family: PFBold;
              color: #fff;
              line-height: px(24);
            }
            .time-message {
              font-size: px(14);
              color: rgba(255,255,255,0.6);
            }
          }
        }
      }
      .body {
        .chart-title {
          padding: px(20) px(20);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: px(18);
          font-family: PFHeavy;
          color: $detail-bg;
          .icon {
            width: px(22);
            height: px(22);
          }
        }
        #chart {
          height: px(280);
          width: px(375);
        }
        .data {
          padding: px(20);
          ul {
            display: flex;
            flex-wrap: wrap;
            li {
              @include positionCenter;
              width: 50%;
              height: px(120);
              &:nth-child(1) {
                border-right: 1px solid $detail-data-border;
                border-bottom: 1px solid $detail-data-border;
              }
              &:nth-child(2) {
                border-left: 1px solid $detail-data-border;
                border-bottom: 1px solid $detail-data-border;
              }
              &:nth-child(3) {
                border-right: 1px solid $detail-data-border;
                border-top: 1px solid $detail-data-border;
              }
              &:nth-child(4) {
                border-left: 1px solid $detail-data-border;
                border-top: 1px solid $detail-data-border;
              }
              .data-wrapper {
                text-align: center;
                .data-title {
                  font-size: px(18);
                  font-family: PFMedium;
                  color: #ced1dd;
                  .icon {
                    width: px(20);
                    height: px(20);
                    fill: $detail-bg;
                    margin-right: px(8);
                  }
                }
                .number {
                  font-size: px(32);
                  color: $detail-bg;
                  font-family: PFBold;
                  margin-top: px(10);
                }
              }
            }
          }
        }
      }

    }
  }
</style>