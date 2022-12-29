import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import( '../components/common/Home.vue'),
            meta: { title: '全域感知' },
            children: [
                {
                    path: '/dashboard',
                    name:"dashboard",
                    component: () => import( '@/pages/Dashboard.vue'),
                    meta: { title: '数字城市' }
                },
                {
                    path: '/zhyq',
                    name:"zhyq",
                    component: () => import('@/pages/zhyq.vue'),
                    meta: { title: '智慧园区' }
                },
                {
                    path: '/spgl',
                    name:"view-setting",
                    component: () => import( '@/pages/spgl/view-setting.vue'),
                    meta: { title: '视频管理' }
                },
                {
                    path: '/data-center',
                    meta: { title: '数据中心' },
                    children:[
                        {
                            path: '/data-center/personData',
                            name:"personData",
                            component: () => import( '@/pages/dataCenter/personData.vue'),
                            meta: { title: '人员数据' }
                        },
                        {
                            path: '/data-center/carData',
                            name:"carData",
                            component: () => import( '@/pages/dataCenter/carData.vue'),
                            meta: { title: '车辆数据' }
                        },
                        {
                            path: '/data-center/houseData',
                            name:"houseData",
                            component: () => import( '@/pages/dataCenter/houseData.vue'),
                            meta: { title: '房屋数据' }
                        },
                        {
                            path: '/data-center/parkData',
                            name:"parkData",
                            component: () => import( '@/pages/dataCenter/parkData.vue'),
                            meta: { title: '园区数据' }
                        },
                        {
                            path: '/data-center/workData',
                            name:"workData",
                            component: () => import( '@/pages/dataCenter/workData.vue'),
                            meta: { title: '单位数据' }
                        },
                        {
                            path: '/data-center/equipmentData',
                            name:"equipmentData",
                            component: () => import( '@/pages/dataCenter/equipmentData.vue'),
                            meta: { title: '设备数据' }
                        },
                    ]
                },
                {
                    path: '/warningCenter',
                    meta: { title: '预警中心' },
                    children:[
                        {
                            path: '/warningCenter',
                            name:"warningCenter",
                            component: () => import( '@/pages/warning/warningCenter.vue'),
                            meta: { title: '预警中心' }
                        },
                    ]
                },
                {
                    path: '/sharingData',
                    meta: { title: '预警中心' },
                    children:[
                        {
                            path: '/sharingData',
                            component: () => import( '@/pages/sharing/sharingData.vue'),
                            meta: { title: '数据共享' }
                        },
                    ]
                },
                {
                    path: '/policeServices',
                    meta: { title: '业务中心' },
                    children:[
                        {
                            path: '/policeServices',
                            component: () => import( '@/pages/policeServices/policeServices.vue'),
                            meta: { title: '警务服务' }
                        },
                    ]
                },
                {
                    path: '/服务中心',
                    meta: { title: '业务中心' },
                    children:[
                        {
                            path: '/centerServices',
                            component: () => import( '@/pages/centerServices/centerServices.vue'),
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
        // {
        //     path: '*',
        //     redirect: '/404'
        // }
    ]
});
