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
                <el-table-column prop="photo" label="头像">
                    <template slot-scope="scope">
                        <img class="img_cl" @click="imgData(scope.row)" :src="scope.row.photo" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="姓名">
                </el-table-column>
                <el-table-column prop="idNumber" label="身份证">
                </el-table-column>
                <el-table-column prop="sex" label="性别">
                </el-table-column>
                <el-table-column prop="telephone" label="手机号">
                </el-table-column>
                <el-table-column prop="address" label="操作" width="780">
                    <template slot-scope="scope" class="button_cl">

                        <sk-table-button @click="fwxxData(scope.row)" title="房屋信息"
                            icon="ic_housenumber2x.png"></sk-table-button>
                        <sk-table-button @click="yzxxData(scope.row)" title="车辆信息"
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
        <el-dialog :title="title" :append-to-body="true" :visible.sync="dialogVisible" width="55%">
            <div class="all_dialog">

                <div class="top_box">
                    <img class="img_text" :src="textform.photo" alt="">
                    <div class="text_box">
                        <div>
                            <div class="text_con"><span class="text_na"> 姓名: </span><span
                                    class="text_detail">{{textform.name}}</span>
                            </div>
                            <div class="text_con"><span class="text_na"> 身份证号: </span><span
                                    class="text_detail">{{textform.idNumber}}</span>
                            </div>
                            <div class="text_con"><span class="text_na"> 性别: </span><span
                                    class="text_detail">{{textform.sex}}</span>
                            </div>
                            <div class="text_con"><span class="text_na"> 手机号: </span><span
                                    class="text_detail">{{textform.telephone}}</span>
                            </div>

                        </div>
                        <div class="tab_text">
                            <span class="tab_con" v-for="(item,index) in textform.labels">{{item.label}}</span>

                        </div>
                    </div>
                </div>
                <div class="tab_per_car">

                    <sk-tab-button v-for="(item,index) in button" :key="item.index" :icon="item.icon"
                        :class="{show:item.type ==valueBtn}" @click="open(item)" :title="item.text">


                    </sk-tab-button>

                    <!-- <sk-tab-button class="hover_button" @click="fwxxlist" title="房屋信息"
                        icon="ic_housenumber2x.png"></sk-tab-button>
                    <sk-tab-button class="hover_button" style="margin: 0;" @click="clxxlist" title="车辆信息"
                        icon="ic_carnumber2x.png"></sk-tab-button> -->

                    <div class="tab_contail" v-show="valueBtn == 1">
                        <el-carousel trigger="click" height="" arrow="always" indicator-position="none"
                            :autoplay="false" v-if="houseList.length>0">
                            <el-carousel-item v-for="(item,index) in houseList" :key="index">
                                <div class="car_box">
                                    <div class="text_center_car">
                                        <div class="fh_text"><span class="fh_text_fh">园区明：</span> <span>{{ item.parkName
                                                }}</span> </div>
                                        <div class="fh_text"><span class="fh_text_fh">房号：</span> <span>{{ item.houseName
                                                }}</span> </div>
                                        <div class="fh_text"><span class="fh_text_fh">面积：</span> <span>{{ item.acreage
                                                }}</span> </div>
                                        <div class="fh_text"><span class="fh_text_fh">户型：</span> <span>{{ item.laytout
                                                }}</span> </div>
                                    </div>
                                    <img :src="item.parkImg" class="parkImg-cl" alt="">
                                </div>

                            </el-carousel-item>

                        </el-carousel>
                        <el-carousel trigger="click" height="" arrow="always" indicator-position="none"
                            :autoplay="false" v-else>

                            <el-carousel-item>
                                <div class="zwsj_cls">暂无数据</div>

                            </el-carousel-item>

                        </el-carousel>

                    </div>
                    <div class="tab_contail" v-show="valueBtn == 2">
                        <el-carousel trigger="click" height="" arrow="always" indicator-position="none"
                            :autoplay="false" v-if="carList.length>0">
                            <el-carousel-item v-for="(item,index) in carList" :key="index">
                                <div class="car_box">
                                    <div class="text_center_car">
                                        <div class="fh_text"><span class="fh_text_fh">车牌号：</span> <span>{{
                                                item.plateNumber
                                                }}</span> </div>
                                        <div class="fh_text"><span class="fh_text_fh">品牌：</span> <span>{{ item.brand
                                                }}</span> </div>
                                        <div class="fh_text"><span class="fh_text_fh">颜色：</span> <span>{{ item.color
                                                }}</span> </div>
                                        <div class="fh_text"><span class="fh_text_fh">型号：</span> <span>{{ item.model
                                                }}</span> </div>
                                    </div>
                                    <div>
                                        <img :src="item.carPhoto" class="parkImg-car" alt="">
                                        <img :src="item.platePhoto" class="parkImg-car" alt="">
                                    </div>

                                </div>

                            </el-carousel-item>
                        </el-carousel>
                        <el-carousel trigger="click" height="" arrow="always" indicator-position="none"
                            :autoplay="false" v-else>

                            <el-carousel-item>
                                <div class="zwsj_cls">暂无数据</div>

                            </el-carousel-item>

                        </el-carousel>
                    </div>
                </div>
            </div>
            <!-- <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span> -->
        </el-dialog>

        <el-dialog title="头像" :visible.sync="dialogVisibleImg" :append-to-body="true" width="">
            <div class="img_dialog_open"> <img class="openimg_cls" :src="img_open" alt=""></div>

        </el-dialog>


    </div>
