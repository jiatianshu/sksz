<!--
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-17 20:55:07
 * @Description: 智慧园区
-->
<template>
    <div>
        <div>
            <skDistrict @change="districtChange" @submit="getData" />
            <skIconButton @click="getData"></skIconButton>
        </div>
        <div class="park-content-box" v-if="detailData">
            <div class="content">
                <h4 class="title-h4">行政区划</h4>

                
                <div class="content-div-box">
                    <pictureBox :imgList="imgList" ref="pictureBoxRef"/>
                    <currentPosition
                        :numList="[detailData.parkNum, detailData.policeStationsNum, detailData.districtData.policeNum]"
                        :locationTitle="`${formData.cityName}${'-' + formData.districtName}${'-' + formData.streetName}`" />
                </div>
                <h4 class="title-h4">一标三实</h4>
                <div class="content-div-box" style="justify-content: space-around;">
                    <statCard title="标准地址" :num="detailData.districtData.addressNum" src="ic_location@2x.png" />
                    <statCard title="实有房屋" :num="detailData.districtData.housesNum" src="ic_house@2x.png" />
                    <statCard title="实有人口" :num="detailData.districtData.populationNum" src="ic_person@2x.png" />
                    <statCard title="实有单位" :num="detailData.districtData.companyNum" src="ic_corporation@2x.png" />
                </div>
                <h4 class="title-h4">群防群治</h4>
                <div class="content-div-box" style="justify-content: space-between;">
                    <ul class="occupation-box" style="height:165px">
                        <li v-for="item in professionList" :key="item.key">
                            <div class="occupation-img-box" :style="{ background: item.background }">
                                <img :src="require('@/assets/img/image/' + item.src)" alt="">
                            </div>
                            <span style="font-size:16px;margin-left:12px">{{ item.name }}</span>
                            <span>{{ detailData[item.key]}}</span>
                            <span>{{ percent(detailData[item.key],chartData.pieTitle) }}</span>
                        </li>
                    </ul>
                    <div class="echart-box">
                        <echart :chartData="chartData" :legendType="false" :height="'230px'" />
                    </div>
                </div>
            </div>
            <div class="community-table-box" style="border-radius:20px">
                <sk-icon-input :value.sync="parkName" @search="getParkList"></sk-icon-input>
                <div class="community-table-item-box">
                    <communityItemCard v-for="item in parkList" :parkData="item" :key="item.id" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pictureBox from '_c/park/pictureBox.vue';
import currentPosition from '_c/park/currentPosition.vue';
import statCard from "_c/park/statCard.vue";
import communityItemCard from "_c/park/communityItemCard.vue";
import echart from '_c/park/echart.vue'
import { getParkData, getParkList } from "@/api/wisdomScenter";
export default {
    name: "wisdomScenter-park",
    components: {
        pictureBox,
        currentPosition,
        statCard,
        communityItemCard,
        echart
    },
    title: "智慧园区 > 智慧中心",

    data() {
        return {

            formData: {
                city: "",
                cityName: "",
                district: "",
                districtName: "",
                street: "",
                streetName: "",
            },
            parkName: "",
            parkList: [],
            professionList: [
                {
                    background: "#A276FF",
                    name: "网格员",
                    src: "ic_net@2x.png",
                    key: "gridNum",
                }, {
                    background: "#FF9B0B",
                    name: "社区工作者",
                    src: "ic_community@2x.png",
                    key: "communityWorkerNum",
                }, {
                    background: "#FF1D1D",
                    name: "平安志愿者",
                    src: "ic_volunteer@2x.png",
                    key: "volunteerNum",
                }, {
                    background: "#2482FD",
                    name: "物业保安",
                    src: "ic_security@2x.png",
                    key: "securityNum",
                }, {
                    background: "#3CE1F6",
                    name: "企事业职工",
                    src: "ic_worker@2x.png",
                    key: "enterpriseWorkersNum",
                }, {
                    background: "#00CB5A",
                    name: "业主商户",
                    src: "ic_worker@2x.png",//缺图片
                    key: "merchantNum",
                }, {
                    background: "#007E16",
                    name: "退伍军人",
                    src: "ic_soldier@2x.png",
                    key: "exSoldierNum",
                }, {
                    background: "#FF65E4",
                    name: "党员",
                    src: "ic_party@2x.png",
                    key: "partyMemberNum",
                }
            ],
            chartData: {
                pieData: [
                    {
                        value: 113,
                        name: '5.0分',
                    },
                    {
                        value: 101,
                        name: '4.0分',
                    },
                ],
                pieTitle: 0,
                satisfaction: '人数总计',
            },
            detailData: null,
            imgList: [],
        }


    },

    mounted() {


    },
    methods: {
        percent(num1,num2){
            try{
                  let x =Number(num1);
            let y =Number(num2);
            return (Math.round(x / y * 10000) / 100).toFixed() + "%";  
            }catch(e){
                return '';
            }
        
        },
        getParkList() {
            getParkList({ ...this.formData, parkName: this.parkName }).then(res => {
                this.parkList = res.data.result;
            })
        },
        districtChange(data) {
            this.formData = data
        },
        getData() {
            getParkData(this.formData).then(res => {
                this.detailData = res.data;
                this.imgList = [];
                //图片map转list
                for (let key in this.detailData.imgMap) {

                    this.imgList.push({
                        title: key,
                        src: this.detailData.imgMap[key]
                    })
                }
                this.chartData.pieData = this.professionList.map(item => {
                    item.value = this.detailData[item.key] || 0;
                    this.chartData.pieTitle += parseInt(item.value);
                    return item;
                })
           
              
            });
            this.getParkList();

        }

    }
}
</script>
<style scoped lang="scss">
.community-table-box {
    width: 560px;
    background: #1E1F25;
    padding: 24px 20px;
    height: 800px;

    ::v-deep .input-with-select {
        width: 100%;
    }

    .community-table-item-box {
        margin-top: 12px;
        overflow-x: hidden;
        overflow-y: auto;
        height: 670px;
    }
}

.occupation-box {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 816px;
    // margin: 16px 0 0 0;

    li {
        width: 270px;
        height: 40px;
        color: #fff;
        margin-bottom: 24px;
        display: flex;
        .occupation-img-box {
            display: flex;
            justify-content: center;
            img {
                vertical-align: sub;
            }
        }


        span {
            margin-right: 14px;
            font-size: 20px;
            font-weight: 600;
            line-height: 32px;
        }
    }

    .occupation-img-box {
        height: 40px;
        width: 40px;
        display: inline-block;
        border-radius: 10px;

        img {
            height: 24px;
            widows: 20px;
            vertical-align: middle;
            // margin-left: 8px;
            margin-top: 6px;
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
    /* margin-top: 12px; */
    display: flex;
    justify-content: space-between;

    .content {
        // padding-right: 60px;

        .content-div-box {
            margin-bottom: 12px;
            display: flex;
        }
    }
}



.echart-box {
    width: 180px;
    height: 230px;
    margin-right: 50px;
}
</style>