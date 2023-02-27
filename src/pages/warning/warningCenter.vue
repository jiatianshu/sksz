<template>
    <div>
        <div>
            <el-select v-model="typecode" class="select" placeholder="请选择类型" @change="typeChange" clearable>
                <el-option v-for="item in typeptions" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
            </el-select>
            <sk-icon-button style="" @click="checkSearch"></sk-icon-button>
        </div>

        <div class="table-box">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" align="center" w>
                </el-table-column>


                <el-table-column prop="parkName" label="园区名">
                </el-table-column>
                <el-table-column prop="equipmentName" label="设备名" width="">
                </el-table-column>
                <el-table-column prop="type" label="类型">
                    <template slot-scope="scope">
                        <span v-show="scope.row.type == 1">黑名单</span>
                        <span v-show="scope.row.type == 2">陌生人</span>
                    </template>
                </el-table-column>
                <el-table-column prop="img" label="局部图" width="">
                    <template slot-scope="scope">
                        <img :src="scope.row.img" class="img_cl" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="panorama" label="全景图" width="">
                    <template slot-scope="scope">
                        <img :src="scope.row.panorama" class="img_cl" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="createTime" label="预警时间" width="">
                </el-table-column>
                <el-table-column prop="address" label="操作" width="">
                    <template slot-scope="scope" class="button_cl">
                        <sk-table-button @click="yzxxDialog(scope.row)" title="详细信息"
                            icon="ic_personrole2x.png"></sk-table-button>

                    </template>
                </el-table-column>
            </el-table>
            <div class="el_page_cl">
                <!-- <sk-page :total="total" :current-page='current' @page-change="pageChange"></sk-page> -->
                <el-pagination background @current-change="handleCurrentChange" :current-page.sync="current"
                    layout="prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
        <el-dialog :title="title" :append-to-body="true" :visible.sync="dialogVisible" width="38%"
            style="height: 670px;">
            <div v-for="(item,index) in hmd_List">
                <div class="flex_detail">

                    <div class="detail_div"> <span class="text_tit">预警类型:</span> <span
                            v-show="item.type == '1'">黑名单</span><span v-show="item.type == '2'">陌生人</span> </div>
                    <div class="text_cl">
                        <div class="detail_div"> <span class="text_tit">园区名称:</span> <span>{{item.parkName}}</span>
                        </div>

                        <div class="detail_div"> <span class="text_tit">预警设备:</span> <span>{{item.equipmentName}}</span>
                        </div>
                        <div class="detail_div"> <span class="text_tit">预警时间:</span> <span>{{item.createTime}}</span>
                        </div>
                        <div class="detail_div" v-show="item.type == '1'"> <span class="text_tit">姓名:</span>
                            <span>{{item.name}}</span>
                        </div>
                        <div class="detail_div"> <span class="text_tit">性别:</span> <span>{{item.gender}}</span> </div>
                        <div class="detail_div"> <span class="text_tit">年龄段:</span> <span>{{item.ageGroup}}</span>
                        </div>
                        <div class="detail_div" v-show="item.type == '1'"> <span class="text_tit">生日:</span>
                            <span>{{item.bornTime}}</span>
                        </div>
                        <div class="detail_div" v-show="item.type == '1'"> <span class="text_tit">证件类型:</span>
                            <span>{{item.certificateType}}</span>
                        </div>
                        <div class="detail_div" v-show="item.type == '1'"> <span class="text_tit">证件号码:</span>
                            <span>{{item.certificateNumber}}</span>
                        </div>
                        <div class="detail_div" v-show="item.type == '1'"> <span class="text_tit">相似度:</span>
                            <span>{{item.similarity}}</span>
                        </div>
                        <div class="detail_div"> <span class="text_tit">是否戴眼镜:</span> <span>{{item.glass}}</span> </div>
                        <div class="detail_div"> <span class="text_tit">是否戴口罩:</span> <span>{{item.mask}}</span> </div>

                    </div>
                    <div class="img_cl_box">
                        <div> <img class="img_cl_dio" :src="item.img" alt="">
                            <img class="img_cl_dio_all" :src="item.panorama" alt="">
                            
                        </div>
                        <img class="img_cl_dio_k" v-show="item.type == '1'" :src="item.minioPic" alt="">
                        
                    </div>
                </div>

            </div>

        </el-dialog>
    </div>
