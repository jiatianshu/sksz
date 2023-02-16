<!--
 * @Author: gq
 * @Date: 2023-02-14 18:38:54
 * @LastEditors: gq
 * @LastEditTime: 2023-02-14 19:19:20
 * @Description: file content
-->

<template>

    <div class="boxx" v-if="type">
        预警中心0000

    </div>

</template>
<script>
    import { mapGetters } from "vuex";
    export default {
        name: 'warningCenterdio',
        title: "预警中心 > 预警中心",

        data() {
            return {
                type: false,
                sse_userId: '',
                sse_roleId: '',
            };
        },
        // computed: {
        //     ...mapGetters(['userid'])
        // },
        computed: {
            // userid() {

            //     console.log(this.$store.getters.userid, "this.$store.getters.userddddd")
            //     return sessionStorage.getItem("userid")
            // },
      
        },
        methods: {
            show() {
                this.type = true;
            },
            hide() {
                this.type = false;
            },

            eventData() {
                this.sse_userId =sessionStorage.getItem("userid")
                this.sse_roleId =sessionStorage.getItem("rolesid")
                var serverUrl = process.env.VUE_APP_SERVER_URL
                var eventSource = new EventSource(serverUrl+"/sseservice/ssePush/connect/" + this.sse_userId + "/" + this.sse_roleId);
                // this.$fullLoginAd().show()
                eventSource.addEventListener("message", function (evt) {
                    debugger
                    var data = evt.data;

                    var json = JSON.parse(data);
                    console.log(json, "jsonjsonjson")
                    // if (json[0].type == 1) {
                    //     setTimeout(function () {     //黑名单
                    //         vm.check_bj_lx_show = true
                    //         vm.changeon()
                    //     }, 80)
                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = false
                    //         vm.check_blackLish_lx_show = true
                    //         vm.flyImg_bk = true
                    //         vm.inform_blackList_lx = json
                    //     }, 4000)
                    // }

                    // if (json[0].type == 2) {       //火焰
                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = true
                    //         vm.changeon()
                    //     }, 80)

                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = false
                    //         vm.check_flameLish_lx_show = true
                    //         vm.flyImg_fl = true
                    //         vm.fla_blackList_lx = json
                    //     }, 4000)
                    // }
                    // if (json[0].type == 3) { //人群聚集
                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = true
                    //         vm.changeon()
                    //     }, 80)

                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = false
                    //         vm.check_cro_lx_show = true
                    //         vm.flyImg_cro = true
                    //         vm.cro_blackList_lx = json
                    //     }, 4000)
                    // }

                    // if (json[0].type == 4) {  //消防通道占用
                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = true
                    //         vm.changeon()
                    //     }, 80)

                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = false
                    //         vm.check_access_lx_show = true
                    //         vm.flyImg_acce = true
                    //         vm.acess_blackList_lx = json
                    //     }, 4000)
                    // }
                    // if (json[0].type == 5) {  //

                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = true
                    //         vm.changeon()
                    //     }, 80)

                    //     setTimeout(function () {
                    //         vm.codelist = []
                    //         vm.check_bj_lx_show = false
                    //         vm.check_emergency_yjqz = true
                    //         vm.inform_emergency_List = json

                    //     }, 4000)
                    // }
                    // if (json[0].type == 6) {  //人员预警

                    //     setTimeout(function () {
                    //         vm.check_bj_lx_show = true

                    //         vm.changeon()
                    //     }, 80)

                    //     setTimeout(function () {
                    //         vm.codelist = []
                    //         vm.check_bj_lx_show = false
                    //         vm.check_emergency_xqry = true
                    //         vm.flyImg_acper = true
                    //         vm.inform_xqper_List = json

                    //     }, 4000)
                    // }



                    //insertFn(json.payload.timestamp)


                    // insertFn(timestamp)
                });
                eventSource.addEventListener('error', function (ev) {
                    console.log('sse server disconnected')
                })

            }
        },
        mounted() {

        },
        created() {
            this.eventData()
            this.sse_userId = sessionStorage.getItem("userid")
            this.sse_roleId = sessionStorage.getItem("rolesid")
            // console.log(sessionStorage.getItem("userid"), "??????000000")
            // console.log(this.$store.getters.user, "??????222")
        }
    };
</script>
<style scoped lang="scss">
    .boxx {
        width: 460px;
        height: 400px;
        position: fixed;
        background-color: rgb(22, 24, 57);
        border-radius: 10px;
        color: #fff;
        z-index: 999999;
        top: 30%;
        left: 42%;
    }
</style>