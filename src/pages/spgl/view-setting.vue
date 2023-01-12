<template>

    <div class="contant_box">
        <div class="left_tree">
            <el-tree :data="treeList" :props="defaultProps" accordion @node-click="handleNodeClick">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <i v-if="node.level == 1" class="province" />
                    <i v-else-if="node.level == 2" class="city" />
                    <i v-else-if="node.level == 3" class="stree" />
                    <i v-else-if="node.level == 4" class="three" />
                    <i v-else-if="node.level == 5" class="sex" />
                    <i v-else-if="node.level == 6" class="sex" />
                    <i v-else-if="node.level == 7" />

                    <span class="label_span"> {{ node.label }}</span>
                </span>
            </el-tree>
        </div>
        <div class="right_video">
            <div class="up_con_box">
                <div class="video_box">
                    1001
                </div>
                <div class="video_box">
                    1001
                </div>
                <div class="video_box">
                    1001
                </div>
                <div class="video_box">
                    1001
                </div>
            </div>
            <div class="down_right">
                <div class="num_flex">
                    <div class="ever_cl">
                        <img class="img_vid" src="../../assets/img/image/video_playing.png" alt="">
                        <div class="rgt_vidnum">
                            <div class="tit_vid">接入视频</div>
                            <div lass="num_sp">
                                <span class="num_vid">{{formdata.total}}</span>
                                <span class="numdw_cl">路</span>
                            </div>

                        </div>
                    </div>
                    <div class="ever_cl">
                        <img class="img_vid" src="../../assets/img/image/video_online.png" alt="">
                        <div class="rgt_vidnum">
                            <div class="tit_vid">在线数量</div>
                            <div class="num_sp">
                                <span class="num_vid">{{formdata.online}}</span>
                                <span class="numdw_cl">路</span>
                            </div>

                        </div>
                    </div>
                    <div class="ever_cl">
                        <img class="img_vid" src="../../assets/img/image/video_offlinelx.png" alt="">
                        <div class="rgt_vidnum">
                            <div class="tit_vid">离线视频</div>
                            <div lass="num_sp">
                                <span class="num_vid">{{formdata.offline}}</span>
                                <span class="numdw_cl">路</span>
                            </div>

                        </div>
                    </div>
                    <div class="ever_cl">
                        <img class="img_vid" src="../../assets/img/image/video_playing.png" alt="">
                        <div class="rgt_vidnum">
                            <div class="tit_vid">实时观看</div>
                            <div lass="num_sp">
                                <span class="num_vid">{{formdata.watching}}</span>
                                <span class="numdw_cl">路</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>
<script>

    import { getEquipmentTree, getstatiData } from '@/api/spgl'
    export default {
        name: "view-setting",
        title: "视频中心 > 视频管理",
        data() {
            return {
                treeList: [],
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                formdata: {

                },
                clickNum: '',
            };
        },
        components: {

        },
        methods: {
            getlist() {
                getEquipmentTree().then((res) => {
                    if (res.code == 0) {
                        this.treeList = res.data[0].children

                    }
                })
            },
            getNumdata() {
                getstatiData().then((res) => {
                    console.log(res, "vvvvvvv")
                    if (res.code == 0) {

                        this.formdata = res.data
                    }

                })
            },
            handleNodeClick(data) {

                console.log(data);
                var videoAyy = {}
                if (data.level == 6) {
                    videoAyy = data
                    this.clickNum++;
                    var nowNum = this.clickNum % 4;
                    console.log(videoAyy, 'videoAyyvideoAyy');
                    console.log(nowNum, 'nowNumnowNumnowNumnowNum');

                    this.getflvVideo('videoid' + nowNum, videoAyy.name);
                    // $('#show_name' + nowNum).html(videoAyy.name);
                    // if (e.url != '') {
                    //     // $('#wxhShow' + nowNum).hide();
                    //     this.getflvVideo('videoid' + nowNum, videoAyy.url);
                    // } else {
                    //     // $('#wxhShow' + nowNum).show();

                    // }
                    

                }
            },
            getflvVideo(id, name) {
                console.log(id, name, "????????????????")
            }
        },
        mounted() {
            this.getlist()
            this.getNumdata()
        },
        created() {

        }
    };
</script>
<style scoped>
    .contant_box {
        /* margin: 18px 0 0; */
    }

    .left_tree {
        background: rgba(30, 31, 37, 0.88);
        width: 370px;
        height: 886px;
        margin: 0 14px 0 0;
    }

    .right_video {
        width: 1200px;
        /* background: #1E1F25; */

    }


    .province {
        background: url('../../assets/img/icon/ic_city2x.png');
        width: 28px;
        height: 28px;
        display: inline-block;
        background-size: 100% 100%;

    }

    .city {
        background: url('../../assets/img/icon/Ic_folder2x.png');
        width: 28px;
        height: 28px;
        display: inline-block;
        background-size: 100% 100%;

    }

    .stree {
        background: url('../../assets/img/icon/Ic_folder2x.png');
        width: 28px;
        height: 28px;
        display: inline-block;
        background-size: 100% 100%;

    }

    .three {
        background: url('../../assets/img/icon/Ic_folder2x.png');
        width: 28px;
        height: 28px;
        display: inline-block;
        background-size: 100% 100%;

    }

    .four {
        background: url('../../assets/img/icon/Ic_folder2x.png');
        width: 28px;
        height: 28px;
        display: inline-block;
        background-size: 100% 100%;

    }

    .sex {
        background: url('../../assets/img/icon/ic_plaza2x.png');
        width: 28px;
        height: 28px;
        display: inline-block;
        background-size: 100% 100%;

    }

    .line {
        background: url('../../assets/img/icon/Ic_folder2x.png');
        background-size: 100%;

        width: 17px;
        height: 14px;
        display: inline-block;
    }

    .data {
        background: url('../../assets/img/icon/Ic_folder2x.png');
        background-size: 100%;

        width: 17px;
        height: 14px;
        display: inline-block;
    }

    .el-tree /deep/ .el-tree-node .el-tree-node__content {
        /* width: 200px; */
        height: 43px;
        /* background: rgb(22, 243, 96); */
        /* margin: 1px 0; */
        /* color: #007D39; */
    }

    .custom-tree-node {
        display: flex;
        margin: 0px 0 0 4px;
        /* display: inline-block; */
    }

    .label_span {
        margin: auto 0 auto 4px;
    }

    .contant_box {
        display: flex;
    }

    .up_con_box {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
    }

    .video_box {
        width: 590px;
        height: 375px;
        background: #1E1F25;
        margin: 0 0 20px 0;
        border-radius: 8px;
    }

    .down_right {
        width: 1200px;
        height: 112px;
        background: rgba(30, 31, 37, 0.88);
        border-radius: 8px;
    }

    .num_flex {
        color: #fff;
        display: flex;
        justify-content: space-around;
        margin: auto 0;
        height: 100%;
    }

    .ever_cl {
        display: flex;
        margin: auto 0;
        height: 100%
    }

    .num_vid {
        font-size: 28px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 700;
        display: inline-block;
    }

    .tit_vid {
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 600;
        display: inline-block;
    }

    .numdw_cl {
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 600;
        display: inline-block;
        margin: 0 0 0 10px;
    }

    .img_vid {
        width: 58px;
        height: 69px;
        display: inline-block;
        margin: auto
    }

    .num_sp {
        margin: 4px 0 0 0;
    }

    .rgt_vidnum {
        /* margin: auto 0 0 24px; */
        margin: auto 0 auto 24px;
    }
</style>