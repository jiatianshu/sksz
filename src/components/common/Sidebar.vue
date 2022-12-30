<template>
    <div class="lf_sidebar">
        <el-aside class="el-aside" width="aotu">
            <div class="sidebar">

                <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse"
                    background-color="transparent" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened
                    router>
                    <template v-for="item in items">
                        <template v-if="item.subs">
                            <!-- title -->
                            <el-submenu :index="item.index" :key="item.index">
                                <template slot="title">
                                    <!-- <i :class="item.icon"></i> -->
                                    <!-- <img src="../../assets/img/icon/ic_bell.png" alt="" srcset=""> -->
                                    <img :src="item.icon" alt="" srcset="" class="img_icon">
                                    <span slot="title">{{ item.title }}</span>
                                </template>
                                <!-- 子路由 -->
                                <template v-for="subItem in item.subs">
                                    <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index"
                                        class="liclass">
                                        <template slot="title">

                                            <i :class="subItem.icon"></i>
                                            <!-- <img src="./../../assets/img/icon/button_ormenu@2x.png" alt="" srcset="" class="img_icon"> -->
                                            {{ subItem.title }}</template>

                                        <!-- 第三层路由 -->
                                        <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i"
                                            :index="threeItem.index">
                                            <template slot="title">
                                                <i :class="threeItem.icon"></i>
                                                {{ threeItem.title }}
                                            </template>

                                        </el-menu-item>
                                        <!-- 第三层路由完 -->
                                    </el-submenu>
                                    <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                        <template slot="title">
                                            <i :class="subItem.icon"></i>
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
                            icon: 'el-icon-lx-szcs',
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
                            icon: 'el-icon-lx-zhyq',
                            index: '/zhyq',
                            title: '智慧园区'
                        },

                    ]
                },
                {
                    icon: require('./../../assets/img/icon/ic_video2x.png'),
                    index: '/spgl',
                    title: '视频中心',
                    subs: [
                        {
                            icon: 'el-icon-lx-video',
                            index: '/spgl',
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
                            icon: 'el-iconpeople',
                            index: '/personData',
                            title: '人员数据'
                        },
                        {
                            icon: 'el-iconcar',
                            index: '/carData',
                            title: '车辆数据'
                        },
                        {
                            icon: 'el-icon-house',
                            index: '/data-center/houseData',
                            title: '房屋数据'
                        },
                        {
                            icon: 'el-icon-yqsj',
                            index: '/data-center/parkData',
                            title: '园区数据'
                        },
                        {
                            icon: 'el-icon-work',
                            index: '/data-center/workData',
                            title: '单位数据'
                        },
                        {
                            icon: 'el-icon-sbsj',
                            index: '/data-center/equipmentData',
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
                            icon: 'el-icon-yjzx',
                            index: '/warningCenter',
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
                            icon: 'el-icon-sjgx',
                            index: '/sharingData',
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
                            icon: 'el-icon-jwfw',
                            index: '/policeServices',
                            title: '警务服务'
                        },

                    ]
                },
                {
                    icon: require('./../../assets/img/icon/ic_Service2x.png'),
                    index: '/centerServices',
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
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
    }
};
</script>

<style scoped>
.sidebar {
    /* height: 100%; */
    overflow: scroll;
    /* overflow-y: scroll; */
    /* height: 100%; */
    /* width: 250px; */
    /* margin: 0 0 20px 0; */
    /* margin: 0 20px 0 20px; */
    /* display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll; */
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

.el-icon-lx-szcs {
    background: url('./../../assets/img/icon/ic_city2x.png') center center no-repeat;
    background-size: 100% 100%;
    width: 28px;
    height: 28px;
    display: inline-block;
}
.el-icon-lx-zhyq {
    background: url('./../../assets/img/icon/ic_plaza2x.png') center center no-repeat;
    background-size: 100% 100%;
    width: 28px;
    height: 28px;
    display: inline-block;
}
.el-icon-lx-video {
    background: url('./../../assets/img/icon/ic_video_white2x.png') center center no-repeat;
    background-size: 100% 100%;
    width: 28px;
    height: 28px;
    display: inline-block;
}
.el-iconpeople {
    background: url('./../../assets/img/icon/ic_rentrole2x.png') center center no-repeat;
    background-size: 100% 100%;
    width: 28px;
    height: 28px;
    display: inline-block;
}
.el-iconcar {
    background: url('./../../assets/img/icon/ic_carnumber2x.png') center center no-repeat;
    background-size: 100% 100%;
    width: 28px;
    height: 28px;
    display: inline-block;
}
.el-icon-house {
    background: url('./../../assets/img/icon/ic_housenumber2x.png') center center no-repeat;
    background-size: 100% 100%;
    width: 28px;
    height: 28px;
    display: inline-block;
}
.el-icon-work {
    background: url('./../../assets/img/icon/Ic_worknumber2x.png') center center no-repeat;
    background-size: 100% 100%;
    width: 28px;
    height: 28px;
    display: inline-block;
}
.el-icon-yqsj {
    background: url('./../../assets/img/icon/ic_plaza2x.png') center center no-repeat;
    background-size: 100% 100%;
    width: 28px;
    height: 28px;
    display: inline-block;
}
.el-icon-sbsj {
    background: url('./../../assets/img/icon/Ic_trail2x.png') center center no-repeat;
    background-size: 100% 100%;
    width: 28px;
    height: 28px;
    display: inline-block;
    
}
.el-icon-sjgx {
    background: url('./../../assets/img/icon/Ic_sharedata2x.png') center center no-repeat;
    background-size: 100% 100%;
    width: 28px;
    height: 28px;
    display: inline-block;
}
.el-icon-yjzx {
    background: url('./../../assets/img/icon/ic_bell_outline2x.png') center center no-repeat;
    background-size: 100% 100%;
    width: 28px;
    height: 28px;
    display: inline-block;
}
.el-icon-jwfw {
    background: url('./../../assets/img/icon/Ic_police2x.png') center center no-repeat;
    background-size: 100% 100%;
    width: 28px;
    height: 28px;
    display: inline-block;
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

.img_icon {
    width: 4vh;
    margin: 0 2vh 0 0;
}
</style>
