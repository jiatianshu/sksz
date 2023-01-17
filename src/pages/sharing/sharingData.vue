<template>
    <div>
        <div>
            <div class="top_cl">
                <el-select v-model="posDatqa" class="select" placeholder="公安">
                    <el-option v-for="item in posoptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="人脸" name="first"></el-tab-pane>
                    <el-tab-pane label="车辆" name="second"></el-tab-pane>
                </el-tabs>
            </div>

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

            <sk-icon-button style="margin-left:12px" @click="checkSearch"></sk-icon-button>
        </div>

        <div class="table-box">
            <el-table :data="tableData" style="width: 100%" v-if="activeName==='first'">
                <el-table-column type="index" label="序号" align="center" width="">
                </el-table-column>
                <el-table-column prop="parkName" label="园区" width="">
                </el-table-column>
                <el-table-column prop="equipmentName" label="设备名称" width="">
                </el-table-column>
                <el-table-column prop="acreage" label="人脸图" width="">
                    <template slot-scope="scope">
                        <div><img :src="scope.row.img" class='img_cl' alt=""></div>
                    </template>
                </el-table-column>
                <el-table-column prop="acreage" label="全景图" width="">
                    <template slot-scope="scope">
                        <div><img :src="scope.row.panorama" class='img_cl' alt=""></div>
                    </template>
                </el-table-column>
                <el-table-column prop="longitude" label="经度" width="">
                </el-table-column>
                <el-table-column prop="latitude" label="纬度" width="">
                </el-table-column>
                <el-table-column prop="createTime" label="上报时间" width="">

                </el-table-column>

            </el-table>
            <el-table :data="tableData" style="width: 100%" v-if="activeName==='second'">
                <el-table-column type="index" label="序号" align="center" width="">
                </el-table-column>
                <el-table-column prop="parkName" label="园区" width="">
                </el-table-column>
                <el-table-column prop="equipmentName" label="设备名称" width="">
                </el-table-column>
                <el-table-column prop="acreage" label="车辆图片" width="">
                    <template slot-scope="scope">
                        <div><img :src="scope.row.img" class='img_cl' alt=""></div>
                    </template>
                </el-table-column>
                <el-table-column prop="acreage" label="全景图" width="">
                    <template slot-scope="scope">
                        <div><img :src="scope.row.panorama" class='img_cl' alt=""></div>
                    </template>
                </el-table-column>
                <el-table-column prop="plateNumber" label="车牌号" width="">
                </el-table-column>
                <el-table-column prop="longitude" label="经度" width="">
                </el-table-column>
                <el-table-column prop="latitude" label="纬度" width="">
                </el-table-column>
                <el-table-column prop="createTime" label="上报时间" width="">

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
    import { getshareist, getshareCarist } from '@/api/gxzx'
    import {  getMenuList } from '@/api/sjzx'

    export default {
        name: 'dataCenter-houseData',
        components: {

        },
        title: "共享中心 > 数据共享",
        data() {
            return {
                chartData_1: {},
                chartData_2: {},
                chartData_3: {},
                tableData: [],
                queryData: {
                    current: 1,
                },
                activeName: 'first',
                total: 0,
                pageNum:1,
                tabIndex: '',
                posDatqa: '',
                posoptions: [
                    { value: '01', label: '公安' }
                ],
                cityoptions: [],
                citycode: '',
                qucode: '',
                streecode: '',
                current: 1,
                size: 10,
                total: 0,
                cityoptions: [], //沈阳市
                districtptions: [], //行政区
                streeoptions: [], //街道
                parkptions: [], //小区
                codeData: '10000',
                citycode: '',
                districcode: '',
                streecode: '',
                parkcode: '',
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
            //搜索
            checkSearch() {
                this.current = 1
                this.getPerData()
            },
            handleCurrentChange(num) {
                console.log(num, "mmmmmmmmmm")
                this.current = num
                this.getPerData()
            },
            yzxx(e) {
                console.log(e, "aaaaaaaa00000a")
            },

            getPerData() {
                console.log(this.queryData.current, "yyyyy")
                var data = {
                    city: this.citycode, //城市编码
                    district: this.districcode, //区编码
                    street: this.streecode, //街道编码
                    // parkName: "勘察", //园区名
                    parkName: this.parkcode, //园区名
                    current: this.current //当前页码

                }
                getshareist(data).then((res) => {
                    console.log(res, 'sssss')
                    if (res.code == 0) {
                        this.tableData = res.data.result
                        this.total = res.data.total
                        this.current = res.data.current
                    }

                })
            },
      
            getCarData() {
                console.log(this.queryData.current, "yyyyy")
                var data = {
                    city: this.citycode, //城市编码
                    district: this.districcode, //区编码
                    street: this.streecode, //街道编码
                    // parkName: "勘察", //园区名
                    parkName: this.parkcode, //园区名
                    current: this.current //当前页码

                }
                getshareCarist(data).then((res) => {
                    console.log(res, 'sssss')
                    if (res.code == 0) {
                        this.tableData = res.data.result
                        this.total = res.data.total
                        this.current = res.data.current
                    }

                })
            },
            // 切换tab
            handleClick(tab, event) {
                console.log(tab, event);
                this.current = 1
                this.tabIndex = tab.index

                if (this.tabIndex == 0) {
                    //人员
                    this.current =1
                    this.getPerData()

                } else if (this.tabIndex == 1) {
                    //车辆
                    this.current =1
                    this.getCarData()
                }

            },
            // 页数切换
            pageChange(val) {
                console.log(this.queryData, "current", val, "aaaaaaaaaaaaaaaaaaaa")
                this.$set(this.queryData, "current", val);
                if (this.tabIndex == 0) {
                    this.getPerData();
                } else if (this.tabIndex == 1) {
                    this.getCarData()
                }


            }

        },
        mounted() {
            this.getPerData()
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


    .select {
        margin-right: 16px;
    }

    .img_cl {
        width: 60px;
        height: 48px;
    }

    .top_cl {
        margin: 0 0 16px 0;
        display: flex;
    }

    .left_bor {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .right_bor {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>