<template>
  <div ref="treeChartCommon" :style="{ height: '200px' }"></div>
</template>

<script>
  // import * as echarts from 'echarts';
  export default {
    name: 'eChartss',
    props: {
      chartData: {
        // type: Object,
        // required: false,
      },
    },
    data() {
      return {
        pieData: [],
      }
    },
    watch: {
      //*****监听的是请求数据后父组件传来的值，通过handler函数执行的数据改变后的具体方法
      chartData: {
        handler() {
          this.showChart()
        },
        //深度监听，保证数据实时变化
        deep: true,
      },
    },
    mounted() {
      this.showChart()
    },
    methods: {
      showChart() {
        console.log(this.$echarts, "????")
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(this.$refs.treeChartCommon)
        myChart.clear()

        this.pieData = this.chartData.pieData
        const list = this.pieData

        // 指定图表的配置项和数据
        var option = {
          //标题
          title: {
            // text: this.chartData.pieTitle,
            x: 'center', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'bottom', //垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: 14,
              fontWeight: 'normal',
              color: '#fff',
            },
            left: '25%',
            top: '80%',
            textAlign: 'center', // 标题始终和图表保持居中
          },
          // 设置圆环渐变色
          color: ['#246CF9', '#30E0A1'],
          // color: [
          //   new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
          //     // 右 下 左 上
          //     {
          //       offset: 0,
          //       color: '#65D161',
          //     },
          //     {
          //       offset: 1,
          //       color: '#8AE587',
          //     },
          //   ]),
          //   new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
          //     {
          //       offset: 0,
          //       color: '#5393E7',
          //     },
          //     {
          //       offset: 1,
          //       color: '#9EC8FF',
          //     },
          //   ]),
          //   new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
          //     //0, 1, 1, 0
          //     {
          //       offset: 0,
          //       color: '#F5E127',
          //     },
          //     {
          //       offset: 1,
          //       color: '#FFF381',
          //     },
          //   ]),
          //   new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
          //     {
          //       offset: 0,
          //       color: '#FFC772',
          //     },
          //     {
          //       offset: 1,
          //       color: '#FFA51E',
          //     },
          //   ]),
          //   new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
          //     {
          //       offset: 0,
          //       color: '#FF8A8A',
          //     },
          //     {
          //       offset: 1,
          //       color: '#EC6161',
          //     },
          //   ]),
          // ],

          legend: {
            // show:false,
            itemWidth: 8,
            itemHeight: 8,
            icon: 'circle',
            x: 'right',
            y: 'center',
            orient: 'vertical', //设置图例排列纵向显示
            align: 'left', //设置图例中文字位置在icon标识符的右侧
            left: '45%',
            top: '30%',
            itemGap: 10, //设置图例之间的间距
            padding: [0, 0, 0, 0], //设置图例与圆环图之间的间距

            formatter: function (name) {
              //该函数用于设置图例显示后的百分比
              var total = 0
              var value
              list.forEach((item) => {
                total += item.value
                if (item.name === name) {
                  value = item.value
                }
              })
              var p = ((value / total) * 100).toFixed(1) //求出百分比,保留2位小数
              // return `${name}  ${value}件  ${p}%`
              return `{a|${name}}{b|${value}}{c|${p}%}` //返回出图例所显示的内容是名称+百分比
            },
            // 自定义图例文字样式
            textStyle: {
              rich: {
                a: {
                  color: '#fff',
                  padding: [0, 10, 0, 0],
                  fontSize: 12,
                },
                b: {
                  color: '#fff',
                  padding: [0, 10, 0, 0],
                  fontSize: 12,
                },
                c: {
                  color: '#fff',
                  fontSize: 12,
                },
              },
            },
          },
          graphic: [
            // 设置圆环内文字始终在圆环的正中间
            {
              type: 'group',
              left: '25%',
              top: '40%',
              bounding: 'raw',
              children: [
                {
                  type: 'text',
                  style: {
                    // text: this.chartData.satisfaction,
                    text: '性别',
                    fontSize: 12,
                    fill: '#fff', //文字的颜色
                    textVerticalAlign: 'middle',
                    textAlign: 'center',
                  },
                },
              ],
            },
            {
              type: 'group',
              left: '25%',
              top: '56%',
              bounding: 'raw',
              children: [
                {
                  type: 'text',
                  style: {
                    text: '区间',
                    fontSize: 12,
                    fill: '#fff', //文字的颜色
                    textVerticalAlign: 'middle',
                    textAlign: 'center',
                  },
                },
              ],
            },
          ],
          calculable: true,
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['60%', '90%'], //饼图的半径，数组的第一项是内半径，第二项是外半径。支持设置成百分比，相对于容器高宽中较小的一项的一半。可以将内半径设大显示成圆环图, 设置内半径和外半径，形成环状
              center: ['25%', '50%'], //饼图的中心(圆心)坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。这里的center一旦设置, 则 graphic/legend 里的内容位置也要相应进行调整
              // roseType: 'radius', //扇形
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: true,
                  },
                },
                emphasis: {
                  shadowColor: 'rgba(4, 116, 0, 0.3)',
                  shadowBlur: 10,
                  // label: {
                  //   show: true,
                  // },
                },
              },
              data: this.pieData,
            },
          ],
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)

        window.addEventListener('resize', function () {
          //浏览器大小调整echarts随之改变
          myChart.resize()
        })
      },
    },
  }
</script>