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
            <sk-icon-input :placeholder='carplaceholder' :value.sync="name"
                @keyup.enter.native="checkSearch"></sk-icon-input>
            <sk-icon-button style="margin-left:12px" @click="checkSearch"></sk-icon-button>
        </div>
   
        <div class="table-box">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" align="center" width="">
                </el-table-column>
                <el-table-column prop="policeName" label="姓名">
                </el-table-column>
                <el-table-column prop="telephone" label="手机号">
                </el-table-column>
                <el-table-column prop="photo" label="照片" width="">
                    <template slot-scope="scope">
                        <img :src="scope.row.photo" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="policeNo" label="警号">
                </el-table-column>
                <el-table-column prop="type" label="警种" width="">
                </el-table-column>
                <el-table-column prop="branchName" label="分局" width="">
                </el-table-column>
                <el-table-column prop="roomName" label="警务室" width="">
                </el-table-column>
                <el-table-column prop="orgName" label="所属" width="">
                </el-table-column>
     
            </el-table>
            <div style="height:52px;padding-top: 8px;text-align: right;">
                <sk-page :total="total" @page-change="pageChange"></sk-page>
            </div>
        </div>
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
                tableData: [],
                queryData: {
                    current: 1,
                },
                total: 0,
                name: "",
                carplaceholder: "请输入警员姓名",
            };
        },
        methods: {
            checkSearch() {
                console.log(this.name, "aaaaaaaaa")
                this.getListData()
            },
            yzxx(e) {
                console.log(e, "aaaaaaaa00000a")
            },

            getListData() {
                var data = {
                    name: this.name, //号码
                    current: this.queryData.current //当前页码

                }
                getPoList(data).then((res) => {
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
</style>