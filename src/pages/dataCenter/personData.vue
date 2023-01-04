<!--
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-04 20:09:28
 * @Description: 数据中心-人员数据
-->
<template>
    <div>
        <div>
            <sk-icon-input :value.sync="num"></sk-icon-input>
            <sk-icon-button style="margin-left:12px" @click="aaaa"></sk-icon-button>
        </div>
        <div class="title_cl">
            <div class="left_cl">
            </div>
            <div class="center_cl"></div>
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

    export default {
        name: 'personData',
        title: "数据中心 > 人员数据",
        data() {
            return {
                tableData: [{
                    name: 'adasda'
                }, {}],
                queryData:{
                    current:1,
                },
                total:0,
                num: "",
            };
        },

        components: {

        },
        methods: {
            aaaa() {
                console.log(this.num, "aaaaaaaaa")
            },
            yzxx(e) {
                console.log(e, "aaaaaaaaa")
            },
            getData(){

            },
            pageChange(val){
                this.$set(this.queryData,"current",val);
                this.getData();
            }
        },
        mounted() {
            this.getData();
        },
    };
</script>
<style scoped>
    .button_cl {
        display: flex;
    }

    .title_cl {
        display: flex;
    }
   .left_cl{
    width: 6vh;
    height: 6vh;
        background: url(../../assets/img/image/ic_card_police2x.png)no-repeat;
    }
</style>