<template>
    <div class="lf_sidebar">
        <el-aside class="el-aside" width="aotu">
            <div class="sidebar">

                <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" @close="closeMenu" @open="openMenu"
                    background-color="transparent" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened
                    router>
                    <template v-for="item in items">
                        <template v-if="item.subs">
                            <!-- title -->
                            <el-submenu :index="item.index" :key="item.index" >
                                <template slot="title">
                                    <div class="menu-item-box">
                                        <img :src="item.icon" alt="" srcset="" class="img_icon">
                                        <span slot="title">{{ item.title }}</span>
                                        <img src="@/assets/img/icon/ic_extend@2x.png" alt="" :class="[item.showType?'active-menu':'']" class="img-down">
                                    </div>

                                </template>
                                <!-- 子路由 -->
                                <template v-for="subItem in item.subs">
                                    <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index"
                                        class="liclass">
                                        <template slot="title">

                                            <img :src="require(`@/assets/img/icon/${subItem.icon}`)" class="child-menu-icon">
                                            {{ subItem.title }}</template>

                                       
                                        <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i"
                                            :index="threeItem.index">
                                            <template slot="title">
                                                <img :src="require(`@/assets/img/icon/${threeItem.icon}`)" class="child-menu-icon">
                                                {{ threeItem.title }}

                                            </template>

                                        </el-menu-item>
                                    
                                    </el-submenu>
                                    <el-menu-item v-else :index="subItem.index" >
                                        <template slot="title">
                                            <img :src="require(`@/assets/img/icon/${subItem.icon}`)" class="child-menu-icon">
                                            <!-- <i :class="subItem.icon"></i> -->
                                            {{ subItem.title }}
                                        </template>
                                    </el-menu-item>
                                </template>
                                <!-- 子路由完 -->
                            </el-submenu>
                        </template>
                        <template v-else>
                            <el-menu-item :index="item.index" :key="item.index">
                                <!-- <i :class="item.icon"></i> -->
                                <img :src="item.icon" alt="" srcset="" class="img_icon">
                                <span slot="title">{{ item.title }}</span>
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </div>
        </el-aside>
        <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: require('./../../assets/img/icon/ic_perception2x.png'),
                    index: '/dashboard',
                    title: '全域感知',
                    subs: [
                        {
                            icon: 'ic_city2x.png',
                            index: '/dashboard',
                            title: '数字城市'
                        },
                    ]
                },
                {
                    icon: require('./../../assets/img/icon/ic_smart2x.png'),
                    index: '/zhyq',
                    title: '智慧中心',
                    subs: [
                        {
                            icon: 'ic_plaza2x.png',
                            index: '/zhyq',
                            title: '智慧园区'
                        },

                    ]
                },
                {
                    icon: require('./../../assets/img/icon/ic_video2x.png'),
                    index: '/spgl/view-setting',
                    title: '视频中心',
                    subs: [
                        {
                            icon: 'ic_video_white2x.png',
                            index: '/spgl/view-setting',
                            title: '视频管理'
                        },

                    ]
                },
                {
                    icon: require('./../../assets/img/icon/ic_data2x.png'),
                    index: '/data-center',
                    title: '数据中心',
                    subs: [
                        {
                            icon: 'ic_video_white2x.png',
                            index: '/dataCenter/personData',
                            title: '人员数据'
                        },
                        {
                            icon: 'ic_carnumber2x.png',
                            index: '/dataCenter/carData',
                            title: '车辆数据'
                        },
                        {
                            icon: 'ic_housenumber2x.png',
                            index: '/dataCenter/houseData',
                            title: '房屋数据'
                        },
                        {
                            icon: 'ic_plaza2x.png',
                            index: '/dataCenter/parkData',
                            title: '园区数据'
                        },
                        {
                            icon: 'Ic_worknumber2x.png',
                            index: '/dataCenter/workData',
                            title: '单位数据'
                        },
                        {
                            icon: 'Ic_trail2x.png',
                            index: '/dataCenter/equipmentData',
                            title: '设备数据'
                        },

                    ]
                },
                {
                    icon: require('./../../assets/img/icon/ic_bell2x.png'),
                    index: 'warningCenter',
                    title: '预警中心',
                    subs: [
                        {
                            icon: 'ic_bell_outline2x.png',
                            index: '/warning/warningCenter',
                            title: '预警中心'
                        },

                    ]
                },
                {
                    icon: require('./../../assets/img/icon/ic_share2x.png'),
                    index: 'sharingData',
                    title: '共享中心',
                    subs: [
                        {
                            icon: 'Ic_sharedata2x.png',
                            index: '/sharing/sharingData',
                            title: '数据共享'
                        },

                    ]
                },
                {
                    icon: require('./../../assets/img/icon/ic_Bus2x.png'),
                    index: 'policeServices',
                    title: '业务中心',
                    subs: [
                        {
                            icon: 'Ic_police2x.png',
                            index: '/policeServices/policeServices',
                            title: '警务服务'
                        },
                    ]
                },
                {
                    icon: require('./../../assets/img/icon/ic_Service2x.png'),
                    index: '/centerServices/centerServices',
                    title: '服务中心',
                },
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    },
    methods: {
        fitlerIndex(index){
            let forFilter=(arr)=>{
              return  arr.find(item=>{
                    if(item.index==index){
                        return item
                    }else if(item.subs){
                       return forFilter(item.subs)
                    }
                })
            }
           return forFilter(this.items);
        },
        /**
         * @description: 打开菜单函数
         * @param {*} index
         */        
        openMenu(index){
            this.$set( this.fitlerIndex(index),"showType",true);
        
        },
        /**
         * @description: 关闭菜单函数                                           
         * @param {*} index
         */        
        closeMenu(index){
            this.fitlerIndex(index).showType=false
        },
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
    }
};
</script>

<style scoped lang="scss">
.active-menu{
    transform: rotate(180deg);
}
.child-menu-icon{
    width: 28px;
    height: 28px;
    display: inline-block;
    margin-right: 16px;
}
::v-deep .el-menu-item{
    background: #1E1F25!important;
    border-radius: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 60px;
}
.sidebar {
    overflow: scroll; 
}

::v-deep .el-submenu__icon-arrow {
    display: none;
}

::v-deep .el-submenu__title {
    padding-top: 10px;
    padding-bottom: 10px;
    height: auto;

}

.menu-item-box {

    // height: 36px;
    .img_icon {
        width: 36px;
        margin-right: 24px;

    }

    .img-down {
        width: 28px;
        height: 28px;
        float: right;
        margin-top: 14px;
    }
}

.el-aside {
    /* height: 80%; */
    /* overflow: scroll; */
}

.sidebar::-webkit-scrollbar {
    display: none !important;
    ;
}

.el-aside::-webkit-scrollbar {
    display: none !important;
    ;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}

.sidebar>ul {
    height: 100%;
}

.collapse-btn {
    width: 5vh;
    height: 5vh;
    margin: 20px 0 0 0;
    border-radius: 1.2vh;
    /* background: pink; */
    /* margin: auto; */
    display: inline-block;
    text-align: center;
    cursor: pointer;
    line-height: 5vh;
    /* float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px; */
}
</style>
