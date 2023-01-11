<!--
 * @Author: gq
 * @Date: 2023-01-09 19:14:53
 * @LastEditors: gq
 * @LastEditTime: 2023-01-11 19:51:21
 * @Description: 智慧园区详情页
-->
<template>
    <div>
        <div class="card-box">
            <houseCard />
            <policeCard />
        </div>
        <div class="statistics-box">
            <statCard :title="item.title" :num="item.num" size="mini" :src="item.src" v-for="item in statiList"
                :key="item.title" />
        </div>
        <div class="img-video-box">
            <div class="img-box">
                <ul class="img-box-ul">
                    <li class="title-box">
                        <img src="@/assets/img/image/xxxdddxx.png" alt="">
                        <p>人员监控</p>
                    </li>
                    <li class="img-item" v-for="item in personList" :key="item.img">
                        <img :src="item.img" alt="">
                        <p>{{ item.createTime }}</p>
                    </li>
                </ul>
                <ul class="img-box-ul">
                    <li class="title-box">
                        <img src="@/assets/img/image/ic_monitor_car@2x.png" alt="">
                        <p>车辆监控</p>
                    </li>
                    <li class="img-item" v-for="item in carList" :key="item.img">
                        <img :src="item.img" alt="">
                        <p>{{ item.createTime }}</p>
                    </li>
                </ul>
                <ul class="img-box-ul">
                    <li class="title-box">
                        <img src="@/assets/img/image/ic_monitor_Key@2x.png" alt="">
                        <p>周界监控</p>
                    </li>
                    <li class="img-item">
                        <img src="@/assets/img/image/ic_card_police2x.png" alt="">
                        <p>2022-09-12 12:04:24</p>
                    </li>
                </ul>
            </div>

            <div class="video-box">
                <div class="num-box">
                    <div class="num-title">
                        无感出入
                    </div>
                    <div class="num-content">
                        <div class="num-item">
                            <div>
                                <img src="@/assets/img/image/nosense_person.png" alt="">
                                <p>人员</p>
                            </div>
                            <span>8000</span>
                        </div>
                        <div class="num-item">
                            <div>
                                <img src="@/assets/img/image/nosense_car.png" alt="">
                                <p>车辆</p>
                            </div>
                            <span>8000</span>
                        </div>
                    </div>

                </div>
                <div class="video-div">
                    <div>视频监控</div>
                    <img src="@/assets/img/image/Iconly_Bulk_Play.png" alt="">
                    <div>查看</div>
                </div>
                <div class="ganzhi-box">
                    <p>全域感知</p>
                    <div >
                        <img src="@/assets/img/image/button_pressed.png" alt="">
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
import houseCard from '_c/park/houseCard.vue';
import policeCard from '_c/park/policeCard.vue';
import statCard from '_c/park/statCard.vue';
import {getParkInfo,getParkAbilityPreview} from '@/api/wisdomScenter'
export default {
    name: "wisdomScenter-park-detail",
    title: "智慧中心 > 智慧园区 > 沈阳市",
    backType:true,
    components: {
        policeCard,
        houseCard,
        statCard
    },
    
    data() {
        return {
            statiList: [{
                title: "标准地址",
                num: 0,
                src: "ic_location@2x.png"
            }, {
                title: "实有房屋",
                num: 0,
                src: "ic_house@2x.png"
            }, {
                title: "实有人口",
                num: 0,
                src: "ic_person@2x.png"
            }, {
                title: "实有单位",
                num: 0,
                src: "ic_corporation@2x.png"
            }, {
                title: "智能监控",
                num: 0,
                src: "ic_monitor@2x.png"
            }, {
                title: "人脸识别",
                num: 0,
                src: "ic_face@2x.png"
            }, {
                title: "车辆识别",
                num: 0,
                src: "ic_car@2x.png"
            }, {
                title: "周界监控",
                num: 0,
                src: "ic_surround@2x.png"
            }
            ],
            parkId:this.$route.query.id,
            detailData:{},
            personList:[],
            carList:[],

        }
    },
    methods:{
        getData(){
            getParkInfo({parkid:this.parkId}).then(res=>{
                this.detailData=res.data;
            })
        },
        getParkAbilityPreview(){
            getParkAbilityPreview({parkid:this.parkId}).then(res=>{
                this.personList=res.data.faceCaptureList;
                this.carList=res.data.carCaptureList;
            })
        }
    },
    mounted(){
        this.getData();
        this.getParkAbilityPreview();
    }
}
</script>

<style scoped lang='scss'>
.card-box {
    display: flex;
    justify-content: space-between;
}

.statistics-box {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
}

.img-video-box {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;

    .img-box {
        width: 1200px;

        .img-box-ul {
            margin-bottom: 12px;
            padding: 12px 0;
            width: 100%;
            height: 166px;
            border-radius: 20px;
            background-color: #1E1F25;
            opacity: 0.88;
            display: flex;
            list-style: none;

            // justify-content: space-around;
            li {
                margin: 0 24px;
                width: 120px;
            }

            .title-box {

                font-size: 20px;
                color: #FFFFFF;
                letter-spacing: 0;
                font-weight: 600;
                text-align: center;
                padding-top: 20px;
                line-height: 34px;

                img {
                    width: 48px;
                    height: 48px;
                }

            }

            .img-item {
                text-align: center;

                img {
                    width: 120px;
                    height: 120px;
                }

                p {
                    font-size: 12px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    font-weight: 600;
                }
            }
        }
    }

    .video-box {
        width: 392px;

        .num-box {
            height: 200px;
            opacity: 0.88;
            background: #1E1F25;
            padding: 20px 24px;
            border-radius: 20px;

            .num-title {
                font-size: 20px;
                color: #FFFFFF;
                letter-spacing: 0;
                font-weight: 600;
            }

            .num-content {
                display: flex;
                justify-content: space-between;
                border-top: 1px solid rgba(40, 44, 56, 1);
                margin-top: 16px;
                padding-top: 26px;

                .num-item {
                    font-size: 16px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    font-weight: 600;
                    text-align: center;
                    display: flex;

                    img {
                        width: 48px;
                        height: 57px;
                    }

                    span {
                        font-size: 28px;
                        display: inline-block;
                        margin-left: 24px;
                        padding-top: 24px;

                    }
                }
            }
        }

        .video-div {
            height: 90px;

            margin: 16px 0;
            display: flex;
            justify-content: space-around;
            background: url("../../assets/img/pic/pic07.jpg") no-repeat 100% 100%;
            background-size: 100% 100%;
            padding-top: 30px;
            font-size: 20px;
            border-radius: 14px;
            color: #FFFFFF;

            img {
                width: 36px;
                height: 36px;
            }
        }

    }

    .ganzhi-box {
        background: url("../../assets/img/pic/pic07.jpg") no-repeat 100% 100%;
        background-size: 100% 100%;
        height: 200px;
        border-radius: 14px;
        padding: 20px 40px;
        div{
            display: flex;
            justify-content: center;
        }
        img{
            margin-top: 10px;
            width: 130px;
            height: 80px;
           
        }
        p {
            font-size: 20px;
            color: #FFFFFF;
            letter-spacing: 0;
            font-weight: 600;
        }
    }
}
</style>