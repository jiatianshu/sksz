<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <!-- <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div> -->
        <div>
            <div class="title_nav">
                <img style="margin: auto;
              " src="../../assets/img/image/logo.png" alt="" srcset="">
            </div>
        </div>
        <div class="rgt_title">
            <div class="logo">
                <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->
                <div style="margin: 0 0 0 36px;" class="tit_cl">{{ title }}</div>
            </div>
            <div class="header-right">
                <div class="header-user-con">
                    <!-- 全屏显示 -->
                    <div class="btn-fullscreen">
                        <el-badge :value="12" class="item">
                            <img src="@/assets/img/icon/ic_bell_outline2x.png" alt="">
                        </el-badge>
                    </div>


                    <div class="user-info-box">
                        <div class="user-avator">
                            <img src="../../assets/img/img.jpg" />
                        </div>
                        <!-- 用户名下拉菜单 -->
                        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                            <div style="width:120px">
                                <span class="el-name-link">
                                    {{ username }}
                                </span>
                                <br>
                                <span style="font-size: 12px;color: #757B8C;">
                                    {{ email }}
                                </span>
                            </div>
                            <div style="font-size:30px;color: #757B8C;">
                                ...
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
import bus from '../common/bus';
import Breadcrumb from '@/components/breadcrumbnew'
export default {
    components: {
        Breadcrumb,
    },
    data() {
        return {
            title: '',
            tabtitle: '',
            collapse: false,
            fullscreen: false,
            name: 'linxin',
            email: "xxxxxxxx@qq.com",
            message: 2,
            tagsList: [],

        };
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    watch: {
        $route: {
            handler(newVal) {
                this.title = newVal.meta.title;
               
            },
            immediate: true
        }
    },

    methods: {

        handleTags(command) {
            command === 'other' ? this.closeOther() : this.closeAll();
        },
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username');
                this.$router.push('/login');
            }
        },
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },

    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
      
    }
};
</script>
<style scoped lang="scss">
::v-deep .el-badge__content {
    background: #FA2256;
    border: none;
}
::v-deep .el-dropdown{
    display: flex;
}
.user-info-box {
    width: 250px;
    background: #282C38;
    display: flex;
    height: 100%;
    padding-top: 20px;
    cursor: pointer;
}

.header {
    /* position: relative;
    box-sizing: border-box; */
    /* width: 100%; */
    height: 70px;
    margin: 0 0 20px 0;
    font-size: 22px;
    display: flex;
    color: #fff;

}

.rgt_title {
    width: 100%;
    background: rgba(30, 31, 37, 0.88);
    margin: 0 0 0 20px;
    height: 80px;
    border-radius: 20px;
    // border-radius: 1.2vh;
    overflow: hidden;
}

.title_nav {
    background: rgba(30, 31, 37, 0.88);
    width: 250px;
    height: 80px;
    border-radius: 20px;
    /* line-height: 68px; */
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    text-align: center;
}

.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}

.header .logo {
    float: left;
    /* width: 250px; */
    line-height: 70px;
}

.header-right {
    float: right;
    // padding-right: 50px;
}

.header-user-con {
    display: flex;
    height: 80px;
    align-items: center;
}

.btn-fullscreen {
    padding-top: 10px;
    margin-right: 30px;

    img {

        width: 28px;
        height: 28px;
    }
}



.tit_cl {
    font-size: 16px;
    line-height: 80px;
}

.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}

.btn-bell .el-icon-bell {
    color: #fff;
}

.user-name {
    margin-left: 10px;
}

.user-avator {
    margin-left: 20px;

}

.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.el-name-link {
    color: #fff;
    font-size: 14px;

    cursor: pointer;
}

.el-dropdown-menu__item {
    text-align: center;
}
</style>