<!--
 * @Author: gq
 * @Date: 2023-01-03 20:29:11
 * @LastEditors: gq
 * @LastEditTime: 2023-01-16 21:59:27
 * @Description: 智慧园区-当前位置
-->
<template>
    <div class="currentPosition-box">
        <p>当前位置:</p>
        <h4>
            {{locationTitle}}
        </h4>
        <ul class="img-ul">
            <li v-for="(item,index) in imgList" :key="item.location">
                <img :src="require(`@/assets/img/image/${item.src}`)" alt="">
                <div class="img-text-box">
                    <p class="img-text-num">{{ numList[index]}}</p>
                    <p class="img-text-location">{{ item.location }}</p>
                </div>
            </li>

        </ul>
    </div>
</template>
<script>
export default {
    props:{
        locationTitle:{
            typeof:String,
            default:""
        },
        numList:{
            typeof:Array,
            default:()=>[]
        }
    },
    data() {
        return {
            imgList: [
                {
                    src: "ic_card_sec.png",
                    
                    location: "安防小区"
                }, {
                    src: "ic_card_policestation@2x.png",
                   
                    location: "派出所"
                }, {
                    src: "ic_card_police2x.png",
                    
                    location: "警员"
                }
            ]
        }
    },
    methods: {
       
    }
}
</script>
<style scoped lang="scss">
.currentPosition-box {
    margin-left: 52px;
    color: #fff;

    p {
        font-size: 16px;
        line-height: 40px;
    }

    h4 {
        font-size: 24px;
        line-height: 40px;
        margin-top: 10px;
        font-weight: 400px;
    }
}

.img-ul {
    margin-top: 40px;
    display: flex;
    li {
        width: 148px;
        height: 148px;
        border-radius: 18px;
        overflow: hidden;
        margin-right: 30px;
        position: relative;
        img {
            width: 148px;
            height: 148px;
            
        }
        .img-text-box{
            text-align: center;
            position: absolute;
            color: #fff;
            top: 56px;
            width: 100%;
            .img-text-num{
                font-size: 40px;
                font-weight:700;
                font-family: Arial, Helvetica, sans-serif;
            }
            .img-text-location{
                font-size: 16px;
            }
        }
    }
}
</style>