</template>
<script>
    import { getperList, getstatisticsList, getHousesInfo, getCarInfo } from '@/api/sjzx'
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
                img_open: '',
                title: '',
                personid: '',
                personsTotal: '',
                chartData_1: {},
                chartData_2: {},
                textform: {
                    name: '',

                },
                button: [
                    { text: '房屋信息', type: 1, select: true, icon: 'ic_housenumber2x.png' },
                    { text: '车辆信息', type: '2', select: false, icon: 'ic_housenumber2x.png' }
                ],
                valueBtn: 1,
                sextype: '性别',
                agetype: '年龄',
                tableData: [],
                dialogVisibleImg: false,
                dialogVisible: false,
                queryData: {
                    current: 1,
                },
                clxxlist: [],
                houseList: [],
                carList: [],
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
                text_list: [
                    { name: '王一博' }
                ]
            };
        },
        methods: {

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => { });
            },
            handleCurrentChange(num) {
                this.current = num
                this.getListData()
            },
            checkSearch() {
                this.current = 1
                this.getListData()
            },

            open(item) {
                //点击房屋信息
                this.valueBtn = item.type
                if (item.type == 1) {
                    this.personGethouse()
                } else if (item.type == 2) {
                    this.personGetCar()

                }

            },
            personGethouse() {
                //人员id获取房屋信息
                var data = {
                    personid: this.personid
                }
                getHousesInfo(data).then((res) => {
                    if (res.code == 0) {
                        this.houseList = res.data.result
                    }

                })
            },
            personGetCar() {
                //人员id获取车辆信息
                var data = {
                    personid: this.personid
                }
                getCarInfo(data).then((res) => {
                    if (res.code == 0) {
                        this.carList = res.data.result
                    }

                })
            },
            imgData(e) {
                //点击头像
                console.log(e.photo, "gggggggggggg")
                this.dialogVisibleImg = true
                this.img_open = e.photo
            },
            fwxxData(e) {
                this.dialogVisible = true
                this.textform = e
                this.valueBtn = 1
                this.personid = e.id

                this.personGethouse()

            },
            yzxxData(e) {
                this.dialogVisible = true
                this.textform = e
                this.valueBtn = 2
                this.personid = e.id
                this.personGetCar()
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
                    chartsoptions.perSexChart(this.chartData_1.pieData, this.sextype)
                )
                window.addEventListener('resize', function () {
                    //浏览器大小调整echarts随之改变
                    myChart.resize()
                })
            },
            perAgeChartData() {
                let myChart = echarts.init(document.getElementById('perAgeChart'))
                myChart.setOption(
                    chartsoptions.currencyageChart(this.chartData_2.pieData, this.agetype)
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

<style scoped lang="scss">
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
        margin: 0 0 0 80px;
    }

    .center_rg_cl {
        width: 680px;
        height: 140px;
    }

    .el-dialog__body {
        height: 540px !important;
    }

    .mr_20 {
        margin: 0 18px;
    }

    .img_cl {
        width: 60px;
        height: 48px;
        object-fit: contain
    }

    .img_text {
        width: 200px;
        border-radius: 10px;
        margin: 0 20px 0;
        object-fit: contain
    }

    .top_box {
        display: flex;
    }

    .all_dialog {
        color: #fff;
        padding: 10px;
        height: 100%;
        width: 100%;
    }

    .tab_con {
        display: inline-block;
        padding: 8px 26px;
        background: rgba(36, 130, 253, 0.20);
        color: #2482FD;
        font-weight: 600;
        text-align: center;
        border-radius: 6px;
        margin: 0px 20px 10px 0;
    }

    .tab_text {}

    .text_box {
        margin: 10px 0 0 20px;
    }

    .text_con {
        height: 40px;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
    }

    .tab_per_car {
        margin: 40px 0 0 0;
        height: 324px;
    }

    .el-button+.el-button,
    .el-checkbox.is-bordered+.el-checkbox.is-bordered {
        /* margin: 0 !important; */

    }

    .el-button {
        min-width: 0.22rem;
        height: 0.19rem;
        /* background: rgba(36, 130, 253, 0.1)!important; */
        font-size: 0.07rem;
        /* color: #2482FD; */
        letter-spacing: 0.56px;
        font-weight: 600;
        /* border-radius: 6px; */
        border: none;
    }

    .hover_button:hover {
        background-color: rgba(36, 130, 253, 0.30) !important;
        color: #2482FD;
    }

    .hover_button:focus {
        background-color: rgba(36, 130, 253, 0.20) !important;
        color: #2482FD;
    }

    .tab_contail {
        background: rgba(36, 130, 253, 0.20);
        width: 100%;
        /* height: 100%; */
    }

    .show {
        background-color: rgba(36, 130, 253, 0.20) !important;
        color: #2482FD !important;
    }

    .show:focus {
        background-color: rgba(36, 130, 253, 0.20) !important;
        color: #2482FD !important;
    }

    .parkImg-cl {
        width: 359px;
        height: 220px;
    }

    .parkImg-car {
        width: 200px;
        height: 180px;
        margin: auto 20px;
        display: inline-block;
    }

    .text_center_car {
        padding: 20px;
        margin: auto 0;
        /* display: flex; */
    }

    .car_box {
        display: flex;
        width: 86%;
        justify-content: space-between;
        margin: auto;
        padding: 48px 20px;
    }

    .fh_text {
        height: 36px;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 600;
    }

    ::v-deep .el-carousel__arrow--left {
        /* top: 70px;
  left: -13px; */
        font-size: 26px;
        /* color: #02E9FF; */
    }

    ::v-deep .el-carousel__arrow--right {
        /* top: 70px;
  left: -13px; */
        font-size: 26px;
        /* color: #02E9FF; */
    }

    .zwsj_cls {
        text-align: center;
        margin: 14%;
    }


    .openimg_cls {
        display: inline-block;
        margin: auto;
        width: 100%;
        height: 100%;
        object-fit: contain
    }
    .img_dialog_open{
        width: 100%;
        height: 100%;
    }
</style>