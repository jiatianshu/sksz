<!--
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-05 21:27:35
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
        <div class="park-content-box">
            <div class="content">
                <h4 class="title-h4">行政区划</h4>
                <div class="content-div-box">
                    <pictureBox />
                    <currentPosition />
                </div>
                <h4 class="title-h4">一标三实</h4>
                <div class="content-div-box" style="justify-content: space-around;">
                    <statCard title="标准地址" num="2.424" v-for="item in '1234'" />
                </div>
                <h4 class="title-h4">群防群治</h4>
                <div class="content-div-box">
                    <ul class="occupation-box">
                        <li>
                            <div class="occupation-img-box" :style="{ background: 'red' }">
                                <img src="@/assets/img/image/ic_volunteer@2x.png" alt="">
                            </div>
                            <span style="font-size:16px;margin-left:12px">职业</span>
                            <span>数字</span>
                            <span>12%</span>
                        </li>

                    </ul>
                    <div class="echart-box">

                    </div>
                </div>

            </div>
            <div class="community-table-box" style="border-radius:20px">
                <sk-icon-input></sk-icon-input>
            </div>
        </div>
    </div>
</template>
<script>
import pictureBox from '_c/park/pictureBox.vue';
import currentPosition from '_c/park/currentPosition.vue';
import statCard from "_c/park/statCard.vue";
export default {
    components: {
        pictureBox,
        currentPosition,
        statCard
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
.community-table-box {
    width: 500px;
    background: #1E1F25;
    padding: 24px 20px;
    ::v-deep .input-with-select{
        width: 100%;
    }
}

.occupation-box {
    li {
        height: 40px;
        color: #fff;

        span {
            margin-right: 14px;
            font-size: 20px;
            font-weight: 600;
            line-height: 32px;
        }
    }

    .occupation-img-box {
        height: 40px;
        widows: 40px;
        display: inline-block;
        border-radius: 10px;

        img {
            height: 40px;
            widows: 40px;
            vertical-align: middle;
        }
    }
}

.title-h4 {
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 600;
    margin: 12px 0;
}

.park-content-box {
    margin-top: 12px;
    display: flex;

    .content {
        // padding-right: 60px;

        .content-div-box {
            margin-bottom: 12px;
            display: flex;
        }
    }
}

.select {
    margin-right: 16px;
}

.echart-box {
    width: 230px;
    height: 230px;
}
</style>