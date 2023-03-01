<!--
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-04 22:09:32
 * @Description: 数据中心-人员数据
-->
<template>
    <div>
        <div style="margin: 0 0 6px 0;">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="警员管理" name="first"></el-tab-pane>
                <el-tab-pane label="-" name="second"></el-tab-pane>
            </el-tabs>
        </div>
        <div>
            <el-select v-model="posDatqa" class="select" placeholder="社区民警">
                <el-option v-for="item in posoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <sk-icon-input :placeholder='carplaceholder' :value.sync="name"
                @keyup.enter.native="checkSearch"></sk-icon-input>
            <sk-icon-button style="margin-left:12px" @click="checkSearch"></sk-icon-button>
        </div>

        <div class="table-box">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" align="center" width="80">
                </el-table-column>
                <el-table-column prop="policeName" label="姓名">
                </el-table-column>

                <el-table-column prop="photo" label="照片" width="">
                    <template slot-scope="scope">
                        <img @click="imgData(scope.row)" class="img_jy" :src="scope.row.photo" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="policeNo" label="警号">
                </el-table-column>
                <el-table-column prop="type" label="警种" width="">
                </el-table-column>
                <el-table-column prop="branchName" label="分局" width="">
                </el-table-column>

                <el-table-column prop="orgName" label="所属" width="">
                </el-table-column>

            </el-table>
            <div class="el_page_cl">
                <el-pagination background @current-change="handleCurrentChange" :current-page.sync="current"
                    layout="prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
        <el-dialog title="照片" :visible.sync="dialogVisibleImg" :append-to-body="true" width="">
            <div class="img_dialog_open"> <img class="openimg_cls" :src="img_open" alt=""></div>

        </el-dialog>
    </div>
</template>
<script>
    import { getPoList } from '@/api/ywzx'

    // import * as echarts from "echarts";

    export default {
        name: 'dataCenter-carData',
        components: {
        },
        title: "业务中心 > 警务服务",
        data() {
            return {
                dialogVisibleImg: false,
                img_open: '',
                posDatqa:'',
                tableData: [],
                posoptions: [
                    { value: '01', label: '社区民警' }
                ],
                queryData: {
                    current: 1,
                },
                current: 1,
                size: 10,
                total: 0,
                name: "",
                activeName: 'first',
                carplaceholder: "请输入警员姓名",
            };
        },
        methods: {
            imgData(e) {
                //点击头像
                this.dialogVisibleImg = true
                this.img_open = e.photo
            },
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
            getListData() {
                var data = {
                    name: this.name, //号码
                    current: this.current //当前页码

                }
                getPoList(data).then((res) => {
                    console.log(res, 'sssss')
                    if (res.code == 0) {
                        this.tableData = res.data.result
                        this.total = res.data.total
                        this.current = res.data.current
                    }

                })
            },

            pageChange(val) {
                this.$set(this.queryData, "current", val);
                this.getListData();
            },
            // 切换tab
            handleClick(tab, event) {
                console.log(tab, event);
                // this.queryData.current = 1
                // this.tabIndex = tab.index

                // if (this.tabIndex == 0) {
                //     //人员
                //     this.current = 1
                //     this.getPerData()

                // } else if (this.tabIndex == 1) {
                //     //车辆
                //     this.current = 1
                //     this.getCarData()
                // }

            },


        },
        mounted() {
            this.getListData()
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

    .img_jy {
        width: 40px;
        height: 40px;
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