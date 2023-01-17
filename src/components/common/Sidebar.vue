<template>
    <div class="lf_sidebar">
        <el-aside class="el-aside" width="aotu">
            <div class="sidebar">
                <el-menu class="sidebar-el-menu" ref="menusRef" :default-active="onRoutes" :collapse="collapse"
                    @close="closeMenu" @open="openMenu" background-color="transparent" text-color="#bfcbd9"
                    active-text-color="#20a0ff" unique-opened router>
                    <template v-for="item in menus">
                        <template v-if="item.subs">
                            <!-- title -->
                            <el-submenu :index="item.index" :key="item.index">
                                <template slot="title">
                                    <div class="menu-item-box " :class="item.active ? 'active-munt' : ''">
                                        <img :src="item.icon" alt="" srcset="" class="img_icon">
                                        <span slot="title">{{ item.title }}
                                            <img src="@/assets/img/icon/ic_extend@2x.png" alt=""
                                                :class="[item.showType ? 'active-menu' : '']" class="img-down">
                                        </span>

                                    </div>
                                </template>
                                <!-- 子路由 -->
                                <template v-for="subItem in item.subs">
                                    <!-- <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index"
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
                                    </el-submenu> -->
                                    <el-menu-item :index="subItem.index"
                                        :class="onRoutes == subItem.index ? 'item-active' : ''">
                                        <template slot="title">
                                            <div>
                                                <img :src="require(`@/assets/img/icon/${subItem.icon}`)"
                                                    class="child-menu-icon">
                                                {{ subItem.title }}
                                            </div>
                                        </template>
                                    </el-menu-item>
                                </template>
                                <!-- 子路由完 -->
                            </el-submenu>
                        </template>
                        <!-- <template v-else>
                            <el-menu-item :index="item.index" :key="item.index">
                                <i :class="item.icon"></i>
                                <img :src="item.icon" alt="" srcset="" class="img_icon">
                                <span slot="title">{{ item.title }}</span>
                            </el-menu-item>
                        </template> -->
                    </template>
                </el-menu>
            </div>
        </el-aside>
        <div class="collapse-btn" @click="collapseChage">
            <img v-if="!collapse" src="@/assets/img/icon/button_ormenu@2x.png">
            <img v-else src="@/assets/img/icon/button_ormenu@2x.png">
        </div>
    </div>
</template>

<script>
import bus from '../common/bus';
import menus from './menus';
export default {
    data() {
        return {
            collapse: false,
            menus,
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path;
        }
    },

    mounted() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
        // this.openMenu(this.$route)
        let menu = this.filterIndex(this.$route.path);
        menu && this.openMenu(menu.index);

    },
    methods: {
        filterIndex(index) {
            let forFilter = (arr) => {
                return arr.find(item => {
                    if (item.index == index) {
                        // if (item.parent) this.$set(this.filterIndex(item.parent), "activeMenu", item);
                        return item
                    } else if (item.subs) {
                        return forFilter(item.subs);
                    }
                })
            }
            return forFilter(this.menus);
        },
        /**
         * @description: 打开菜单函数
         * @param {*} index
         */
        openMenu(index) {
            this.menus.forEach(item => {
                item.index == index ? this.$set(item, "active", true) : this.$set(item, "active", false);
                item.index == index ? this.$set(item, "showType", true) : this.$set(item, "showType", false);
            });
        },
        /**
         * @description: 关闭菜单函数                                           
         * @param {*} index
         */
        closeMenu(index) {
            this.$set(this.filterIndex(index), "showType", false);
            this.$set(this.filterIndex(index), "active", false);
        },
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
    },


};
</script>

<style scoped lang="scss">
.active-munt {
    height: 40px !important;
    padding-top: 0px !important;
}

::v-deep .item-active {
    background-image: url("../../assets/img/image/button_bgshine@2x.png") !important;
    background-position: left!important;
    color: #FFFFFF!important;
    background-size: 120% 100%!important;
    font-size:16px;
    font-weight: bold;
    font-family:"微软雅黑";
}

.active-menu {
    transform: rotate(180deg);
}

.child-menu-icon {
    width: 28px;
    height: 28px;
    display: inline-block;
    margin-right: 16px;
}

::v-deep .el-menu-item {
    background: #1E1F25;
    /* color: #757b8c; */
    border-radius: 0px;
    /* // border-bottom-left-radius: 20px;
    // border-bottom-right-radius: 20px; */
    height: 60px;
    line-height: 60px;
}
.el-submenu .el-menu-item:hover {
    background: rgb(25, 36, 49) !important;
    background-image: url("../../assets/img/image/button_bgshine@2x.png") !important;
    background-position: left!important;
    color: #FFFFFF!important;
    background-size: 120% 100%!important;
    border-radius: 1.2vh;
}

.sidebar {
    overflow: scroll;
}

::v-deep .el-submenu__icon-arrow {
    display: none;
}

::v-deep .el-submenu__title {
    /* // padding-top: 10px; */
    padding-bottom: 10px;
    height: auto;
    font-weight: bold;
    color: #757b8c !important;
}
::v-deep .el-submenu__title:hover {
    background: rgb(25, 36, 49) !important;
    background-image: url("../../assets/img/image/button_bgshine@2x.png") !important;
    background-position: left!important;
    color: #FFFFFF!important;
    background-size: 120% 100%!important;
    border-radius: 1.2vh;
    /* border-top-left-radius: 1.2vh;
    border-top-right-radius: 1.2vh; */
}

.menu-item-box {
    padding-top: 10px;

    /* // height: 36px; */
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
    height: 40px;
    margin: 8px 0 0 0;
    border-radius: 10px;
    /* // display: inline-block; */
    text-align: center;
    cursor: pointer;

    img {
        width: 80px;
        height: 80px;
    }

}
</style>
