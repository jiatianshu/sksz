<!--
 * @Author: gq
 * @Date: 2023-01-07 11:54:38
 * @LastEditors: gq
 * @LastEditTime: 2023-01-15 18:46:01
 * @Description: 地区联动组件
-->

<template>
    <div style="display:inline-block">

        <el-select v-model="form.city" class="select" :disabled="districtList.length <= 1" placeholder="请选择城市"
            @change="cityChange" clearable>
            <el-option v-for="item in districtList" :key="item.name" :label="item.name" :value="item.id">
            </el-option>
        </el-select>

        <el-select v-model="form.district" class="select" :disabled="areaOptions.length <= 1" placeholder="请选择行政区"
            @change="areaChange" clearable>
            <el-option v-for="item in areaOptions" :key="item.name" :label="item.name" :value="item.id">
            </el-option>
        </el-select>
        <el-select v-model="form.street" class="select" :disabled="streetOptions && streetOptions.length <= 1"
            placeholder="请选择街道" @change="streetChange" clearable>
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
    mounted() {
        this.initArea()
    },
    data() {
        return {
            form: {
                city: this.cityVlaue,
                cityName: "",
                district: this.areaValue,
                districtName: "",
                street: this.streetValue,
                streetName: "",
            },

            areaOptions: [],
            streetOptions: []
        }
    },
    methods: {
        initArea() {
            let city = this.districtList[0];
            let user = this.$store.getters.user;
            if (city) {
                this.form.city = city.id;
                this.form.cityName = city.name;

                if (city.children && city.children[0]) {
                    this.areaOptions = city.children;
                    if (user.userId == '1') {
                        this.$emit("change", this.form);
                        this.$emit("submit");
                        return
                    }
                    this.form.district = this.areaOptions[0].id;
                    this.form.districtName = this.areaOptions[0].name;
                    if (this.areaOptions[0].children) {
                        this.streetOptions = this.areaOptions[0].children;
                        this.form.street = this.streetOptions[0].id;
                        this.form.streetName = this.streetOptions[0].name;
                    }
                }
            }
            this.$emit("change", this.form);
            this.$emit("submit");
        },
        cityChange(value) {
            this.form.districtName = "";
            this.form.streetName = "";
            this.form.district = "";
            this.form.street = "";
            if (value) {
                let obj = this.districtList.find(item => item.id == value);
                this.areaOptions = obj.children;
                this.form.cityName = obj.name;
            } else {
                this.areaOptions = [];
                this.streetOptions = [];
                this.form.cityName = "";

            }
            this.$emit("change", this.form);
        },
        areaChange(value) {
            this.form.street = "";
            this.form.streetName = "";
            if (value) {
                let obj = this.areaOptions.find(item => item.id == value);
                this.streetOptions = obj.children;
                this.form.districtName = obj.name;
            } else {
                this.streetOptions = [];
                this.form.street = "";
                this.form.districtName = "";
                this.form.streetName = "";
            }
            this.$emit("change", this.form);
        },
        streetChange(value) {
            if (value) {
                this.form.streetName = this.streetOptions.find(item => item.id == value).name;
            } else {
                this.form.streetName = "";
            }
            this.$emit("change", this.form);
        }
    }
}
</script>
<style scoped lang="scss">
.select {
    margin-right: 16px;
}

::v-deep .el-input.is-disabled .el-input__inner {
    background: #1E1F25;
    border: 1px solid rgb(60, 66, 84);
}
</style>