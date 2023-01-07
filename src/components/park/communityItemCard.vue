<!--
 * @Author: gq
 * @Date: 2023-01-07 12:48:29
 * @LastEditors: gq
 * @LastEditTime: 2023-01-07 13:28:13
 * @Description: 智慧园区card组件
-->
<template>
    <div class="community-item-card">
        <img src="@/assets/img/pic/pic08@2x.jpg" class="left-img" alt="">
        <div class="community-item-content">
            <div>
                <p class="community-item-title">万科时代之光</p>
                <p class="community-item-location">沈阳市大东区 津桥街道 红星社区</p>
            </div>
            <div>
                <p>大东区工农路203号</p>
                <p><img src="@/assets/img/icon/Ic_trail2x.png" class="icon" alt=""> 41º46´ N，50º14´ W</p>
            </div>
            <div class="house" >
                <img src="@/assets/img/icon/ic_plaza2x.png" alt="">
            </div>
            
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
<style scoped lang="scss">
.community-item-card {
    display: flex;
    height: 160px;
    cursor: pointer;

    .left-img {
        width: 260px;
        height: 160px;
        border-radius: 12px;
    }

    .community-item-content {
        padding-top: 26px;
        margin-left: 18px;
        color: #fff;
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        align-content: space-between;
        position: relative;

        .icon {
            width: 28px;
            height: 28px;
            vertical-align: middle;
        }

        .community-item-title {
            font-size: 20px;
        }

        .house {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background: #2482FD;
            position: absolute;
            top:0;
            right: 0px;
            text-align: center;
            opacity: .7;
            img{
                width: 28px;
                height: 28px;
                margin-top: 6px;
            }
        }

        font-size: 14px;

    }
}
</style>