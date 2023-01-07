<!--
 * @Author: gq
 * @Date: 2023-01-07 11:54:38
 * @LastEditors: gq
 * @LastEditTime: 2023-01-07 12:44:36
 * @Description: 地区联动组件
-->

<template>
    <div style="display:inline-block">
        <el-select v-model="form.cityVlaueTem" class="select" placeholder="请选择城市" @change="cityChange" clearable>
            <el-option v-for="item in districtList" :key="item.name" :label="item.name" :value="item.id">
            </el-option>
        </el-select>
        <el-select v-model="form.areaValueTem" class="select" placeholder="请选择行政区" @change="areaChange" clearable>
            <el-option v-for="item in areaOptions" :key="item.name" :label="item.name" :value="item.id">
            </el-option>
        </el-select>
        <el-select v-model="form.streetValueTem" class="select" placeholder="请选择街道" @change="streetChange" clearable>
            <el-option v-for="item in streetOptions" :key="item.name" :label="item.name" :value="item.id">
            </el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    props: {
        cityVlaue: {
            typeof: String,
            default: ""
        },
        areaValue: {
            typeof: String
        },
        streetValue: {
            typeof: String
        },
    },
    computed: {
        districtList() {

            return this.$store.getters.districtList;
        }
    },
    data() {
        return {
            form: {
                cityVlaueTem: this.cityVlaue,
                areaValueTem: this.areaValue,
                streetValueTem: this.streetValue,
            },

            areaOptions: [],
            streetOptions: []
        }
    },
    methods: {
        cityChange(value) {
            if (value) {
                this.areaOptions = this.districtList.find(item => item.id == value).children;
            } else {
                this.areaOptions = [];
                this.streetOptions = [];
                this.form.areaValueTem="";
                this.form.streetValueTem="";
            }

            this.$emit("change", this.form);
        },
        areaChange(value) {
            if(value){
               this.streetOptions = this.areaOptions.find(item => item.id == value).children; 
            }else{
                this.streetOptions = [];
                this.form.streetValueTem="";
            }
            this.$emit("change", this.form);
        },
        streetChange() {
            this.$emit("change", this.form);
        }
    }
}
</script>
<style scoped lang="scss">
.select {
    margin-right: 16px;
}
</style>