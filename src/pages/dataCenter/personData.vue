<!--
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-02 00:37:34
 * @Description: 数据中心-人员数据
-->
<template>

    <div>
        <div>
            <sk-icon-input :value.sync="num"></sk-icon-input>
            <sk-icon-button style="margin-left:12px"></sk-icon-button>
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
                <el-table-column prop="address" label="操作">
                    <template slot-scope="scope">
                        <sk-table-button title="房屋信息" icon="ic_housenumber2x.png"></sk-table-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="height:52px;padding-top: 8px;text-align: right;">
                <sk-page></sk-page>
            </div>
            
        </div>
    </div>
</template>
<script>

export default {
    name: 'personData',
    title:"数据中心 > 人员数据",
    data() {
        return {
            tableData: [{},{}],
            num:"",
        };
    },

    components: {

    },
    methods: {

    },
    mounted() {

    },
    created() {

    }
};
</script>
<style scoped>

</style>