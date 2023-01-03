<!--
 * @Author: gq
 * @Date: 2022-12-30 23:53:03
 * @LastEditors: gq
 * @LastEditTime: 2022-12-31 09:43:03
 * @Description: icon-input输入框
-->
<template>el-pagination 二次封装el-button
    <el-input :placeholder="placeholder" :value="value" @input="$emit('update:value', $event)"
        class="input-with-select">
        <el-button slot="prepend" @click="$emit('click')" :icon="icon"></el-button>
    </el-input>

</template>
<script>
export default {
    props: {
        value: {
            default: ""
        },
        icon: {

            default: "el-icon-search"
        },
        placeholder: {
            default: "输入搜索内容…"
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">
.input-with-select {
    width: 320px;
    height: 42px;
    background: #1E1F25;
    border: 1px solid rgba(60, 66, 84, 1);
    border-radius: 6px;

    ::v-deep .el-input-group__prepend {
        background-color: #1E1F25;
        border: none;
    }

    ::v-deep .el-input__inner {
        font-size: 16px;
        line-height: 42px;
        height: 42px;
        text-align: left;
        background-color: #1E1F25;
        border: none;
        color:#fff;
        &::placeholder {
            color: #757B8C;
            font-size: 14px;
        }
    }

    ::v-deep .el-button {
        i {
            font-size: 16px;
        }
    }


}
</style>