<!--
 * @Author: gq
 * @Date: 2023-02-14 18:38:54
 * @LastEditors: gq
 * @LastEditTime: 2023-03-02 20:03:30
 * @Description: file content
-->

<template>

    <div class="boxx" v-if="type">

        <div class="bg_ing" v-show="imgBg_show">
            <div class="fontstyle">
                <audio id="audioId" class="audio" src="../../assets/video/bjy.mp3" muted controls hidden="true"></audio>
            </div>
        </div>
        <div class="cardType_hmd" v-show="hmd_show" v-for="(item,index) in hmd_List">
            <div class="close_div" @click="closeClick">X</div>
            <div class="flex_detail">
                <div class="detail_div"> <span class="text_tit">预警类型:</span> <span>黑名单</span> </div>
                <div class="text_cl">
                    <div class="detail_div"> <span class="text_tit">园区名称:</span> <span>{{item.parkName}}</span> </div>

                    <div class="detail_div"> <span class="text_tit">预警设备:</span> <span>{{item.equipmentName}}</span>
                    </div>
                    <div class="detail_div"> <span class="text_tit">预警时间:</span> <span>{{item.warningTime}}</span>
                    </div>
                    <div class="detail_div"> <span class="text_tit">姓名:</span> <span>{{item.name}}</span> </div>
                    <div class="detail_div"> <span class="text_tit">性别:</span> <span>{{item.gender}}</span> </div>
                    <div class="detail_div"> <span class="text_tit">年龄段:</span> <span>{{item.ageGroup}}</span> </div>
                    <div class="detail_div"> <span class="text_tit">生日:</span> <span>{{item.bornTime}}</span> </div>
                    <div class="detail_div"> <span class="text_tit">证件类型:</span> <span>{{item.certificateType}}</span>
                    </div>
                    <div class="detail_div"> <span class="text_tit">证件号码:</span> <span>{{item.certificateNumber}}</span>
                    </div>
                    <div class="detail_div"> <span class="text_tit">相似度:</span> <span>{{item.similarity}}</span> </div>
                    <div class="detail_div"> <span class="text_tit">是否戴眼镜:</span> <span>{{item.glass}}</span> </div>
                    <div class="detail_div"> <span class="text_tit">是否戴口罩:</span> <span>{{item.mask}}</span> </div>

                </div>
                <div class="img_cl_box">
                    <div class="left_img"> <img class="img_cl" :src="item.img" alt="">
                        <img class="img_cl_big" :src="item.panorama" alt="">

                    </div>

                    <img class="img_cl_right" :src="item.minioPic" alt="">
                </div>
            </div>
        </div>

        <div class="cardType_msr" v-show="msr_show" v-for="(item,index) in msr_List">
            <div class="close_div" @click="closemsrClick">X</div>
            <div class="flex_detail">
                <div class="detail_div"> <span class="text_tit">预警类型:</span> <span>陌生人</span> </div>
                <div class="text_cl">
                    <div class="detail_div"> <span class="text_tit">园区名称:</span> <span>{{item.parkName}}</span> </div>

                    <div class="detail_div"> <span class="text_tit">预警设备:</span> <span>{{item.equipmentName}}</span>
                    </div>
                    <div class="detail_div"> <span class="text_tit">预警时间:</span> <span>{{item.warningTime}}</span>
                    </div>
                    <div class="detail_div"> <span class="text_tit">性别:</span> <span>{{item.gender}}</span> </div>
                    <div class="detail_div"> <span class="text_tit">年龄段:</span> <span>{{item.ageGroup}}</span> </div>
                    <div class="detail_div"> <span class="text_tit">是否戴眼镜:</span> <span>{{item.parkName}}</span> </div>
                    <div class="detail_div"> <span class="text_tit">是否戴口罩:</span> <span>{{item.parkName}}</span> </div>

                </div>
                <div class="img_cl_box">
                    <img class="img_cl" :src="item.img" alt="">
                    <img class="img_cl" :src="item.panorama" alt="">
                </div>
            </div>
        </div>
        <el-dialog title="局部图片" :visible.sync="dialogVisibleImg" :append-to-body="true" width="">
            <div class="img_dialog_open"> <img class="openimg_cls" :src="img_open" alt=""></div>

        </el-dialog>
        <el-dialog title="全景图" :visible.sync="dialogVisibleImgAll" :append-to-body="true" width="">
            <div class="img_dialog_open"> <img class="openimg_cls" :src="img_openAll" alt=""></div>

        </el-dialog>
    </div>

