<template>
  <div class="detail">
    <Head :name="$route.name"></Head>
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
      <section id="chart"></section>
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
    created(){
      console.log(this.$route.name)
    },
    methods: {
      setChart(){
        const echarts = require('echarts');
        const myChart = echarts.init(document.getElementById('chart'),'light')
        myChart.setOption({
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
            bottom: '3%',
            top: '4%',
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
      #chart {
        height: px(300);
        width: px(375);
      }
    }
  }
</style>