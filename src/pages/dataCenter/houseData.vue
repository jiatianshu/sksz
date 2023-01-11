<template>
    <div>
        <div>
            <el-select v-model="citycode" class="select" placeholder="请选择城市" @change="cityChange" clearable>
                <el-option v-for="item in cityoptions" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
            </el-select>
            <el-select v-model="districcode" class="select" placeholder="请选择行政区" @change="districChange" clearable>
                <el-option v-for="item in districtptions" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
            </el-select>
            <el-select v-model="streecode" class="select" placeholder="请选择街道" @change="streeChange" clearable>
                <el-option v-for="item in streeoptions" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
            </el-select>
            <el-select v-model="parkcode" class="select" placeholder="请选择园区" @change="parkChange" clearable>
                <el-option v-for="item in parkptions" :key="item.code" :label="item.name" :value="item.name">
                </el-option>
            </el-select>
            <!-- <skDistrict @change="districtChange" /> -->

            <sk-icon-button style="margin-left:12px" @click="checkSearch"></sk-icon-button>
        </div>
        <div class="title_cl">
            <div class="left_cl">
                <div class="le_num">
                    <div class="left_fw">
                        <div class="num_cl">{{houseTotal}}</div>
                        <div class="per_num">房屋总数</div>
                    </div>
                    <div class="cen_cl"></div>
                    <div class="left_fw">
                        <div class="num_cl">{{layoutRange}}</div>
                        <div class="per_num">信息完善率</div>
                    </div>

                </div>

            </div>
            <div class="center_rg_cl">
                <div id="carPpEChart" style=" padding-top: 10px; left: 2vmin; height: 100%;">
                </div>
            </div>
            <div class="center_rg_cl">
                <div id="carColChart" style=" padding-top: 10px; left: 2vmin; height: 100%;">
                </div>
            </div>
        </div>
        <div class="table-box">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" align="center" width="100">
                </el-table-column>

                <el-table-column prop="houseName" label="房号" width="">
                </el-table-column>
                <!-- <el-table-column prop="brand" label="类型" width="">
                </el-table-column> -->
                <el-table-column prop="parkName" label="园区" width="140">
                </el-table-column>
                <el-table-column prop="acreage" label="面积" width="">
                </el-table-column>
                <el-table-column prop="laytout" label="户型" width="">
                </el-table-column>
                <el-table-column prop="address" label="操作" width="580">
                    <template slot-scope="scope" class="button_cl">
                        <sk-table-button @click="yzxx(scope.row)" title="业主信息"
                            icon="ic_personrole2x.png"></sk-table-button>
                        <sk-table-button title="业主信息" icon="ic_housenumber2x.png"></sk-table-button>
                        <sk-table-button title="房主信息" icon="ic_rentrole2x.png"></sk-table-button>
                        <sk-table-button title="租户信息" icon="ic_rentrole2x.png"></sk-table-button>
                        <sk-table-button title="平面图" icon="ic_rentrole2x.png"></sk-table-button>
                        <sk-table-button title="空间信息" icon="ic_pic2x.png"></sk-table-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="height:52px;padding-top: 8px;text-align: right;">
                <!-- <sk-page :total="total" :current-page='current' @page-change="pageChange"></sk-page> -->
                <el-pagination background @current-change="handleCurrentChange" :current-page.sync="current"
                    layout="prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    import { getHouseList, getsHousetatList, getMenuList } from '@/api/sjzx'
    import chartsoptions from "@/utils/echartsOption";

    import * as echarts from "echarts";

    export default {
        name: 'dataCenter-houseData',
        title: "数据中心 > 房屋数据",
        data() {
            return {
                chartData_1: {},
                chartData_2: {},
                chartData_3: {},
                tableData: [],
                queryData: {
                    current: 1,
                    size: 10,
                    total: 0,
                },
                current: 1,
                size: 10,
                total: 0,
                typrblarea: '面积',
                typrblayou: '户型',
                cityoptions: [], //沈阳市
                districtptions: [], //行政区
                streeoptions: [], //街道
                parkptions: [], //小区
                houseTotal: '',
                layoutRange: '',
                codeData: '10000',
                citycode: '',
                districcode: '',
                streecode: '',
                parkcode: '',

                formData: {
                    city: "",
                    cityName: "",
                    district: "",
                    districtName: "",
                    street: "",
                    streetName: "",
                },
            };
        },
        methods: {
            // 获取城市
            getCityData() {
                var data = {
                    parentId: this.codeData  //辽宁省code
                }
                getMenuList(this.codeData).then((res) => {
                    this.cityoptions = res.data

                })
            },
            //c选择城市
            cityChange(a) {
                this.districcode = ''
                this.streecode = ''
                this.parkcode = ''
                getMenuList(a).then((res) => {
                    this.districtptions = res.data

                })

            },
            // 选中行政区
            districChange(a) {
                this.streecode = ''
                this.parkcode = ''
                getMenuList(a).then((res) => {
                    this.streeoptions = res.data

                })

            },
            // 选中街道
            streeChange(a) {
                this.parkcode = ''
                getMenuList(a).then((res) => {
                    this.parkptions = res.data

                })

            },
            // 选中园区
            parkChange(a) {

            },
            //点击搜索
            checkSearch() {
                console.log(this.citycode, "???????")
                this.current = 1
                this.getListData()
            },
            yzxx(e) {
                console.log(e, "aaaaaaaa00000a")
            },
            //获取列表接口
            getListData() {
                console.log(this.current, "yyyyy")
                var data = {
                    city: this.citycode, //城市编码
                    district: this.districcode, //区编码
                    street: this.streecode, //街道编码
                    // parkName: "勘察", //园区名
                    parkName: this.parkcode, //园区名
                    current: this.current //当前页码

                }
                getHouseList(data).then((res) => {
                    console.log(res, 'sssss')
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
            getsHousetatData() {
                getsHousetatList().then((res) => {
                    var reslist = res.data
                    console.log(reslist, 'varrrrr')
                    if (res.code == 0) {
                        this.houseTotal = reslist.houseTotal
                        this.layoutRange = reslist.completionRate
                        this.chartData_1.pieData = reslist.layoutRange
                        this.chartData_2.pieData = reslist.areaRange

                    }
                    this.carPpEChartData()
                    this.carColChartData()

                })

            },
            pageChange(val) {
                console.log(val, "val??????????")
                this.$set(this.queryData, "current", val);
                this.getListData();
            },
            carPpEChartData() {
                let myChart = echarts.init(document.getElementById('carPpEChart'))
                myChart.setOption(
                    chartsoptions.currencyChart(this.chartData_1.pieData, this.typrblayou)
                )
                window.addEventListener('resize', function () {
                    //浏览器大小调整echarts随之改变
                    myChart.resize()
                })
            },
            carColChartData() {
                let myChart = echarts.init(document.getElementById('carColChart'))
                myChart.setOption(
                    chartsoptions.currencyChart(this.chartData_2.pieData, this.typrblarea)
                )
                window.addEventListener('resize', function () {
                    //浏览器大小调整echarts随之改变
                    myChart.resize()
                })
            },

        },
        mounted() {
            this.getListData()
            this.getsHousetatData()
            this.getCityData()
        },
        created() {

        },
    };
</script>

<style scoped lang="scss">
    .button_cl {
        display: flex;
    }

    .title_cl {
        display: flex;
        margin: 12px 0 0 0;
        color: #FFFFFF;
    }


    .left_cl {
        width: 308px;
        height: 148px;
        border-radius: 20px;
        /* background-image:url(../../assets/img/image/ic_card_police2x.png)no-repeat; */
        background-image: url('../../assets/img/datacente/ic_card_bighome2x.png');
        background-size: 100% 100%;
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

    /* ::v-deep.el-pagination {
        .el-pager {
            li {
                height: 26px;
                border: 1px solid rgba(255, 255, 255, 0.4);
                border-radius: 4px;
                background-color: #1E1F25 !important;
            }

            .active {
                background: rgba(16, 142, 233, 0.20) !important;
                border: none;
            }
        }

        .btn-prev,
        .btn-next {
            height: 26px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 4px;
            background-color: #1E1F25 !important;
        }
    } */
</style>