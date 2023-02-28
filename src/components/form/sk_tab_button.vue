<!--
 * @Author: gq
 * @Date: 2022-12-30 23:53:03
 * @LastEditors: gq
 * @LastEditTime: 2022-12-31 10:55:30
 * @Description: table-button按钮
-->
<template>
    <el-button type=""   @click="$emit('click')">
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
}
</script>
<style scoped lang="scss">

</style>