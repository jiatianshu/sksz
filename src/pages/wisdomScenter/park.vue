<!--
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-03 20:32:30
 * @Description: 智慧园区
-->
<template>
    <div>
        <div>
            <el-select v-model="citycode" class="select" placeholder="请选择城市">
                <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="qucode" class="select" placeholder="请选择行政区">
                <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="qucode" class="select" placeholder="请选择街道">
                <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <skIconButton></skIconButton>
        </div>
        <div class="content-box">
            <div class="content">
                <h4 class="title-h4">行政区划</h4>
                <div class="content-div-box" >
                    <pictureBox />
                    <currentPosition/>
                </div>
                <h4 class="title-h4">一标三实</h4>
                <div class="content-div-box">
                   

                </div>
                <h4 class="title-h4">群防群治</h4>
                <div class="content-div-box">


                </div>

            </div>
            <div class="table-box">
            </div>
        </div>
    </div>
</template>
<script>
import pictureBox from '_c/park/pictureBox.vue';
import currentPosition from '_c/park/currentPosition.vue';
export default {
    components:{
        pictureBox,
        currentPosition
    },
    data() {
        return {
            cityoptions: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            citycode: '',
            qucode: '',
            streecode: '',

        }


    },
    created() {

    },
    mounted() {


    },
    methods: {



    }
}
</script>
<style scoped lang="scss">
.title-h4 {
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 600;
    margin:12px 0;
}

.content-box {
    margin-top: 12px;
    display: flex;
    // .table-box {
    //     width: 540px;
    // }
    .content{
        padding-right: 60px;
        .content-div-box{
            margin-bottom: 12px;
            display: flex;
        }
    }
}

.select {
    margin-right: 16px;
}
</style>