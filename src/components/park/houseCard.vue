<!--
 * @Author: gq
 * @Date: 2023-01-09 19:19:37
 * @LastEditors: gq
 * @LastEditTime: 2023-01-16 22:18:30
 * @Description: 小区名片组件
-->
<template>
    <div class="houseCard-box">
        <img :src="detailData.parkImg" class="house-img" alt="">
        <div class="text-box">
            <div class="text-content">
                <p class="title">{{ detailData.parkName }}</p>
                <p style="color:#ccc">{{ `${detailData.cityName} ${detailData.districtName}  ${detailData.streetName}` }} </p>
            </div>
            <div>
                <p style="color:#ccc">{{detailData.address}}</p>
                <p class="" style="font-family: Arial, Helvetica, sans-serif;"><img src="@/assets/img/icon/Ic_trail2x.png" alt=""> {{ detailData.longitude |location}} N,{{ detailData. latitude|location}} W</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        detailData: {
            default: {},
            typeof: Object,
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped lang='scss'>
.houseCard-box {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;

    .house-img {
        width: 380px;
        height: 220px;
        border-radius: 20px;
    }

    .text-box {
        margin-left: 30px;
        width: 250px;
        font-size: 16px;
        margin-top: 66px;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        // flex-wrap: wrap;
        flex-direction: column;
        p{
            margin-bottom: 4px;
        }
        .title {
            font-size: 24px;
            color: #FFFFFF;
            
        }

        img {
            width: 28px;
            height: 28px;
            vertical-align: middle;
        }
    }
}
</style>