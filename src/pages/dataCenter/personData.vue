<!--
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-07 20:55:24
 * @Description: 数据中心-人员数据
-->
<template>
    <div>
        <div>
            <sk-icon-input :placeholder='nameplaceholder' :value.sync="name"
                @keyup.enter.native="checkSearch"></sk-icon-input>
            <sk-icon-input :placeholder='idnumplaceholder' :value.sync="idnum" @keyup.enter.native="checkSearch"
                class="mr_20"></sk-icon-input>
            <sk-icon-input :placeholder='telplaceholder' :value.sync="tellnum"
                @keyup.enter.native="checkSearch"></sk-icon-input>
            <!-- <sk-icon-input :placeholder ='placeholder' :value.sync="num"></sk-icon-input> -->
            <sk-icon-button style="margin-left:12px" @click="checkSearch"></sk-icon-button>
        </div>
        <div class="title_cl">
            <div class="left_cl">
                <div class="le_num">
                    <div class="num_cl">{{personsTotal}}</div>
                    <div class="per_num">人员总数</div>
                </div>
            </div>
            <div class="center_cl">
                <div id="persexChart" style=" padding-top: 10px; left: 2vmin; height: 100%;">
                </div>
            </div>
            <div class="center_rg_cl">
                <div id="perAgeChart" style=" padding-top: 10px; left: 2vmin; height: 100%;">
                </div>
            </div>
        </div>
        <div class="table-box">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" align="center" width="">
                </el-table-column>
                <el-table-column prop="photo" label="头像" >
                    <template slot-scope="scope">
                        <img class="img_cl" :src="scope.row.photo" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="姓名" >
                </el-table-column>
                <el-table-column prop="idNumber" label="身份证" >
                </el-table-column>
                <el-table-column prop="sex" label="性别"  >
                </el-table-column>
                <el-table-column prop="telephone" label="手机号" >
                </el-table-column>
                <el-table-column prop="address" label="操作" width="780">
                    <template slot-scope="scope" class="button_cl">
                       
                        <sk-table-button title="房屋信息" icon="ic_housenumber2x.png"></sk-table-button>
                        <sk-table-button @click="yzxx(scope.row)" title="车辆信息"
                            icon="ic_personrole2x.png"></sk-table-button>
                        <sk-table-button title="单位信息" icon="ic_rentrole2x.png"></sk-table-button>
                        <sk-table-button title="疫苗信息" icon="ic_rentrole2x.png"></sk-table-button>
                        <sk-table-button title="户籍信息" icon="ic_pic2x.png"></sk-table-button>
                        <sk-table-button title="轨迹信息" icon="ic_space2x.png"></sk-table-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="el_page_cl">
                <el-pagination background @current-change="handleCurrentChange" :current-page.sync="current"
                layout="prev, pager, next" :total="total">
            </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    import { getperList, getstatisticsList } from '@/api/sjzx'
    import doughnutChart from '_c/echartsCon/DoughnutChart.vue'
    import ageCharts from '_c/echartsCon/ageCharts.vue'
    import * as echarts from "echarts";
    import chartsoptions from "@/utils/echartsOption";

    export default {
        name: 'dataCenter-personData',
        components: {
            doughnutChart,
            ageCharts
        },
        title: "数据中心 > 人员数据",
        data() {
            return {
                personsTotal: '',
                chartData_1: {},
                chartData_2: {},
                sextype:'性别',
                agetype:'年龄',
                tableData: [],
                queryData: {
                    current: 1,
                },
                current: 1,
                size: 10,
                total: 0,
                num: "",
                slxxList: ['1048', '110', '1120', '4562'],
                keys: ['抄见水量', '三平', '六平', '年均'],
                num: "",
                tellnum: "",
                name: "",
                idnum: "",
                placeholder: "请输入人名",
                nameplaceholder: "请输入人名",
                idnumplaceholder: "请输入身份证号",
                telplaceholder: "请输入手机号",
            };
        },
        methods: {
            handleCurrentChange(num) {
                console.log(num, "mmmmmmmmmm")
                this.current = num
                this.getListData()
            },
            checkSearch() {
                console.log(this.name, "aaaaaaaaa")
                this.current = 1
                this.getListData()
            },
            yzxx(e) {
                console.log(e, "aaaaaaaa00000a")
            },
            slxxmxEchart() {
                let myChart = echarts.init(document.getElementById('slxxmxEChart'))
                myChart.clear()
                myChart.setOption(
                    chartsoptions.pieEChart(this.slxxList, this.keys)
                )
                window.addEventListener('resize', function () {
                    //浏览器大小调整echarts随之改变
                    myChart.resize()
                })
            },
            getListData() {
                var data = {
                    name: this.name, //姓名
                    telephone: this.tellnum, //手机号
                    idNumber: this.idnum, //身份证号
                    current: this.current   //当前页码

                }
                getperList(data).then((res) => {
                    if (res.code == 0) {
                        this.tableData = res.data.result
                        this.total = res.data.total
                        this.current = res.data.current
                    }

                })
            },
            // 人员数据统计
            getpersionData() {
                getstatisticsList().then((res) => {

                    var reslist = res.data
                    console.log(reslist.ageRange, 'sssss')
                    if (res.code == 0) {
                        this.personsTotal = reslist.personsTotal
                        this.chartData_1.pieData = reslist.sexRange
                        this.chartData_2.pieData = reslist.ageRange

                    }
                    this.perSexChartData()
                    this.perAgeChartData()

                })
            },

            pageChange(val) {
          
                this.$set(this.queryData, "current", val);
                this.getListData();
            },
            perSexChartData() {
                let myChart = echarts.init(document.getElementById('persexChart'))
                myChart.setOption(
                    chartsoptions.perSexChart(this.chartData_1.pieData,this.sextype)
                )
                window.addEventListener('resize', function () {
                    //浏览器大小调整echarts随之改变
                    myChart.resize()
                })
            },
            perAgeChartData() {
                let myChart = echarts.init(document.getElementById('perAgeChart'))
                myChart.setOption(
                    chartsoptions.currencyageChart(this.chartData_2.pieData,this.agetype)
                )
                window.addEventListener('resize', function () {
                    //浏览器大小调整echarts随之改变
                    myChart.resize()
                })
            },

        },
        mounted() {
            // this.slxxmxEchart()
            this.getListData()
            // this.getpersionData()

        },
        created() {
            this.getpersionData()
        },
    };
</script>

<style scoped>
    .button_cl {
        display: flex;
    }

    .title_cl {
        display: flex;
        margin: 6px 0 0 0;
        color: #FFFFFF;
    }


    .left_cl {
        width: 148px;
        height: 136px;
        /* background-image:url(../../assets/img/image/ic_card_police2x.png)no-repeat; */
        background-image: url('../../assets/img/datacente/ic_card_polic2x.png');
        background-size: 100% 100%;
    }

    .num_cl {

        color: #FFFFFF;
        font-size: 32px;
        font-family: SegoeUI-Bold;
        text-align: center;
        font-weight: 700;
        margin: auto;
    }

    .le_num {
        margin: 35% auto 0 auto;
        width: 100%;
        text-align: center;
        height: 100%
    }

    .per_num {
        font-size: 16px;
        color: #ccc;
        font-weight: 600;
    }

    .center_cl {
        width: 400px;
        height: 140px;
        margin:  0 0 0 80px;
    }

    .center_rg_cl {
        width: 680px;
        height: 140px;
    }

    .mr_20 {
        margin: 0 18px;
    }
    .img_cl {
        width: 60px;
        height: 48px;
    }
</style>