</template>
<script>
    import { getWarningList, getWarningInfo, getMenuList } from '@/api/yjzx'
    import chartsoptions from "@/utils/echartsOption";

    import * as echarts from "echarts";

    export default {
        name: 'warningCenter',
        title: "预警中心 > 预警中心",
        data() {
            return {
                dialogVisible: false,
                typeptions: [
                    { name: '全部', code: 0 },
                    { name: '黑名单', code: 1 },
                    { name: '陌生人', code: 2 },
                ],
                hmd_List: [],
                tableData: [],
                queryData: {
                    current: 1,
                    size: 10,
                    total: 0,
                },
                current: 1,
                size: 10,
                total: 0,
                typrblarea: '面积',
                typrblayou: '户型',
                cityoptions: [], //沈阳市
                districtptions: [], //行政区
                streeoptions: [], //街道
                parkptions: [], //小区
                houseTotal: '',
                layoutRange: '',
                codeData: '10000',
                typecode: 0,
                districcode: '',
                streecode: '',
                parkcode: '',
                title: '',


            };
        },
        methods: {

            //
            typeChange(a) {
                this.typecode = a.code
                this.getListData()

            },

            //点击搜索
            checkSearch() {
                console.log(this.citycode, "???????")
                this.current = 1
                this.getListData()
            },
            //点击详情
            yzxxDialog(e) {
                console.log(e, "aaaaaaaa00000a")

                var data = {
                    id: e.id
                }
                this.hmd_List = []
                this.dialogVisible = true
                getWarningInfo(data).then((res) => {
                    console.log(res, 'xiangqing ggggggggg')
                    if (res.code == 0) {
                        this.hmd_List.push(res.data)
                    }
                })

            },
            //获取列表接口
            getListData() {
                console.log(this.current, "yyyyy")
                var data = {
                    type: this.typecode, //类型
                    current: this.current //当前页码

                }
                getWarningList(data).then((res) => {
                    console.log(res, 'sssss00000000')
                    if (res.code == 0) {
                        this.tableData = res.data.result
                        this.total = res.data.total
                        this.current = res.data.current
                    }
                })
            },
            handleCurrentChange(num) {
                console.log(num, "mmmmmmmmmm")
                this.current = num
                this.getListData()
            },

            pageChange(val) {
                console.log(val, "val??????????")
                this.$set(this.queryData, "current", val);
                this.getListData();
            },



        },
        mounted() {
            this.getListData()

        },
        created() {

        },
    };
</script>

<style scoped lang="scss">
    .button_cl {
        display: flex;
    }

    .title_cl {
        display: flex;
        margin: 6px 0 0 0;
        color: #FFFFFF;
    }


    .left_cl {
        width: 318px;
        height: 136px;
        border-radius: 20px;
        /* background-image:url(../../assets/img/image/ic_card_police2x.png)no-repeat; */
        background-image: url('../../assets/img/datacente/ic_card_bighome2x.png');
        background-size: 100% 100%;
    }

    .num_cl {

        /* width: 83px;
        height: 43px; */
        /* font-family: SegoeUI-Bold; */
        font-size: 32px;
        color: #FFFFFF;
        text-align: center;
        font-weight: 700
    }

    .le_num {
        margin: 50px auto 0 auto;
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        height: 100%
    }

    .per_num {
        /* width: 64px;
        height: 22px; */
        /* font-family: PingFangSC-Semibold; */
        font-size: 16px;
        color: #ccc;
        text-align: center;
        font-weight: 600;
    }

    .center_cl {
        width: 400px;
        height: 140px;
        margin: 0 0 0 30px
    }

    .center_rg_cl {
        width: 460px;
        height: 140px;
        margin: 0 0 0 140px;
    }

    .center_rg_cl2 {
        width: 460px;
        height: 140px;
    }

    .mr_20 {
        margin: 0 18px;
    }

    .cen_cl {
        width: 1px;
        height: 48px;
        opacity: 0.4;
        border: 1px solid rgba(255, 255, 255, 1);
        margin: 6px 10px 0 10px;
    }

    .left_fw {
        width: 120px;
    }

    .select {
        margin-right: 16px;
    }

    .img_cl {
        width: 60px;
        height: 48px;
    }

    .table-box {
        margin: 10px 0 0 0;
    }

    .detail_div {
        height: 36px;
        line-height: 36px;
        font-size: 18px;
        width: 340px;

    }

    .flex_detail {
        color: #ccc;
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

    .img_cl_dio {
        width: 160px;
        height: 160px;
        margin: auto 10px;
    }

    .text_cl {
        display: flex;
        flex-flow: wrap;
    }

    .img_cl_dio_all {
        width: 220px;
        height: 160px;
        margin: auto 60px 0 10px;
    }
    .img_cl_dio_k{
        width: 160px;
        height: 160px;
        border: 1px solid red;

    }

    /* ::v-deep.el-pagination {
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
    } */
</style>