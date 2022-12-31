<!--
 * @Author: gq
 * @Date: 2022-12-30 23:53:03
 * @LastEditors: gq
 * @LastEditTime: 2022-12-31 10:55:30
 * @Description: table-button按钮
-->
<template>
    <el-button type="primary">
        <img :src="src" alt="">
        {{ title }}</el-button>
</template>
<script>

export default {
    props: {
        title: {
            default: ""
        },
        icon: {
            typeof:String
        },
    },
    computed: {
        src() {
            return this.icon ? require("../../assets/img/icon/" + this.icon) : null;
        }
    },
    data() {

        return {

        }
    },
    mounted() {
        console.log(this.src,"url")
    }
}
</script>
<style scoped lang="scss">
::v-deep.el-button {
    min-width: 42px;
    height: 36px;
    
    background: rgba(36, 130, 253, 0.20);
    font-size: 14px;
    color: #2482FD;
    letter-spacing: 0.56px;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    img{
        width: 18px;
        height: 18px;
        vertical-align: sub;
    }
 
}
</style>