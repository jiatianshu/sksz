
<template>
    <div>

         <div class="wrapper">
        <v-head></v-head>

        <div class="center_box">
            <v-sidebar></v-sidebar>
            <div class="content-box" :class="{ 'content-collapse': collapse }">
                <!-- <v-tags></v-tags> -->
                <div class="content">
                    <!-- <transition name="move" mode="out-in"> -->
                        <!-- <keep-alive :include="tagsList"> -->
                            <router-view></router-view>
                        <!-- </keep-alive> -->
                    <!-- </transition> -->
                    <!-- <el-backtop target=".content"></el-backtop> -->
                </div>
            </div>
        </div>

    </div>
    <div class="img-back"></div>
    </div>
   
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import vTags from './Tags.vue';
import bus from './bus';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    components: {
        vHead,
        vSidebar,
        vTags
    },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
<style scoped>
.wrapper {
    padding: 10px 20px 6px 0;
    position: relative;
    z-index: 99;
    font-family:"Microsoft YaHei,Tahoma";
}
.img-back{
    background: url('././../../assets/img/image/bg01.jpg') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
}
</style>