<!--
 * @Author: gq
 * @Date: 2023-01-09 19:21:46
 * @LastEditors: gq
 * @LastEditTime: 2023-01-09 20:00:08
 * @Description: 警察card组件
-->
<template>
    <div class="policeCard-box">
        <p class="title">
            <img src="@/assets/img/image/ic_policelogo@2x.png" alt="">
            大东区津桥街道红星社区派出所
        </p>
        <div class="policeCard-content-box">
            <img src="@/assets/img/image/ic_policelogo@2x.png" alt="">
            <ul>
                <li>
                    <span class="name">姓名</span>
                    <span class="value">xxxxxxx</span>
                </li>
                <li>
                    <span class="name">警号</span>
                    <span class="value">xxxxxxx</span>
                </li>
                <li>
                    <span class="name">联系电话</span>
                    <span class="value">xxxxxx</span>
                </li>
                <li>
                    <span class="name">负责社区</span>
                    <span class="value">xxxxxx</span>
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
    height: 240px;
    border-radius: 20px;
    overflow: hidden;

    .title {
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        color: #FFFFFF;
        background: #004BAD;

        img {
            width: 32px;
            height: 35px;
            vertical-align: middle;
        }
    }

    .policeCard-content-box {
        width: 400px;
        height: 148px;
        background: #FFFFFF;
        padding: 15px 0 15px 34px;
        display: flex;


        img {
            width: 118px;
            height: 118px;
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
            }
        }
    }
}
</style>
