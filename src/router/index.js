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
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '全域感知' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '数字城市' }
                },
             
            
            
           
         
                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/donate',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/Donate.vue'),
                    meta: { title: '支持作者' }
                }
            ]
        },
        {
            path: '/dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
            meta: { title: '全域感知' },
            children:[
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '数字城市' }
                },
            ]
        },
        {
            path: '/zhyq',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '智慧中心' },
            children:[
                {
                    path: '/zhyq',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/zhyq.vue'),
                    meta: { title: '智慧园区' }
                },
            ]
        },
        {
            path: '/spgl',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '视频中心' },
            children:[
                {
                    path: '/spgl',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/spgl/spgl.vue'),
                    meta: { title: '视频管理' }
                },
            ]
        },
        {
            path: '/personData',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '数据中心' },
            children:[
              
                {
                    path: '/personData',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/dataCenter/personData.vue'),
                    meta: { title: '人员数据' }
                },
                {
                    path: '/carData',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/dataCenter/carData.vue'),
                    meta: { title: '车辆数据' }
                },
                {
                    path: '/houseData',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/dataCenter/houseData.vue'),
                    meta: { title: '房屋数据' }
                },
                {
                    path: '/parkData',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/dataCenter/parkData.vue'),
                    meta: { title: '园区数据' }
                },
                {
                    path: '/workData',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/dataCenter/workData.vue'),
                    meta: { title: '单位数据' }
                },
                {
                    path: '/equipmentData',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/dataCenter/equipmentData.vue'),
                    meta: { title: '设备数据' }
                },
            ]
        },

        {
            path: '/warningCenter',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '预警中心' },
            children:[
                {
                    path: '/warningCenter',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/warning/warningCenter.vue'),
                    meta: { title: '预警中心' }
                },
            ]
        },
        {
            path: '/sharingData',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '预警中心' },
            children:[
                {
                    path: '/sharingData',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/sharing/sharingData.vue'),
                    meta: { title: '数据共享' }
                },
            ]
        },
        {
            path: '/policeServices',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '业务中心' },
            children:[
                {
                    path: '/policeServices',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/policeServices/policeServices.vue'),
                    meta: { title: '警务服务' }
                },
            ]
        },
        {
            path: '/服务中心',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '业务中心' },
            children:[
                {
                    path: '/centerServices',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/centerServices/centerServices.vue'),
                    meta: { title: '服务中心' }
                },
            ]
        },

        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
