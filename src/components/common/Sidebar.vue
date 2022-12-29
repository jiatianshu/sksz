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

                                            <!-- <i :class="subItem.icon"></i> -->
                                            <img :src="subItem.icon" alt="" srcset="" class="img_icon">
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
                            icon: require('./../../assets/img/icon/ic_perception2x.png'),
                            index: '/dashboard',
                            title: '数字城市'
                        },
                    ]
                },
                {
                    icon: require('./../../assets/img/icon/ic_perception2x.png'),
                    index: '/zhyq',
                    title: '智慧中心',
                    subs: [
                        {
                            icon: 'el-icon-lx-locationfill',
                            index: '/zhyq',
                            title: '智慧园区'
                        },

                    ]
                },
                {
                    icon: require('./../../assets/img/icon/ic_perception2x.png'),
                    index: '/spgl',
                    title: '视频中心',
                    subs: [
                        {
                            icon: 'el-icon-lx-recordfill',
                            index: '/spgl',
                            title: '视频管理'
                        },

                    ]
                },
                {
                    icon: 'el-icon-rank',
                    index: '/data-center',
                    title: '数据中心',
                    subs: [
                        {
                            icon: 'el-icon-lx-people',
                            index: '/personData',
                            title: '人员数据'
                        },
                        {
                            icon: 'el-icon-lx-people',
                            index: '/carData',
                            title: '车辆数据'
                        },
                        {
                            icon: 'el-icon-lx-people',
                            index: '/data-center/houseData',
                            title: '房屋数据'
                        },
                        {
                            icon: 'el-icon-lx-people',
                            index: '/data-center/parkData',
                            title: '园区数据'
                        },
                        {
                            icon: 'el-icon-lx-people',
                            index: '/data-center/workData',
                            title: '单位数据'
                        },
                        {
                            icon: 'el-icon-lx-people',
                            index: '/data-center/equipmentData',
                            title: '设备数据'
                        },

                    ]
                },
                {
                    icon: 'el-icon-lx-record',
                    index: 'warningCenter',
                    title: '预警中心',
                    subs: [
                        {
                            icon: 'el-icon-lx-recordfill',
                            index: '/warningCenter',
                            title: '预警中心'
                        },

                    ]
                },
                {
                    icon: 'el-icon-lx-record',
                    index: 'sharingData',
                    title: '共享中心',
                    subs: [
                        {
                            icon: 'el-icon-lx-recordfill',
                            index: '/sharingData',
                            title: '数据共享'
                        },

                    ]
                },
                {
                    icon: 'el-icon-lx-cascades',
                    index: 'policeServices',
                    title: '业务中心',
                    subs: [
                        {
                            icon: 'el-icon-lx-cascades',
                            index: '/policeServices',
                            title: '警务服务'
                        },

                    ]
                },
                {
                    icon: 'el-icon-lx-cascades',
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
.img_icon{
    width: 4vh;
    margin: 0 2vh 0;
}
</style>
