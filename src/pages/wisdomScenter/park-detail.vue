<!--
 * @Author: gq
 * @Date: 2023-01-09 19:14:53
 * @LastEditors: gq
 * @LastEditTime: 2023-01-09 20:20:32
 * @Description: 智慧园区详情页
-->
<template>
    <div>
        <div class="card-box">
            <houseCard />
            <policeCard />
        </div>
        <div class="statistics-box">
            <statCard :title="item.title" :num="item.num" size="mini" :src="item.src" v-for="item in statiList" :key="item.title" />
        </div>

    </div>
</template>

<script>
import houseCard from '_c/park/houseCard.vue';
import policeCard from '_c/park/policeCard.vue';
import statCard from '_c/park/statCard.vue';
export default {
    name: "wisdomScenter-park-detail",
    title: "智慧中心 > 智慧园区 > 沈阳市",
    components: {
        policeCard,
        houseCard,
        statCard
    },
    data() {
        return {
            statiList:[{
                title:"标准地址",
                num:0,
                src:"ic_location@2x.png"
            },{
                title:"实有房屋",
                num:0,
                src:"ic_house@2x.png"
            },{
                title:"实有人口",
                num:0,
                src:"ic_person@2x.png"
            },{
                title:"实有单位",
                num:0,
                src:"ic_corporation@2x.png"
            },{
                title:"智能监控",
                num:0,
                src:"ic_monitor@2x.png"
            },{
                title:"人脸识别",
                num:0,
                src:"ic_face@2x.png"
            },{
                title:"车辆识别",
                num:0,
                src:"ic_car@2x.png"
            },{
                title:"周界监控",
                num:0,
                src:"ic_surround@2x.png"
            }
        ]

        }
    }
}
</script>

<style scoped lang='scss'>
    .card-box{
        display: flex;
        justify-content: space-between;
    }
    .statistics-box{
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
    }
</style>