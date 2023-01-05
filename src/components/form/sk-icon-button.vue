<!--
 * @Author: gq
 * @Date: 2022-12-30 23:53:03
 * @LastEditors: gq
 * @LastEditTime: 2022-12-31 09:33:44
 * @Description: icon-button按钮
-->
<template>
    <el-button type="primary" @click="$emit('click')" :icon="icon">{{ title }}</el-button>
</template>
<script>
export default {
    props: {
        title: {
            default: ""
        },
        icon: {

            default: "el-icon-search"
        },
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">
::v-deep.el-button {
    min-width: 42px;
    height: 42px;
    background: #1E1F25;
    border: 1px solid rgba(60, 66, 84, 1);
    border-radius: 6px;
    text-align: center;
    i{
        font-size: 16px;
       
    }
}
</style>