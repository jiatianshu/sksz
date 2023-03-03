<template>
    <div class="login-wrap">
        <video src="../assets/video/bg-video.mp4" style="width:100%;height: 100%; object-fit: cover;" autoplay loop
            muted></video>
        <!-- <div :class="all_open_data"> <el-button @click="drawerLogin" type="primary" style="margin-left: 16px;">
                点我打开
            </el-button></div> -->

        <!-- <el-drawer :append-to-body="true" :with-header="false" :wrapperClosable="true" :visible.sync="drawer"> -->
        <div class="ms-login">
            <div class="ms-title">
                <img class="img_class_logo" src="../assets/img/image/logologin.png" alt="">
            </div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username" style="margin: 0 0 24px 0;">
                    <el-input v-model="param.username" placeholder="请输入账号">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" style="margin: 0 0 24px 0;">
                    <el-input type="password" placeholder="请输入密码" v-model="param.password"
                        @keyup.enter.native="submitForm()">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>

            </el-form>
        </div>
        <!-- </el-drawer> -->

    </div>
</template>

<script>
    import { Encrypt } from "../utils/AesEncryptUtil"//地址根据自己的项目修改
    export default {
        name: "login",
        data: function () {
            return {
                param: {
                    username: '',
                    password: '',
                },
                all_open_data: 'all_open',
                rules: {
                    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                },
                drawer: false,
            };
        },
        methods: {
            drawerLogin() {
                this.drawer = true
                this.all_open_data = 'all_open_op'
            },
            submitForm() {
                let key='pigxpigxpigxpigx';//密钥值随意定义，和后端商议保持一致
                this.$router.push('/');
                this.$refs.login.validate(valid => {
                    if (valid) {
                        const user = {
                            username: this.param.username,
                            password: Encrypt(this.param.password,key),//对密码进行AES加密
                            scope: "server",
                            "grant_type": "password",
                        }
                        this.$store
                            .dispatch('Login', user)
                            .then(() => {
                                this.$message.success('登录成功');
                                sessionStorage.setItem("username", this.param.username,);
                                this.$router.push('/').catch(() => { });
                            })
                    } else {
                        this.$message.error('请输入账号和密码');
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
    };
</script>

<style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        /* background-image: url(../assets/img/login-bg.jpg); */
        background-size: 100%;
    }

    .ms-title {
        width: 100%;
        /* line-height: 50px; */
        text-align: center;
        font-size: 20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }

    .ms-content {
        padding: 30px 30px;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: bold;
    }

    .login-tips {
        font-size: 12px;
        line-height: 30px;
        color: #fff;
    }

    .img_class_logo {
        width: 120px;
        height: 120px;
    }

    .el-button {}

    .login-wrap::before {
        content: '';
        background: rgba(0, 0, 0, .4);
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
        z-index: 0;
    }

    .all_open {
        position: absolute;
        top: 50%;
        left: 36%;

    }

    .all_open_op {
        position: absolute;
        top: 50%;
        left: 26%;

    }

    ::v-deep.el-drawer__body {
        background: #181818 !important;
    }
</style>