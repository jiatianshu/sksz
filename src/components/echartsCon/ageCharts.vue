<template>
  <div ref="ageChartCommon" :style="{ height: '200px' }"></div>
</template>

<script>
  // import * as echarts from 'echarts';
  export default {
    name: 'eChartss',
    props: {
      chartDataAge: {
        type: Object,
        required: false,
      },
    },
    data() {
      return {
        pieData: [],
      }
    },
    mounted() {
      this.showChartage()
      
    },
    watch: {
      //*****监听的是请求数据后父组件传来的值，通过handler函数执行的数据改变后的具体方法
      chartDataAge: {
        handler() {
          this.showChartage()
        },
        //深度监听，保证数据实时变化
        deep: true,
      },
    },
    methods: {
      showChartage() {
        console.log(this.$echarts, "????age")
        // 基于准备好的dom，初始化echarts实例
        var myChartAge = this.$echarts.init(this.$refs.ageChartCommon)
        myChartAge.clear()

        this.pieData = this.chartDataAge.pieData
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
          color: ['#6922FF', '#0F67FF', '#00FFF9 ', '#30E0A1 ', '#FFC200'],
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
            itemWidth: 8,
            itemHeight: 8,
            icon: 'circle',
            x: 'right',
            y: 'center',
            orient: 'vertical', //设置图例排列纵向显示
            align: 'left', //设置图例中文字位置在icon标识符的右侧
            left: '30%',
            top: '10%',
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
          tooltip: {
            show: true,
            trigger: 'item',
            // show: true,   //default true
            showDelay: 0,//显示延时，添加显示延时可以避免频繁切换
            hideDelay: 50,//隐藏延时
            transitionDuration: 0,//动画变换时长
            backgroundColor: 'rgba(60,66,84,0.5)',//背景颜色（此时为默认色）
            borderRadius: 6,//边框圆角
            padding: 10,    // [5, 10, 15, 20] 内边距
            textStyle: {
              color: '#fff',
              fontSize: 12,
            }

            //  position: function (p) {
            //      // 位置回调
            //      // console.log && console.log(p);
            //      return [p[0] + 10, p[1] - 10];
            //  },
            //  formatter: function (params, ticket, callback) {
            //      console.log(params)
            //      var res = "班级" + ' : ' + params[0].name + "班<br/>";
            //      for (var i = 0, l = params.length; i < l; i++) {
            //          res += '<br/>' + params[i].seriesName + ' : ' + params[i].value + "<%=ViewState["unit"]%>";//鼠标悬浮显示的字符串内容
            //      }
            //      setTimeout(function () {
            //          // 仅为了模拟异步回调
            //          callback(ticket, res);
            //      }, 1000)
            //      return 'loading...';
            //  }
            //formatter: "Template formatter: <br/>{b}<br/>{a}:{c}<br/>{a1}:{c1}"
          },
          graphic: [
            // 设置圆环内文字始终在圆环的正中间
            {
              type: 'group',
              left: '15%',
              top: '40%',
              bounding: 'raw',
              children: [
                {
                  type: 'text',
                  style: {
                    // text: this.chartData.satisfaction,
                    text: '年龄',
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
              left: '15%',
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
              center: ['15%', '50%'], //饼图的中心(圆心)坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。这里的center一旦设置, 则 graphic/legend 里的内容位置也要相应进行调整
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
        myChartAge.setOption(option)

        window.addEventListener('resize', function () {
          //浏览器大小调整echarts随之改变
          myChartAge.resize()
        })
      },
    },
  }
</script>