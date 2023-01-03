// echart option 配置
//配置饼图

export function pieEChart(data, name) {
    //数据
    return {
        color: ['#246CF9', '#30E0A1'],
        textStyle: {
            color: '#fff'
        },
        tooltip: {
            trigger: 'item'
        },

        legend: {
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                color: '#fff'
            },
            icon: 'circle',
            x: 'right',
            y: 'center',
            orient: 'vertical',
            align: 'left',
            left: '80%',
            top: '30%',
            itemGap: 10,
            padding: [0, 0, 0, 0],
            // formatter: function (name) {
            //     //该函数用于设置图例显示后的百分比
            //     var total = 0
            //     var value
            //     list.forEach((item) => {
            //       total += item.value
            //       if (item.name === name) {
            //         value = item.value
            //       }
            //     })
            //     var p = ((value / total) * 100).toFixed(1) //求出百分比,保留2位小数
            //     // return `${name}  ${value}件  ${p}%`
            //     return `{a|${name}}{b|${value}件}{c|${p}%}` //返回出图例所显示的内容是名称+百分比
            //   },
        },

        graphic: [
            // 设置圆环内文字始终在圆环的正中间
            {
                type: 'group',
                left: '50%',
                top: '42%',
                bounding: 'raw',
                children: [
                    {
                        type: 'text',
                        style: {
                            text: '性别',
                            // text: this.chartData.satisfaction,
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
                left: '50%',
                top: '60%',
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
                // radius: ['65%', '70%'],
                label: {
                    // color: color,
                    show: true,
                    formatter: '{b} \n\n {c} ',
                    // fontSize: '100%',
                    position: 'center'
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                    },
                },
                radius: ['60%', '90%'],
                avoidLabelOverlap: false,

                emphasis: {
                    label: {
                        show: false,
                        // fontSize: 40,
                        fontWeight: 'bold',
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    // { value: data, name: name },
                    { value: 1048, name: '男性' },
                    { value: 735, name: '女性' },
                ]
            }
        ]

    }
}

export function barEChart(data, color) {
    return {
        color: color,
        tooltip: {
            formatter: (params) => {

                let html = params.seriesName + '<br>' + params.marker + "" + params.name + "：" + ((params.data.fcsl) / 10000).toFixed(2) + '万立方米'

                return html
            }
        },
        dataset: {
            source: data
        },
        dataZoom: [
            {
                show: true,
                // start: 94,
                // end: 100
                height: 20,
                textStyle: {
                    color: '#fff'
                },
                right: '15%',
            },
            {
                type: 'inside',
                height: 15,
                textStyle: {
                    color: '#fff'
                },
                showDataShadow: false,

            },
        ],
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: { //坐标轴刻度标签的相关设置。
                //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: '#fff', fontSize: '100%',
                }
            },
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        grid: {
            left: '18%',
            right: '15%',
            containLabel: false
        },
        yAxis: [{
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: { //坐标轴刻度标签的相关设置。
                //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: '#fff', fontSize: '100%',
                },
                formatter: function (value) {
                    value = value / 10000 + '万'
                    return value
                },
                rotate: 45,
            },
            type: 'value',
            name: '计量水量',
        }],
        series: [{
            name: '计量水量',
            type: 'bar',

        },]
    }

}

export function bardEChart(data, color) {
    return {
        color: color,
        tooltip: {
            formatter: (params) => {
                let html = ''
                if (params.seriesName == "应收") {
                    html = params.seriesName + '<br>' + params.marker + "" + params.name + "：" + ((params.data.yssf) / 10000).toFixed(2) + '万元'
                }
                if (params.seriesName == "实收") {
                    html = params.seriesName + '<br>' + params.marker + "" + params.name + "：" + ((params.data.sssf) / 10000).toFixed(2) + '万元'
                }
                return html
            }
        },
        dataset: {
            source: data
        },
        dataZoom: [
            {
                show: true,
                // start: 94,
                // end: 100
                height: 20,
                textStyle: {
                    color: '#fff'
                },
                right: '15%',
            },
            {
                type: 'inside',
                height: 15,
                textStyle: {
                    color: '#fff'
                },
                showDataShadow: false,

            },
        ],
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: { //坐标轴刻度标签的相关设置。
                //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: '#fff', fontSize: '100%',
                }
            },
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        grid: {
            left: '18%',
            right: '15%',
            containLabel: false
        },
        yAxis: [{
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: { //坐标轴刻度标签的相关设置。
                //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: '#fff', fontSize: '100%',
                },
                formatter: function (value) {
                    value = value / 10000 + '万'
                    return value
                },
                rotate: 45,
            },
            type: 'value',
            name: '万元',
        }],
        series: [{
            name: '应收',
            type: 'bar',
            color: '#056403'
        }, {
            name: '实收',
            type: 'bar',
            color: '#009900'
        },]
    }
}
export function lineEChart(data, list) {
    let danweiseries = [];
    let lagenddata = [];
    let danwei = [];
    console.log(data, "sss")
    list.forEach(item => {
        danwei = {
            name: item,
            type: 'line',
            areaStyle: {},
        }
        danweiseries.push(danwei)
        lagenddata.push(item)

    })
    //数据
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },

        },
        legend: {
            data: lagenddata,
            textStyle: {
                color: '#fff',
            },
            inactiveColor: '#898a8b45',
            itemWidth: 10,
            itemHeight: 10,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        dataset: {
            // dimensions: ['yf', 'zzs', 'zxg', 'zshk', 'zgjz', 'zgjzx', 'zls', 'zpw', 'zjz'],

            source: data

        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                    //	margin:15,
                    textStyle: {
                        color: '#fff', fontSize: '100%'
                    },
                    formatter: '{value}'
                },
                boundaryGap: false,
                // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                    //	margin:15,
                    textStyle: {
                        color: '#fff', fontSize: '100%'
                    }
                },

            }
        ],
        series: danweiseries
    }

}

export function mxlineEChart(data, list) {
    console.log(list, "555")
    let danweiseries = [];
    let lagenddata = [];
    let danwei = [];
    list.forEach(item => {
        danwei = {
            name: item,
            type: 'line',
            areaStyle: {},
        }
        danweiseries.push(danwei)
        lagenddata.push(item)
    })
    //数据
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: lagenddata,
            textStyle: {
                color: '#fff',
            },
            inactiveColor: '#898a8b45',
            itemWidth: 10,
            itemHeight: 10,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        dataset: {
            // dimensions: ['yf', 'zzs', 'zxg', 'zshk', 'zgjz', 'zgjzx', 'zls', 'zpw', 'zjz'],

            source: data

        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                    //	margin:15,
                    textStyle: {
                        color: '#fff', fontSize: '100%'
                    },
                    formatter: '{value}'
                },
                boundaryGap: false,
                // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisLabel: { //坐标轴刻度标签的相关设置。
                    //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                    //	margin:15,
                    textStyle: {
                        color: '#fff', fontSize: '100%'
                    }
                },

            }
        ],
        series: danweiseries
    }



}

export default {
    pieEChart, barEChart, bardEChart, lineEChart, mxlineEChart
}
