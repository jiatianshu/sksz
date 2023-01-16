<template>
    <div>
        <div>
            <!-- <el-select v-model="citycode" class="select" placeholder="请选择城市">
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

            <sk-icon-button style="margin-left:0px" @click="checkSearch"></sk-icon-button> -->
            <skgetTreedistrict @change="districtChange" />
            <skIconButton @click="checkSearch"></skIconButton>
        </div>
        <div class="title_cl">
            <div class="left_cl">
                <div class="le_num">
                    <div class="left_fw">
                        <div class="num_cl">{{parkTotal}}</div>
                        <div class="per_num">园区总数</div>
                    </div>
                    <div class="cen_cl"></div>
                    <div class="left_fw">
                        <div class="num_cl">{{completionRate}}</div>
                        <div class="per_num">信息完善率</div>
                    </div>

                </div>


            </div>

            <div class="centert_cl">
                <div class="cen_text">
                    <div class="num_cl">{{houseTotal}}</div>
                    <div class="per_num">房屋总数</div>
                </div>
            </div>
            <div class="centert_cl_per">
                <div class="cen_text">
                    <div class="num_cl">{{personTotal}}</div>
                    <div class="per_num">人员总数</div>
                </div>
            </div>

        </div>
        <div class="table-box">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" align="center" width="50">
                </el-table-column>
                <el-table-column prop="photo" label="园区图片" width="80">
                    <template slot-scope="scope">
                        <img :src="scope.row.parkImg" class="img_cl" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="parkName" label="园区名称" width="">
                </el-table-column>
                <el-table-column prop="acreage" label="行政区划" width="">
                    <template slot-scope="scope">
                        <div>{{scope.row.cityName}},{{scope.row.districtName}},{{scope.row.streetName}}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="acreage" label="经纬度" width="">
                    <template slot-scope="scope">
                        <div>{{scope.row.latitude}},{{scope.row.longitude}}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="parkType" label="类型" width="60">
                    <template slot-scope="scope">
                        <div>
                            <span v-if="scope.row.parkType == 0">商住房</span>
                            <span v-if="scope.row.parkType == 2">公寓</span>
                            <span v-if="scope.row.parkType == 1">住宅</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="详细地址" width="">
                </el-table-column>
                <el-table-column prop="address" label="操作" width="400">
                    <template slot-scope="scope" class="button_cl">
                        <sk-table-button @click="yzxx(scope.row)" title="业主信息"
                            icon="ic_personrole2x.png"></sk-table-button>
                        <sk-table-button title="业主数据" icon="ic_housenumber2x.png"></sk-table-button>
                        <sk-table-button title="设备数据" icon="ic_rentrole2x.png"></sk-table-button>
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
    import { getParkList, getsParktatList } from '@/api/sjzx'
    import doughnutChart from '_c/echartsCon/DoughnutChart.vue'
    import ageCharts from '_c/echartsCon/ageCharts.vue'

    // import * as echarts from "echarts";

    export default {
        name: 'dataCenter-houseData',
        components: {
            doughnutChart,
            ageCharts
        },
        title: "数据中心 > 园区数据",
        data() {
            return {
                current: 1,
                size: 10,
                total: 0,
                formData: {
                    city: "",
                    cityName: "",
                    district: "",
                    districtName: "",
                    street: "",
                    streetName: "",
                },
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
                parkTotal: '',
                completionRate: '',
                houseTotal: '',
                personTotal: '',
            };
        },
        methods: {
            districtChange(data) {
                console.log(data, "aaaaaaaaaaaaaaaaaa")
                this.formData = data
            },
            //搜索
            checkSearch() {
                this.current = 1
                this.getListData()
            },
            yzxx(e) {
                console.log(e, "aaaaaaaa00000a")
            },
            handleCurrentChange(num) {
                console.log(num, "mmmmmmmmmm")
                this.current = num
                this.getListData()
            },
            //列表数据
            getListData() {
                console.log(this.current, "yyyyy")
                var data = {
                    city: this.formData.city, //城市编码
                    district: this.formData.district, //区编码
                    street: this.formData.street, //街道编码
                    current: this.current //当前页码

                }
                getParkList(data).then((res) => {
                    console.log(res, 'sssss')
                    if (res.code == 0) {
                        this.tableData = res.data.result
                        this.total = res.data.total
                        this.current = res.data.current
                    }

                })
            },
            getlistParkData() {
                getsParktatList().then((res) => {
                    var reslist = res.data
                    if (res.code == 0) {
                        this.parkTotal = reslist.parkTotal
                        this.completionRate = reslist.completionRate
                        this.houseTotal = reslist.houseTotal
                        this.personTotal = reslist.personTotal

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
            this.getlistParkData()
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
        background-image: url('../../assets/img/datacente/ic_card_plaza2x.png');
        background-size: 100% 100%;
    }

    .centert_cl {
        width: 148px;
        height: 136px;
        border-radius: 20px;
        text-align: center;
        background-image: url('../../assets/img/datacente/ic_card_home2x.png');
        background-size: 100% 100%;
        margin: 0 0 0 32px;
    }

    .centert_cl_per {
        width: 148px;
        height: 136px;
        border-radius: 20px;
        text-align: center;
        background-image: url('../../assets/img/datacente/ic_card_worker2x.png');
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
        margin: 50px auto 0 auto;
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
        width: 400px;
        height: 140px;
        margin: 0 0 0 30px
    }

    .center_rg_cl {
        width: 520px;
        height: 140px;
    }

    .mr_20 {
        margin: 0 18px;
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