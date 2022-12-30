import Vue from 'vue';
import Router from 'vue-router';
import vuex from '@/store/index';
Vue.use(Router);
let router=new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import('../components/common/Home.vue'),
            meta: { title: '全域感知' },
            children: [
                {
                    path: '/dashboard',
                    name: "dashboard",
                    component: () => import('@/pages/Dashboard.vue'),
                    meta: { title: '数字城市' }
                },
                {
                    path: '/zhyq',
                    name: "zhyq",
                    component: () => import('@/pages/zhyq.vue'),
                    meta: { title: '智慧园区' }
                },
                {
                    path: '/spgl',
                    name: "view-setting",
                    component: () => import('@/pages/spgl/view-setting.vue'),
                    meta: { title: '视频管理' }
                },
                {
                    path: '/personData',
                    name: "personData",
                    component: () => import('@/pages/dataCenter/personData.vue'),
                    meta: { title: '人员数据' }
                },
                {
                    path: '/carData',
                    name: "carData",
                    component: () => import('@/pages/dataCenter/carData.vue'),
                    meta: { title: '车辆数据' }
                },
                {
                    path: '/data-center/houseData',
                    name: "houseData",
                    component: () => import('@/pages/dataCenter/houseData.vue'),
                    meta: { title: '房屋数据' }
                },
                {
                    path: '/data-center/parkData',
                    name: "parkData",
                    component: () => import('@/pages/dataCenter/parkData.vue'),
                    meta: { title: '园区数据' }
                },
                {
                    path: '/data-center/workData',
                    name: "workData",
                    component: () => import('@/pages/dataCenter/workData.vue'),
                    meta: { title: '单位数据' }
                },
                {
                    path: '/data-center/equipmentData',
                    name: "equipmentData",
                    component: () => import('@/pages/dataCenter/equipmentData.vue'),
                    meta: { title: '设备数据' }
                },
                {
                    path: '/warningCenter',
                    meta: { title: '预警中心' },
                    children: [
                        {
                            path: '/warningCenter',
                            name: "warningCenter",
                            component: () => import('@/pages/warning/warningCenter.vue'),
                            meta: { title: '预警中心' }
                        },
                    ]
                },
                {
                    path: '/sharingData',
                    meta: { title: '预警中心' },
                    children: [
                        {
                            path: '/sharingData',
                            component: () => import('@/pages/sharing/sharingData.vue'),
                            meta: { title: '数据共享' }
                        },
                    ]
                },
                {
                    path: '/policeServices',
                    meta: { title: '业务中心' },
                    children: [
                        {
                            path: '/policeServices',
                            component: () => import('@/pages/policeServices/policeServices.vue'),
                            meta: { title: '警务服务' }
                        },
                    ]
                },
                {
                    path: '/服务中心',
                    meta: { title: '业务中心' },
                    children: [
                        {
                            path: '/centerServices',
                            component: () => import('@/pages/centerServices/centerServices.vue'),
                            meta: { title: '服务中心' }
                        },
                    ]
                },
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '@/pages/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '/404',
            component: () => import(/* webpackChunkName: "404" */ '@/pages/404.vue'),
            meta: { title: '404' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ],


});
    //使用钩子函数对路由进行权限跳转
 router.beforeEach((to, from, next) =>{
        let token =vuex.getters.token;
        if(to.path=="/login"){
            vuex.commit("CLEAR_TOKEN");
            next();
        }else{
            if(!token)next("/login");
            next()
        }
      
        // document.title = `${to.meta.title} | vue-manage-system`;
        // const role = localStorage.getItem('ms_username');
        // if (!role && to.path !== '/login') {
        //     next('/login');
        // } else if (to.meta.permission) {
        //     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        //     role === 'admin' ? next() : next('/403');
        // } else {
        //     // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        //     if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
        //         Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        //             confirmButtonText: '确定'
        //         });
        //     } else {
        //         next();
        //     }
        // }
    })
export default router
