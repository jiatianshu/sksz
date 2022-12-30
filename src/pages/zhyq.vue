<template>
    <div>
        <div>
            <el-select v-model="citycode" class="select" placeholder="请选择城市">
                <!-- <el-select :popper-append-to-body="false" v-model="citycode" class="select" placeholder="请选择"> -->
                <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="qucode" class="select" placeholder="请选择行政区">
                <!-- <el-select :popper-append-to-body="false" v-model="citycode" class="select" placeholder="请选择"> -->
                <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="qucode" class="select" placeholder="请选择街道">
                <!-- <el-select :popper-append-to-body="false" v-model="citycode" class="select" placeholder="请选择"> -->
                <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <skIconInput></skIconInput>
        </div>
        <!-- <div class="contant_class">
            <div class="lf_cont">
                <div class="xzq_cl">行政区</div>
                <div class="tit_box">
                    <div class="tit_img">
                        <div class="lf_box_tit">
                            <img class="lf_img" src="../assets/img/pic/pic01.jpg" alt="" srcset="">
                            <div class="add_cl">中街</div>
                        </div>
                        <div class="rgt_imgbox">
                            <img class="rht_img" src="../assets/img/pic/pic02.jpg" alt="" srcset="">
                            <img class="rht_img" src="../assets/img/pic/pic02.jpg" alt="" srcset="">
                            <img class="rht_img" src="../assets/img/pic/pic02.jpg" alt="" srcset="">
                            <img class="rht_img" src="../assets/img/pic/pic02.jpg" alt="" srcset="">
                        </div>
                    </div>
                    <div class="tit_rght">
                        <div class="new_add">当前位置</div>
                        <div class="address"><span>沈阳市-大东区</span></div>
                        <div class="num_cl">
                            <div class="bg_cla_zq">
                                <div class="text_cl">96</div>
                                <div class="name_cl">安防小区</div>
                            </div>
                            <div class="bg_cla_pc">
                                <div class="text_cl">96</div>
                                <div class="name_cl">派出所</div>
                            </div>
                            <div class="bg_cla_jy">
                                <div class="text_cl">466</div>
                                <div class="name_cl">警员</div>
                            </div>

                        </div>

                    </div>

                </div>



            </div>



            <div class="rgt_cont">

                7878787
            </div>

        </div> -->

        
    </div>



</template>
<script>
    import { postMonths } from "@/api/zhyq";
    export default {
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
            this.getsysdistrictmenu()

        },
        methods: {
            getsysdistrictmenu() {
                var data = {
                    name: "经济技术开发区", //名称
                    parentId: 10001, //父级ID
                    level: 3, //级别
                    sort: 15 //排序

                }

                postMonths(data).then((res) => {
                    console.log(res, "ssss")

                })

            }


        }
    }
</script>
<style scoped>
    .contant_class {
        display: flex;
        margin: 2vh 0 0 0;
    }

    .tit_box {
        display: flex;
        width: 100%;
    }

    .lf_box_tit {
        width: 80%;
    }

    .new_add {
        color: #fff;
        margin: 2vh 0 0 0vh;
        font-size: 2.4vh;
    }

    .tit_rght {
        margin: 0 0 0 4vh;
        color: #fff;
        width: 50%;
    }

    .bg_cla_zq {
        text-align: center;
        width: 16vh;
        height: 16vh;
        background-image: url('../assets/img/image/ic_card_police.png');
        background-size: 100% 100%;
    }

    .name_cl {
        font-size: 1.8vh;
    }

    .bg_cla_pc {
        text-align: center;
        width: 16vh;
        height: 16vh;
        background-image: url('../assets/img/image/ic_card_policestation.png');
        background-size: 100% 100%;
    }

    .bg_cla_jy {
        text-align: center;
        width: 16vh;
        height: 16vh;
        background-image: url('../assets/img/image/ic_card_security area.png');
        background-size: 100% 100%;
    }

    .address {
        font-size: 2.6vh;
        margin: 1vh 0 2vh 0;
    }

    .num_cl {
        margin: 4vh 0 0 0;
        display: flex;
        width: 100%;
        justify-content: space-around;
    }

    .text_cl {
        margin: 29% auto 0 0;
        font-size: 5vh;
    }

    .add_cl {
        background: #1e1f258a;
        position: relative;
        color: #fff;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        bottom: 4.4vh;
        line-height: 4vh;
        height: 4vh;
        padding: 0 0 0 2vh;
        font-size: 1.8vh;
    }

    .xzq_cl {
        color: #fff;
        margin: 0 0 1vh 0;
    }

    .lf_cont {
        width: 70%;
    }

    .lf_img {
        width: 100%;
        border-radius: 8px;
    }

    .rht_img {
        width: 10vh;
        margin: 0 0 1vh 1vh;
        border-radius: 8px;
    }

    .tit_img {
        display: flex;
        width: 45%;
    }

    .rgt_imgbox {
        display: flex;
        flex-direction: column;
        width: 18%;
    }


    div /deep/ .el-input__inner {
        padding: 0;
        background: none;
        color: #fff;
        border: none;
        font-size: 1.8vh;
        text-align: center;
        /* height: 4vh; */
        /* margin: auto; */
    }

    div /deep/.el-icon-arrow-up:before {
        content: '\e78f';
    }

    div .select {
        background: #1E1F25;
        border-radius: 8px;
        width: 16vh;
        text-align: center;
        padding: 10rpx;
        /* height: 4vh; */
        line-height: 4vh;
        z-index: 3001 !important;
        margin: 0 2vh 0 0;
        /* margin: auto; */
        /* width: 88px;
  position: absolute;
  top: -10px;
  left: 0px; */
    }

    div .el-popper .popper__arrow::after {
        border-bottom-color: #1E1F25 !important;
    }

    div /deep/ .el-select-dropdown__item.hover,
    .el-select-dropdown__item:hover {
        background-color: #141618 !important;
        color: #fff;

    }

    div /deep/ .el-select-dropdown {
        border-bottom-color: #1E1F25 !important;
        z-index: 88888 !important
    }

    /* //修改的是下拉框选项内容上方的尖角 */
    div /deep/ .el-popper .popper__arrow,
    .el-popper .popper__arrow::after {
        background-color: #141618 !important;
    }

    div /deep/ .el-popper .popper__arrow::after {
        background-color: #141618 !important;

    }

    /* //el-input聚焦的时候 外层的border会有一个样式 */
    div /deep/ .el-select .el-input.is-focus .el-input__inner {
        border: 0px;
    }

    /* //修改的是el-input上下的小图标的颜色 */
    div /deep/ .el-select .el-input .el-select__caret {
        color: #fff;
    }

    /* //修改总体选项的样式 最外层 */
    div /deep/ .el-select-dropdown {
        background-color: #08164d;
        margin: 0px;
        border: 0px;
        border-radius: 0px;
    }

    /* //修改单个的选项的样式 */
    div /deep/ .el-select-dropdown__item {
        background-color: transparent;
        color: #fff;
    }

    /* //item选项的hover样式 */
    div /deep/ .el-select-dropdown__item.hover,
    div /deep/ .el-select-dropdown__item:hover {
        color: #409eff;
    }

    /* 在这里找到层级关系即可修改了 */
    div /deep/ .el-select-dropdown .el-scrollbar .el-select-dropdown__wrap .el-scrollbar__view .el-select-dropdown__item:hover {
        background-color: #baf;
    }
</style>