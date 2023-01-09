<!--
 * @Author: gq
 * @Date: 2023-01-09 19:19:37
 * @LastEditors: gq
 * @LastEditTime: 2023-01-09 20:06:11
 * @Description: 小区名片组件
-->
<template>
    <div class="houseCard-box">
        <img :src="imgSrc" class="house-img" alt="">
        <div class="text-box">
            <div class="text-content">
                <p class="title">title</p>
                <p>地区</p>
            </div>
            <div>
                <p>地址</p>
                <p><img src="@/assets/img/icon/Ic_trail2x.png" alt=""> 经纬度</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            default: "",
            typeof: String,
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

    .house-img {
        width: 400px;
        height: 246px;
        border-radius: 20px;
    }

    .text-box {
        margin-left: 30px;
        width: 250px;
        font-size: 16px;
        margin-top: 76px;
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