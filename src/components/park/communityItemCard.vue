<!--
 * @Author: gq
 * @Date: 2023-01-07 12:48:29
 * @LastEditors: gq
 * @LastEditTime: 2023-01-16 22:17:00
 * @Description: 智慧园区card组件
-->
<template>
    <div class="community-item-card" @click="toDetail">
        <img :src="parkData.parkImg" class="left-img" alt="">
        <div class="community-item-content">
            <div>
                <p class="community-item-title">{{parkData.parkName}}</p>
                <p  style="color:#AAA" class="community-item-location">{{parkData.cityName}} {{parkData.districtName}} {{parkData.streetName}}</p>
            </div>
            <div>
                <p style="color:#AAA">{{parkData.address}}</p>
                <p><img src="@/assets/img/icon/Ic_trail2x.png" class="icon" alt=""> {{ parkData.longitude|location}} N，{{parkData.latitude|location}} W</p>
            </div>
            <div class="house" >
                <img src="@/assets/img/icon/ic_plaza2x.png" alt="">
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    props:{
        parkData:{
            typeof:Object,
            default:()=>new Object()
        }
    },
    data() {
        return {
        }
    },
    methods:{
        toDetail(){
            this.$router.push({path:"/wisdomScenter/park-detail",query:{id:this.parkData.parkid}})
        }
    }
}
</script>
<style scoped lang="scss">
.community-item-card {
    display: flex;
    height: 160px;
    cursor: pointer;
    margin-bottom: 24px;
    .left-img {
        width: 240px;
        height: 160px;
        border-radius: 12px;
    }

    .community-item-content {
        width: 250px;
        font-weight:700;
        padding-top: 26px;
        margin-left: 18px;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
        display: flex;
        flex-wrap: wrap;
     
        font-size: 14px;
        align-content: space-between;
        position: relative;

        .icon {
            width: 28px;
            height: 28px;
            vertical-align: middle;
        }

        .community-item-title {
            font-size: 20px;
            font-family: Arial, Helvetica, sans-serif;
        }

        .house {
            font-weight:700;
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background: #2482FD;
            position: absolute;
            top:0;
            right: 0px;
            text-align: center;
            opacity: .7;
            img{
                width: 28px;
                height: 28px;
                margin-top: 6px;
            }
        }

        font-size: 14px;

    }
}
</style>