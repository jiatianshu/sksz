<!--
 * @Author: gq
 * @Date: 2023-01-03 21:06:15
 * @LastEditors: gq
 * @LastEditTime: 2023-01-09 20:20:00
 * @Description: 智慧园区-统计卡片
-->
<template>
    <div class="stat-card-box" :class="size == 'small' ? 'small' : 'mini'">
        <img :src="require(`@/assets/img/icon/${src}`)" alt="">
        <div class="stat-text-box">
            <span>{{ title }}</span>
            <div>{{ num }}</div>
        </div>
    </div>

</template>
<script>


export default {
    props: {
        //img路径
        src: {
            typeof: String,
          
        },
        title: {
            typeof: String,
            default: ""
        },
        num: {
            typeof: String || Number,
            default: ""
        },
        //定义卡片尺寸
        size: {
            default: "small",
            typeof: String
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">
.small {
    width: 224px;
}

.mini {
    width: 190px;
}

.stat-card-box {

    padding-left: 16px;
    height: 100px;
    padding-top: 20px;
    opacity: 0.88;
    border-radius: 12px;
    overflow: hidden;
    background: #1E1F25;

    img {
        width: 58px;
        height: 69px;
        vertical-align: top;
    }

    .stat-text-box {
        margin-left: 12px;
        display: inline-block;
        color: #fff;

        span {
            font-size: 16px;

        }

        div {
            // margin: 2px 0 0 0;
            font-size: 28px;
            font-weight: 800;
            font-family: Arial, Helvetica, sans-serif;

        }
    }
}
</style>