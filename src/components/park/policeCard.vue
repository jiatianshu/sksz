<!--
 * @Author: gq
 * @Date: 2023-01-09 19:21:46
 * @LastEditors: gq
 * @LastEditTime: 2023-01-12 19:06:07
 * @Description: 警察card组件
-->
<template>
    <div class="policeCard-box">
        <p class="title">
            <img src="@/assets/img/image/ic_policelogo@2x.png" alt="">
            {{ detailData.branchName }}{{ detailData.orgName }}
        </p>
        <div class="policeCard-content-box">
            <img :src="detailData.photo" alt="">
            <ul>
                <li>
                    <span class="name">姓名</span>
                    <span class="value">{{ detailData.policeName }}</span>
                </li>
                <li>
                    <span class="name">警号</span>
                    <span class="value">{{ detailData.policeNo }}</span>
                </li>
                <li>
                    <span class="name">联系电话</span>
                    <span class="value">{{ detailData.telephone }}</span>
                </li>
                <li>
                    <span class="name">负责社区</span>
                    <span class="value">{{ detailData.roomName }}</span>
                </li>
            </ul>

        </div>
        <div class="content-bottom">

            <img src="@/assets/img/image/ic_docbar@2x.png" alt="">
            <span>警民携手</span>
            <span>共创平安</span>
            <img src="@/assets/img/image/ic_docbar@2x.png" alt="" style="transform:rotate(180deg)">
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
        return {

        }
    }
}
</script>

<style scoped lang='scss'>
.content-bottom {
    background: #004BAD;
    height: 34px;
    font-size: 14px;
    color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    line-height: 10px;
    img {
        width: 112px;
        vertical-align: middle;
        height: 8px;
    }
}

.policeCard-box {
    width: 400px;
    height: 220px;
    border-radius: 20px;
    overflow: hidden;
    font-weight:600;

    .title {
        height: 52px;
        line-height: 52px;
        text-align: center;
        font-size: 20px;
        color: #FFFFFF;
        background: #004BAD;

        img {
            width: 28px;
            height: 30px;
            vertical-align: middle;
        }
    }

    .policeCard-content-box {
        width: 400px;
        height: 140px;
        background: #FFFFFF;
        padding: 15px 0 15px 34px;
        display: flex;


        img {
            width: 100px;
            height: 114px;
        }

        ul {
            margin-left: 42px;
            font-size: 14px;
            list-style: none;

            li {
                margin: 5px 0;
                ;
            }

            .name {
                width: 58px;
                display: inline-block;
                text-align: justify;
                text-justify: distribute-all-lines; // 这行必加，兼容ie浏览器
                text-align-last: justify;
                font-weight: bold;
            }

            .value {
                color: #004BAD;
                margin-left: 12px;
                width: 120px;
                display: inline-block;
                vertical-align: text-top;
            }
        }
    }
}
</style>
