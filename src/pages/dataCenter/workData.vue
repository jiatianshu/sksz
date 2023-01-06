<template>
    <div>
        <div>
            <el-select v-model="citycode" class="select" placeholder="请选择城市">
                <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="qucode" class="select" placeholder="请选择行政区">
                <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="qucode" class="select" placeholder="请选择街道">
                <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>>

            <sk-icon-button style="margin-left:0px" @click="checkSearch"></sk-icon-button>
        </div>
        <div class="title_cl">
            <div class="left_cl">
                <div class="le_num">
                    <div class="left_fw">
                        <div class="num_cl">98655</div>
                        <div class="per_num">范围总数</div>
                    </div>
                    <div class="cen_cl"></div>
                    <div class="left_fw">
                        <div class="num_cl">93.5%</div>
                        <div class="per_num">信息完善率</div>
                    </div>

                </div>


            </div>

            <div class="centert_cl">
                <div class="cen_text">
                    <div class="num_cl">9060</div>
                    <div class="per_num">员工总数</div>
                </div>
            </div>

        </div>
        <div class="table-box">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" align="center" width="50">
                </el-table-column>
                <el-table-column prop="photo" label="单位图片" width="80">
                    <template slot-scope="scope">
                        <img :src="scope.row.companyImg" class="img_cl" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="单位名称" width="">
                </el-table-column>
                <el-table-column prop="serviceType" label="服务类型" width="">
                </el-table-column>
                <el-table-column prop="acreage" label="行政区划" width="">
                    <template slot-scope="scope">
                        <div>{{scope.row.cityName}},{{scope.row.districtName}},{{scope.row.streetName}}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="详细地址" width="">
                </el-table-column>
                <el-table-column prop="acreage" label="经纬度" width="">
                    <template slot-scope="scope">
                        <div>{{scope.row.latitude}},{{scope.row.longitude}}</div>
                    </template>
                </el-table-column>


                <el-table-column prop="address" label="操作" width="400">
                    <template slot-scope="scope" class="button_cl">
                        <sk-table-button @click="yzxx(scope.row)" title="业主信息"
                            icon="ic_personrole2x.png"></sk-table-button>
                        <sk-table-button title="员工数据" icon="ic_housenumber2x.png"></sk-table-button>
                        <sk-table-button title="设备数据" icon="ic_rentrole2x.png"></sk-table-button>
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
    import { getWorkList } from '@/api/sjzx'
    import doughnutChart from '_c/echartsCon/DoughnutChart.vue'
    import ageCharts from '_c/echartsCon/ageCharts.vue'

    // import * as echarts from "echarts";

    export default {
        name: 'dataCenter-workData',
        components: {
            doughnutChart,
            ageCharts
        },
        title: "数据中心 > 单位数据",
        data() {
            return {
                chartData_1: {},
                chartData_2: {},
                chartData_3: {},
                tableData: [],
                queryData: {
                    current: 1,
                },
                total: 0,
                cityoptions: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                citycode: '',
                qucode: '',
                streecode: '',
            };
        },
        methods: {
            checkSearch() {
                console.log(this.number, "aaaaaaaaa")
                this.getListData()
            },
            yzxx(e) {
                console.log(e, "aaaaaaaa00000a")
            },

            getListData() {
                console.log(this.queryData.current, "yyyyy")
                var data = {
                    city: 10001, //城市编码
                    district: 10003, //区编码
                    street: 10021, //街道编码
                    current: this.queryData.current //当前页码

                }
                getWorkList(data).then((res) => {
                    console.log(res, 'sssss')
                    if (res.code == 0) {
                        this.tableData = res.data.result
                        this.total = res.data.total
                    }

                })
            },

            pageChange(val) {
                this.$set(this.queryData, "current", val);
                this.getListData();
            }

        },
        mounted() {
            this.getListData()
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
                ],
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
        width: 308px;
        height: 148px;
        border-radius: 20px;
        background-image: url('../../assets/img/datacente/ic_card_office2x.png');
        background-size: 100% 100%;
    }

    .centert_cl {
        width: 148px;
        height: 148px;
        border-radius: 20px;
        text-align: center;
        background-image: url('../../assets/img/datacente/ic_card_role2x.png');
        background-size: 100% 100%;
        margin: 0 0 0 32px;
    }

    .cen_text {
        margin: 60px 0 0 0;
    }

    .num_cl {

        /* width: 83px;
        height: 43px; */
        /* font-family: SegoeUI-Bold; */
        font-size: 32px;
        color: #FFFFFF;
        text-align: center;
        font-weight: 700
    }

    .le_num {
        margin: 60px auto 0 auto;
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        height: 100%
    }

    .per_num {
        /* width: 64px;
        height: 22px; */
        /* font-family: PingFangSC-Semibold; */
        font-size: 16px;
        color: #FFFFFF;
        text-align: center;
        font-weight: 600;
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

    .cen_cl {
        width: 1px;
        height: 48px;
        opacity: 0.4;
        border: 1px solid rgba(255, 255, 255, 1);
        margin: 6px 10px 0 10px;
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