<!--
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-04 22:09:32
 * @Description: 数据中心-人员数据
-->
<template>
    <div>
        <div>
            <sk-icon-input :placeholder='carplaceholder' :value.sync="number"
                @keyup.enter.native="checkSearch"></sk-icon-input>
            <sk-icon-button style="margin-left:12px" @click="checkSearch"></sk-icon-button>
        </div>
        <div class="title_cl">
            <div class="left_cl">
                <div class="le_num">
                    <div class="left_fw">
                        <div class="num_cl">{{carTotal}}</div>
                        <div class="per_num">房屋总数</div>
                    </div>
                    <div class="cen_cl"></div>
                    <div class="left_fw">
                        <div class="num_cl">{{completionRate}}</div>
                        <div class="per_num">信息完善率</div>
                    </div>

                </div>

            </div>
            <div class="center_rg_cl">
                <div id="carPpEChart" style=" padding-top: 10px; left: 2vmin; height: 100%;">
                </div>
            </div>
            <div class="center_rg_cl2">
                <div id="carColChart" style=" padding-top: 10px; left: 2vmin; height: 100%;">
                </div>
            </div>
        </div>
        <div class="table-box">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" align="center" width="">
                </el-table-column>
                <el-table-column prop="photo" label="车辆照片" width="">
                    <template slot-scope="scope">
                        <img class="img_cl" :src="scope.row.carPhoto" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="plateNumber" label="车牌号">
                </el-table-column>
                <el-table-column prop="brand" label="品牌" width="">
                </el-table-column>
                <el-table-column prop="color" label="颜色" width="">
                </el-table-column>
                <el-table-column prop="address" label="操作" width="400">
                    <template slot-scope="scope" class="button_cl">
                       
                        <sk-table-button title="车辆信息" icon="ic_housenumber2x.png"></sk-table-button>
                        <sk-table-button title="车位信息" icon="ic_rentrole2x.png"></sk-table-button>
                        <sk-table-button title="轨迹查询" icon="ic_pic2x.png"></sk-table-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="el_page_cl" >
                <el-pagination background @current-change="handleCurrentChange" :current-page.sync="current"
                layout="prev, pager, next" :total="total">
            </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    import { getCarList, getsCarstatList } from '@/api/sjzx'
    import chartsoptions from "@/utils/echartsOption";
    import doughnutChart from '_c/echartsCon/DoughnutChart.vue'
    import ageCharts from '_c/echartsCon/ageCharts.vue'

    import * as echarts from "echarts";

    export default {
        name: 'dataCenter-carData',
        components: {
            doughnutChart,
            ageCharts
        },
        title: "数据中心 > 车辆数据",
        data() {
            return {
                chartData_1: {},
                chartData_2: {},
                chartData_3: {},
                tableData: [],
                queryData: {
                    current: 1,
                },
                current: 1,
                size: 10,
                total: 0,
                carTotal: "",
                colortype: "颜色",
                brandtype: "品牌",
                completionRate: "",
                number: "",
                carplaceholder: "请输入车牌号",
            };
        },
        methods: {
            checkSearch() {
                this.current = 1
                console.log(this.number, "aaaaaaaaa")
                this.getListData()
            },
            yzxx(e) {
                console.log(e, "aaaaaaaa00000a")
            },

            getListData() {
                var data = {
                    province: "", //省
                    city: "", //市
                    number: this.number, //号码
                    current: this.current //当前页码

                }
                getCarList(data).then((res) => {

                    if (res.code == 0) {
                        this.tableData = res.data.result
                        this.total = res.data.total
                        this.current = res.data.current
                    }

                })
            },
            handleCurrentChange(num) {
                console.log(num, "mmmmmmmmmm")
                this.current = num
                this.getListData()
            },
            getsCarstatData() {
                getsCarstatList().then((res) => {
                    var reslist = res.data
                    console.log(reslist, 'varrrrr')
                    if (res.code == 0) {
                        this.carTotal = reslist.carTotal
                        this.completionRate = reslist.completionRate
                        this.chartData_1.pieData = reslist.brandRange
                        this.chartData_2.pieData = reslist.colourRange

                    }
                    this.carPpEChartData()
                    this.carColChartData()

                })

            },

            pageChange(val) {
                this.$set(this.queryData, "current", val);
                this.getListData();
            },
            carPpEChartData() {
                let myChart = echarts.init(document.getElementById('carPpEChart'))
                myChart.setOption(
                    chartsoptions.currencyChart(this.chartData_1.pieData,this.brandtype)
                )
                window.addEventListener('resize', function () {
                    //浏览器大小调整echarts随之改变
                    myChart.resize()
                })
            },
            carColChartData() {
                let myChart = echarts.init(document.getElementById('carColChart'))
                myChart.setOption(
                    chartsoptions.currencyChart(this.chartData_2.pieData,this.colortype)
                )
                window.addEventListener('resize', function () {
                    //浏览器大小调整echarts随之改变
                    myChart.resize()
                })
            },

        },
        mounted() {
            this.getListData()
            this.getsCarstatData()
        },
        created() {

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
        width: 308px;
        height: 136px;
        border-radius: 20px;
        /* background-image:url(../../assets/img/image/ic_card_police2x.png)no-repeat; */
        background-image: url('../../assets/img/datacente/ic_card_car2x.png');
        background-size: 100% 100%;
    }

    .num_cl {

        font-size: 32px;
        color: #FFFFFF;
        text-align: center;
        font-weight: 700
    }

    .le_num {
        margin: 44px auto 0 auto;
        width: 100%;
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        justify-content: center;
        text-align: center;
        height: 100%
    }

    .per_num {
        font-size: 16px;
        color: #ccc;
        text-align: center;
        font-weight: 600;
    }


    .center_rg_cl {
        width: 480px;
        height: 140px;
        margin:  0 0 0 80px;
    }
    .center_rg_cl2 {
        width: 480px;
        height: 140px;
        /* margin:  0 0 0 40px; */
    }

    .cen_cl {
        width: 1px;
        height: 48px;
        opacity: 0.4;
        border: 1px solid rgba(255, 255, 255, 1);
        margin: 6px 10px 0 10px;
    }

    .mr_20 {
        margin: 0 18px;
    }

    .left_fw {
        width: 100px;
    }

    .select {
        margin-right: 16px;
    }
    .img_cl {
        width: 60px;
        height: 48px;
    }
  
</style>