</template>
<script>
    import bus from '../common/bus';
    import { mapGetters } from "vuex";
    export default {
        name: 'warningCenterdio',
        title: "预警中心 > 预警中心",
        data() {
            return {
                eventSourceAll: '10000',
                dialogVisibleImg: false,
                img_open: '',
                dialogVisibleImgAll: false,
                img_openAll: '',
                type: false,
                imgBg_show: false,
                hmd_show: false,
                msr_show: false,
                sse_userId: '',
                sse_roleId: '',
                hmd_List: [],
                msr_List: [],
            };
        },
        // computed: {
        //     ...mapGetters(['userid'])
        // },
        computed: {
            // userid() {

            //     console.log(this.$store.getters.userid, "this.$store.getters.userddddd")
            //     return sessionStorage.getItem("userid")
            // },

        },
        methods: {
            imgData(e) {
                //点击头像
                this.dialogVisibleImg = true
                this.img_open = e.img
            },
            imgDataminio(e) {
                //点击头像
                this.dialogVisibleImg = true
                this.img_open = e.minioPic
            },
            imgDatahmd(e) {
                //点击头像
                this.dialogVisibleImgAll = true
                this.img_openAll = e.panorama
            },
            show() {
                this.type = true;
                this.eventData()
            },
            hide() {
                this.type = false;
            },
            changeon() {
                let iAudio = document.querySelector("#audioId");
                iAudio.play();//让音频文件开始播放 
            },
            closeClick() {
                this.hmd_show = false
                this.$fullLoginAd().hide()
            },
            closemsrClick() {
                this.msr_show = false
                this.$fullLoginAd().hide()
            },
            eventData() {

                console.log(this.eventSourceAll, 'this.eventSourceAllthis.eventSourceAll000000')
                this.sse_userId = sessionStorage.getItem("userid")
                this.sse_roleId = sessionStorage.getItem("rolesid")
                var serverUrl = process.env.VUE_APP_SERVER_URL
                // var eventSource = new EventSource(serverUrl + "/sseservice/ssePush/connect/" + this.sse_userId + "/" + this.sse_roleId);
                this.eventSourceAll = new EventSource(serverUrl + "/sseservice/ssePush/connect/" + this.sse_userId + "/" + this.sse_roleId);
                bus.$emit('sendBybus', this.eventSourceAll);
                // this.$nextTick(() => {
                //     // 在此处执行你要执行的函数
                //     bus.$emit('sendBybus'.this.eventSourceAll)
                // });

                var that = this
                this.eventSourceAll.addEventListener("message", function (evt) {
                    var data = evt.data;
                    var json = JSON.parse(data);
                    if (json[0].type == 1) {   //黑名单
                        that.$fullLoginAd().show()
                        that.imgBg_show = true
                        setTimeout(function () {
                            that.changeon()
                        }, 80)
                        setTimeout(function () {
                            that.imgBg_show = false
                            that.msr_show = false
                            that.hmd_show = true
                            that.hmd_List = json
                        }, 4000)


                    } else if (json[0].type == 2) {
                        that.$fullLoginAd().show()
                        that.imgBg_show = true

                        setTimeout(function () {
                            that.changeon()
                        }, 80)
                        setTimeout(function () {
                            that.imgBg_show = false
                            that.hmd_show = false
                            that.msr_show = true
                            that.msr_List = json
                        }, 4000)

                    }
                    console.log(json, "jsonjsonjson")
                    // if (json[0].type == 1) {
                    //     setTimeout(function () {     //黑名单
                    //         vm.check_bj_lx_show = true
                    //         vm.changeon()
                    //     }, 80)
                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = false
                    //         vm.check_blackLish_lx_show = true
                    //         vm.flyImg_bk = true
                    //         vm.inform_blackList_lx = json
                    //     }, 4000)
                    // }

                    // if (json[0].type == 2) {       //火焰
                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = true
                    //         vm.changeon()
                    //     }, 80)

                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = false
                    //         vm.check_flameLish_lx_show = true
                    //         vm.flyImg_fl = true
                    //         vm.fla_blackList_lx = json
                    //     }, 4000)
                    // }
                    // if (json[0].type == 3) { //人群聚集
                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = true
                    //         vm.changeon()
                    //     }, 80)

                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = false
                    //         vm.check_cro_lx_show = true
                    //         vm.flyImg_cro = true
                    //         vm.cro_blackList_lx = json
                    //     }, 4000)
                    // }

                    // if (json[0].type == 4) {  //消防通道占用
                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = true
                    //         vm.changeon()
                    //     }, 80)

                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = false
                    //         vm.check_access_lx_show = true
                    //         vm.flyImg_acce = true
                    //         vm.acess_blackList_lx = json
                    //     }, 4000)
                    // }
                    // if (json[0].type == 5) {  //

                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = true
                    //         vm.changeon()
                    //     }, 80)

                    //     setTimeout(function () {
                    //         vm.codelist = []
                    //         vm.check_bj_lx_show = false
                    //         vm.check_emergency_yjqz = true
                    //         vm.inform_emergency_List = json

                    //     }, 4000)
                    // }
                    // if (json[0].type == 6) {  //人员预警

                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = true

                    //         vm.changeon()
                    //     }, 80)

                    //     setTimeout(function () {
                    //         vm.codelist = []
                    //         vm.check_bj_lx_show = false
                    //         vm.check_emergency_xqry = true
                    //         vm.flyImg_acper = true
                    //         vm.inform_xqper_List = json

                    //     }, 4000)
                    // }



                    //insertFn(json.payload.timestamp)


                    // insertFn(timestamp)
                });
                this.eventSourceAll.addEventListener('error', function (ev) {
                    console.log('sse server disconnected')
                })

            }
        },
        mounted() {
            this.$nextTick(() => {
                // 在此处执行你要执行的函数
                this.eventData()
            });
        },
        watch: {

        },
        created() {
            console.log('zoumeizou走没走啊')

            this.sse_userId = sessionStorage.getItem("userid")
            this.sse_roleId = sessionStorage.getItem("rolesid")
        }
    };
