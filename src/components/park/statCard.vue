<!--
 * @Author: gq
 * @Date: 2023-01-03 21:06:15
 * @LastEditors: gq
 * @LastEditTime: 2023-01-05 20:20:25
 * @Description: 智慧园区-统计卡片
-->
<template>
    <div class="stat-card-box">
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
            default: "nosense_car@2x.png"
        },
        title:{
            typeof: String,
            default:""
        },
        num:{
            typeof: String||Number,
            default:""
        }
    },
    data() {
        return{
            
        }
    }
}
</script>
<style scoped lang="scss">
.stat-card-box {
    width: 224px;
    padding-left: 16px;
    height: 100px;
    padding-top:20px;
    opacity: 0.88;
    border-radius: 12px;
    overflow: hidden;
    background: #1E1F25;

    img {
        width: 58px;
        height: 69px;
        vertical-align: top;
    }
    .stat-text-box{
        margin-left: 12px;
        display: inline-block;
        color: #fff;
        span{
          font-size: 16px;

        }
        div{
            font-size: 28px;
        }
    }
}
</style>