<template>
    <div>
        <div>
            <div class="top_cl">
                <el-select v-model="citycode" class="select" placeholder="公安">
                    <el-option v-for="item in posoptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="人脸" name="first"></el-tab-pane>
                    <el-tab-pane label="车辆" name="second"></el-tab-pane>
                </el-tabs>
            </div>

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
            <div style="height:52px;padding-top: 8px;text-align: right;">
                <sk-page :total="total"  @page-change="pageChange"></sk-page>
            </div>
        </div>
    </div>
</template>
<script>
    import { getshareist, getshareCarist } from '@/api/gxzx'

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
                total: 0,
                tabIndex: '',
                activeName: 'first',
                posoptions: [
                    { value: '01', label: '公安' }
                ],
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
                this.getPerData()
            },
            yzxx(e) {
                console.log(e, "aaaaaaaa00000a")
            },

            getPerData() {
                console.log(this.queryData.current, "yyyyy")
                var data = {
                    city: 10001, //城市编码
                    district: 10003, //区编码
                    street: 10016, //街道编码
                    parkName: "勘察", //园区名
                    current: this.queryData.current //当前页码

                }
                getshareist(data).then((res) => {
                    console.log(res, 'sssss')
                    if (res.code == 0) {
                        this.tableData = res.data.result
                        this.total = res.data.total
                    }

                })
            },
            getPerData() {
                console.log(this.queryData.current, "yyyyy")
                var data = {
                    city: 10001, //城市编码
                    district: 10003, //区编码
                    street: 10016, //街道编码
                    parkName: "勘察", //园区名
                    current: this.queryData.current //当前页码

                }
                getshareist(data).then((res) => {
                    console.log(res, 'sssss')
                    if (res.code == 0) {
                        this.tableData = res.data.result
                        this.total = res.data.total
                    }

                })
            },
            getCarData() {
                console.log(this.queryData.current, "yyyyy")
                var data = {
                    city: 10001, //城市编码
                    district: 10003, //区编码
                    street: 10016, //街道编码
                    parkName: "勘察", //园区名
                    current: this.queryData.current //当前页码

                }
                getshareCarist(data).then((res) => {
                    console.log(res, 'sssss')
                    if (res.code == 0) {
                        this.tableData = res.data.result
                        this.total = res.data.total
                    }

                })
            },
            // 切换tab
            handleClick(tab, event) {
                console.log(tab, event);
                this.queryData.current = 1
                this.tabIndex = tab.index

                if (this.tabIndex == 0) {
                    //人员
                    this.getPerData()

                } else if (this.tabIndex == 1) {
                    //车辆
                    this.getCarData()
                }

            },
            // 页数切换
            pageChange(val) {
                debugger
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