</script>
<style scoped lang="scss">
    .boxx {
        width: 460px;
        height: 400px;
        position: fixed;
        /* background-color: rgb(22, 24, 57); */
        border-radius: 10px;
        color: #fff;
        z-index: 999999;
        top: 30%;
        left: 42%;
    }

    .bg_ing {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 20px;
        left: 50%;
        top: 42%;
        transform: translate(-50%, -35%);
        z-index: 999;
        background-image: url(../../assets/img/jg.gif);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        /* background-color: #000000e6; */
        font-size: 0.8vw;
    }

    .cardType_hmd {
        width: 740px;
        /* height: 500px; */
        /* background-image: url(../../assets//img/jg_dialog.png); */
        /* background-color: #1E1F25; */
        background-color: #111112;
        opacity: 0.9;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: fixed;
        left: 32%;
        top: 26%;
        /* color: #000; */
        padding: 20px 20px;
    }

    .cardType_msr {
        width: 740px;
        /* height: 500px; */
        /* background-image: url(../../assets//img/jg_dialog.png); */
        background-color: #111112;
        /* background-color: #1E1F25; */
        opacity: 0.8;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: fixed;
        left: 32%;
        top: 26%;
        /* color: #000; */
        padding: 20px 20px;
    }

    .detail_div {
        height: 36px;
        line-height: 36px;
        font-size: 18px;
        width: 340px;

    }

    .close_div {
        float: right;
        cursor: pointer;
    }

    .flex_detail {
        /* display: flex; */
        /* height: 100%; */
    }

    .img_cl {
        width: 160px;
        height: 160px;
        margin: auto 10px;
        /* object-fit: contain */
    }

    .text_cl {
        display: flex;
        flex-flow: wrap;
    }

    .text_tit {
        display: inline-block;
        width: 100px;
        text-align: right;
        margin: 0 16px 0 0;
    }

    .img_cl_box {
        margin: 20px 0;
        display: flex;
    }

    .left_img {
        margin: 0 40px 0 0;
    }

    .img_cl_big {
        /* width: 180px; */
        height: 160px;
        margin: auto 10px;
        object-fit: contain;
    }

    .img_cl_right {
        /* width: 180px; */
        height: 160px;
        margin: auto 10px;
        object-fit: contain;
    }

    .openimg_cls {
        display: inline-block;
        margin: auto;
        width: 100%;
        height: 100%;
        object-fit: contain
    }

    .img_dialog_open {
        width: 100%;
        height: 100%;
    }
</style>