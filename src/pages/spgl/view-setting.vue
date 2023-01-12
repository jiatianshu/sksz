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
            <div>
                <div class="up_con_box">
                    <div class="video_box" v-for="(item,index) in videoList">
                        <div class="video_cla" :id="'nameId'+(item,index)"> {{item.name}}{{item.id}}</div>
                        <video id="videoid1" class="" controls preload="auto" poster="" data-setup="{}" autoplay="autoplay" style="width: 100%;height: 90%;">
                            <source :src="item.name" type="rtmp/flv" style="width:100%" />
                        </video>
                    </div>
                </div>
                <!-- <div class="up_con_box" >
                    <div class="video_box" v-show="videoList.length==1">
                        暂无数据1
                    </div>
                    <div class="video_box" v-show="videoList.length==2">
                        暂无数据2
                    </div>
                    <div class="video_box" v-show="videoList.length==3">
                        暂无数据3
                    </div>
                    <div class="video_box" v-if="videoList.length<3">
                        暂无数据4
                    </div>
                </div> -->
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
                dataList: [],
                videoList: [
                    { name: '暂无数据1', value: '00000' },
                    { name: '暂无数据2', value: '1111' },
                    { name: '暂无数据3', value: '2222' },
                    { name: '暂无数据4', value: '3333' },
                ],
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                formdata: {

                },
                clickNum: -1,
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

                    this.dataList.splice(nowNum, 1, videoAyy)
                    console.log(this.dataList, '111111111111111111');

                    this.videoList.splice(nowNum, 1, videoAyy)
                    this.getflvVideo('videoid' + nowNum, videoAyy.name);


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
        overflow-y: auto;
        
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
        color: #fff;
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
    /* 1,滚动条 */
    ::-webkit-scrollbar {
      width: 2px;          /* 纵向滚动条 宽度 */
      background: rgb(15, 5, 6);   /* 整体背景 */
      border-radius: 10px;  /* 整体 圆角 */
    }
</style>