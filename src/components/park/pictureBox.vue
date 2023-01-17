<!--
 * @Author: gq
 * @Date: 2023-01-03 19:33:18
 * @LastEditors: gq
 * @LastEditTime: 2023-01-11 19:33:27
 * @Description: 智慧园区-图片框
-->

<template>
    <div class="picture-box">
        <div class="img-box">
            <img :src="imgList[active].src || ''" alt="">
            <div class="img-title">{{ imgList[active].title || '' }}</div>
        </div>
        <ul class="picture-ul">
            <li :class="[index == active ? 'active' : '']" v-for="(item, index) in imgList"
                @click="() => active = index" :key="item.src">
                <img :src="item.src" alt="">
            </li>

        </ul>
    </div>
</template>
<script>
export default {
    props: {
        imgList: {
            typeof: Array,
            default: () => []
        }
    },
    data() {
        return {
            active: 0
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
            bottom: 8px;
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
        width: 90px;
        overflow-y: overlay;

        height: 279px;

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