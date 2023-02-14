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

            <sk-icon-button style="margin-left:0px" @click="checkSearch"></sk-icon-button>
        </div>
        <div class="title_cl">
            <div class="left_cl">
                <div class="le_num">
                    <div class="left_fw">
                        <div class="num_cl">{{equipmentTotal}}</div>

                        
                        <div class="per_num">设备总数</div>
                    </div>
                    <div class="cen_cl"></div>
                    <div class="left_fw">
                        <div class="num_cl">{{completionRate}}</div>
                        <div class="per_num">信息完善率</div>
                    </div>

                </div>

            </div>

        </div>
        <div class="table-box">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" align="center" width="">
                </el-table-column>

                <el-table-column prop="equipmentName" label="设备名称" width="">
                </el-table-column>

                <el-table-column prop="parkName" label="设备名称" width="">
                </el-table-column>
                <el-table-column prop="deviceNo" label="设备编号" width="">
                </el-table-column>

                <el-table-column prop="acreage" label="经纬度" width="">
                    <template slot-scope="scope">
                        <div>{{scope.row.latitude|location}},{{scope.row.longitude|location}}</div>
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
    import { getEquipmentList,getsequipmanList,getMenuList } from '@/api/sjzx'
    import doughnutChart from '_c/echartsCon/DoughnutChart.vue'
    import ageCharts from '_c/echartsCon/ageCharts.vue'

    // import * as echarts from "echarts";

    export default {
        name: 'dataCenter-equipmentData',
        components: {
            doughnutChart,
            ageCharts
        },
        title: "数据中心 > 设备数据",
        data() {
            return {
                tableData: [],
                citycode: '',
                qucode: '',
                streecode: '',
                completionRate: '',
                equipmentTotal: '',
                current: 1,
                size: 10,
                total: 0,
                cityoptions: [], //沈阳市
                districtptions: [], //行政区
                streeoptions: [], //街道
                parkptions: [], //小区
                citycode: '',
                districcode: '',
                streecode: '',
                parkcode: '',
                codeData: '10000',
            };
        },
        methods: {
               // 获取城市
               getCityData() {
             
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
                this.current = 1
                this.getListData()
            },
            yzxx(e) {
                console.log(e, "aaaaaaaa00000a")
            },

            getListData() {
                var data = {
                    city: this.citycode, //城市编码
                    district: this.districcode, //区编码
                    street: this.streecode, //街道编码
                    // parkName: "勘察", //园区名
                    parkName: this.parkcode, //园区名
                    current: this.current //当前页码

                }
                getEquipmentList(data).then((res) => {
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
            getsEqtatData() {
                getsequipmanList().then((res) => {
                    var reslist = res.data
                    if (res.code == 0) {
                        this.equipmentTotal = reslist.equipmentTotal
                        this.completionRate = reslist.completionRate

                    }

                })

            },


        },
        mounted() {
            this.getListData()
            this.getsEqtatData()
            this.getCityData()
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
        background-image: url('../../assets/img/datacente/ic_card_pic2x.png');
        background-size: 100% 100%;
    }



    .cen_text {
        margin: 50px 0 0 0;
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
        color: #ccc;
        text-align: center;
        font-weight: 600;
    }


    .mr_20 {
        margin: 0 10px;
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