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
            <sk-icon-input :placeholder='nameplaceholder' :value.sync="name"></sk-icon-input>
            <sk-icon-input :placeholder='idnumplaceholder' :value.sync="idnum" class="mr_20"></sk-icon-input>
            <sk-icon-input :placeholder='telplaceholder' :value.sync="tellnum"></sk-icon-input>
            <!-- <sk-icon-input :placeholder ='placeholder' :value.sync="num"></sk-icon-input> -->
            <sk-icon-button style="margin-left:12px" @click="aaaa"></sk-icon-button>
        </div>
        <div class="title_cl">
            <div class="left_cl">
                <div class="le_num">
                    <div class="num_cl">98655</div>
                    <div class="per_num">人员总数</div>
                </div>
            </div>
            <div class="">
                <div id="slxxmxEChart" style=" padding-top: 10px; left: 1vmin; height: 100%;">
                </div>
            </div>
            <div class="center_cl">
                <doughnutChart :chartData="chartData_1" style=" padding-top: 10px; left: 2vmin; height: 100%;" />
            </div>
            <div class="center_rg_cl">
                <ageCharts :chartData="chartData_2" style=" padding-top: 10px; left: 2vmin; height: 100%;" />
            </div>
            <div class="right_cl"></div>
        </div>
        <div class="table-box">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" align="center" width="100">
                </el-table-column>
                <el-table-column prop="name" label="头像" width="180">
                </el-table-column>
                <el-table-column prop="address" label="姓名">
                </el-table-column>
                <el-table-column prop="address" label="身份证">
                </el-table-column>
                <el-table-column prop="address" label="性别">
                </el-table-column>
                <el-table-column prop="address" label="手机号">
                </el-table-column>
                <el-table-column prop="address" label="操作" width="600">
                    <template slot-scope="scope" class="button_cl">
                        <sk-table-button @click="yzxx(scope.row)" title="业主信息"
                            icon="ic_personrole2x.png"></sk-table-button>
                        <sk-table-button title="房屋信息" icon="ic_housenumber2x.png"></sk-table-button>
                        <sk-table-button title="租户信息" icon="ic_rentrole2x.png"></sk-table-button>
                        <sk-table-button title="平面图" icon="ic_pic2x.png"></sk-table-button>
                        <sk-table-button title="空间信息" icon="ic_space2x.png"></sk-table-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="height:52px;padding-top: 8px;text-align: right;">
                <sk-page :total="total" @page-change="pageChange"></sk-page>
            </div>
        </div>
    </div>
</template>
<script>
    import doughnutChart from '_c/echartsCon/DoughnutChart.vue'
    import ageCharts from '_c/echartsCon/ageCharts.vue'

    import chartsoptions from "@/utils/echartsOption";
    import * as echarts from "echarts";

    export default {
        name: 'dataCenter-personData',
        components: {
            doughnutChart,
            ageCharts
        },
        title: "数据中心 > 人员数据",
        data() {
            return {
                chartData_1: {},
                chartData_2: {},
                chartData_3: {},
                tableData: [{
                    name: 'adasda'
                }, {}],
                queryData: {
                    current: 1,
                },
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
            aaaa() {
                console.log(this.num, "aaaaaaaaa")
            },
            yzxx(e) {
                console.log(e, "aaaaaaaaa")
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
            postSfmx() {
                // api.postSfmx(this.cardId).then((res) => {
                //     let arr = []
                //     arr = res.data
                //     arr.forEach(e => {
                //         let dataone = {
                //             year: e.month,
                //             fcsl: e.fcsl,
                //             avgWater3: e.avgWater3,
                //             avgWater6: e.avgWater6,
                //             avgWater12: e.avgWater12,
                //         }
                //         this.slxxList.push(dataone)
                //     })
                //     arr.forEach(e => {
                //         let datatwo = {
                //             year: e.month,
                //             yssf: e.yssf,
                //             sssf: e.sssf
                //         }
                //         this.ysssList.push(datatwo)
                //     })
                //     this.slxxmxEchart()
                // })
            },
            getData() {

            },
            pageChange(val) {
                this.$set(this.queryData, "current", val);
                this.getData();
            }

        },
        mounted() {
            this.getData();
            this.slxxmxEchart()
        },
        created() {
            this.chartData_1 = {
                pieData: [
                    {
                        value: 113,
                        name: '5.0分',
                    },
                    {
                        value: 101,
                        name: '4.0分',
                    },
                    // {
                    //     value: 89,
                    //     name: '3.0分',
                    // },
                    // {
                    //     value: 82,
                    //     name: '2.0分',
                    // },
                    // {
                    //     value: 35,
                    //     name: '1.0分',
                    // },
                ],
                pieTitle: '服务响应时效',
                satisfaction: '90%',
            }
            this.chartData_2 = {
                pieData: [
                    {
                        value: 113,
                        name: '5.0分',
                    },
                    {
                        value: 101,
                        name: '4.0分',
                    },
                    {
                        value: 89,
                        name: '3.0分',
                    },
                    {
                        value: 82,
                        name: '2.0分',
                    },
                    {
                        value: 35,
                        name: '1.0分',
                    },
                ],
                pieTitle: '服务人员态度',
                satisfaction: '80%',
            }
            this.chartData_3 = {
                pieData: [
                    {
                        value: 113,
                        name: '5.0分',
                    },
                    {
                        value: 101,
                        name: '4.0分',
                    },
                    {
                        value: 89,
                        name: '3.0分',
                    },
                    {
                        value: 82,
                        name: '2.0分',
                    },
                    {
                        value: 35,
                        name: '1.0分',
                    },
                ],
                pieTitle: '处理方式',
                satisfaction: '78%',
            }
        },
    };
</script>
<style scoped>
    .button_cl {
        display: flex;
    }

    .title_cl {
        display: flex;
        margin: 2vh 0 0 0;
        color: #FFFFFF;
    }


    .left_cl {
        width: 16vh;
        height: 16vh;
        /* background-image:url(../../assets/img/image/ic_card_police2x.png)no-repeat; */
        background-image: url('../../assets/img/image/ic_card_police2x.png');
        background-size: 100% 100%;
    }

    .num_cl {

        color: #FFFFFF;
        font-size: 3.6vh;
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
        font-size: 2.4vh;
    }

    .center_cl {
        width: 40vh;
        height: 16vh;
        margin: 0 0 0 4vh
    }

    .center_rg_cl {
        width: 70vh;
        height: 16vh;
    }
    .mr_20 {
    margin: 0 2vh;
}
</style>