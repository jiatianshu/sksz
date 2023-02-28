<!--
 * @Author: gq
 * @Date: 2022-12-30 23:53:03
 * @LastEditors: gq
 * @LastEditTime: 2022-12-31 10:55:30
 * @Description: table-button按钮
-->
<template>
    <el-dialog :title="title" :append-to-body="true" :visible.sync="dialogVisible" width="55%">
        <div class="all_dialog">
            <img :src="src" alt="">

        </div>

    </el-dialog>
    <!-- <el-button type="" @click="$emit('click')">
        <img :src="src" alt="">
        {{ title }}</el-button> -->
</template>
<script>

    export default {
        props: {
            title: {
                default: ""
            },
            src: {
                default: ""
            },
            icon: {
                typeof: String
            },
            dialogVisible: {
                typeof: String
            },
        },
        computed: {
            src() {
                // return this.icon ? require("../../assets/img/icon/" + this.icon) : null;
            }
        },
        data() {

            return {

            }
        },
    }
</script>
<style scoped lang="scss">
    ::v-deep.el-button {
        min-width: 42px;
        height: 36px;

        background: rgba(36, 130, 253, 0.0);
        font-size: 14px;
        color: #757B8C;
        letter-spacing: 0.56px;
        font-weight: 600;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        border: none;


    }

    img {
        width: 18px;
        height: 18px;
        vertical-align: sub;
    }
</style>