<!--
 * @Author: gq
 * @Date: 2023-01-03 20:29:11
 * @LastEditors: gq
 * @LastEditTime: 2023-01-03 20:43:52
 * @Description: 智慧园区-当前位置
-->
<template>
    <div class="currentPosition-box">
        <p>当前位置:</p>
        <h4>
            沈阳市-大东区
        </h4>
        <ul class="img-ul">
            <li v-for="item in imgList" :key="item.src">
                <img :src="request(`@/assets/img/image/${item.src}`)" alt="">
                <div>

                </div>
            </li>

        </ul>
    </div>
</template>
<script>
import { request } from 'http';


export default {
    data() {
        return {
            imgList: [
                {
                    src: "ic_card_security area @2x.png",
                    num: 90,
                    location: "安防小区"
                }, {
                    src: "ic_card_policestation@2x.png",
                    num: 90,
                    location: "派出所"
                }, {
                    src: "ic_card_policestation@2x.png",
                    num: 466,
                    location: "警员"
                }
            ]
        }
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

    li {
        width: 148px;
        height: 148px;
        border-radius: 18px;
        overflow: hidden;
        img {
            width: 148px;
            height: 148px;
        }
    }
}
</style>