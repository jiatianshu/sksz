<!--
 * @Author: gq
 * @Date: 2022-12-30 23:53:03
 * @LastEditors: gq
 * @LastEditTime: 2023-01-07 11:13:08
 * @Description: 分页组件
-->
<template>
    <el-pagination background layout="prev, pager, next" @current-change="val=>$emit('page-change',val)"
        :current-page.sync="page" :total="total">
    </el-pagination>

</template>
<script>
export default {
    props: {
        /**
         * 数据总数
         */
        total: {
            default: 0,
        },
        pageNum: {
            default: 1
        }
    },
    computed: {
        page: {
            get() {
                return this.pageNum
            },
            set(val) {
                this.$emit('update:pageNum', val)
            }
        },
    },

    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style scoped lang="scss">
::v-deep.el-pagination {
    .el-pager {
        li {
            height: 26px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 4px;
            background-color: #1E1F25 !important;
        }

        .active {
            background: rgba(16, 142, 233, 0.20) !important;
            border: none;
        }
    }

    .btn-prev,
    .btn-next {
        height: 26px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 4px;
        background-color: #1E1F25 !important;
    }
}
</style>