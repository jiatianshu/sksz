<!--
 * @Author: gq
 * @Date: 2023-01-03 19:33:18
 * @LastEditors: gq
 * @LastEditTime: 2023-01-03 20:26:12
 * @Description: 智慧园区-图片框
-->

<template>
    <div class="picture-box">
        <div class="img-box">
            <img src="@/assets/img/pic/pic01@2x.jpg" alt="">
            <div class="img-title">东大街</div>
        </div>
        <ul class="picture-ul">
            <li v-for="item in '1234'" :class="['active']">
                <img src="@/assets/img/pic/pic01@2x.jpg" alt="">
            </li>

        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped lang="scss">
.picture-box {
    display: flex;


    .img-box {
        position: relative;
        width: 360px;
        height: 100%;
        border-radius: 12px;
        overflow: hidden;

        img {
            width: 360px;
            height: 270px;
        }

        .img-title {
            position: absolute;
            bottom: 0px;
            width: 360px;
            height: 40px;
            background: rgba(0, 0, 0, 0.48);
            color: #fff;
            font-size: 16px;
            line-height: 40px;
            padding-left: 20px;
        }
    }
    .picture-ul {
        margin-left: 12px;
        width: 80px;

        li {
            width: 80px;
            height: 60px;
            overflow: hidden;
            border-radius: 8px;
            margin-bottom: 10px;
            cursor: pointer;

            img {
                width: 80px;
                height: 60px;
            }
        }

        .active {
            border: 1px solid #fff;
        }
    }
}
</style>