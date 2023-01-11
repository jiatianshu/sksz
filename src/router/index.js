/*
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-11 20:04:03
 * @Description: file content
 */


import Vue from 'vue';
import Router from 'vue-router';
import vuex from '@/store/index';


const modulesFiles = require.context('@/pages', true, /\.vue$/)

const modules = modulesFiles.keys().map((modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath)
    let name = moduleName.split("/").join("-");
    return {
        path: "/" + moduleName,
        name: name,
        component: value.default,
        meta:{
            title:value.default.title,
            backType:value.default.backType,
        }
    }
})
console.log(modules)
Vue.use(Router);
let router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import('../components/common/Home.vue'),
            meta: { title: '全域感知' },
            children: modules,
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '@/components/Login.vue'),
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
router.beforeEach((to, from, next) => {
    let token = vuex.getters.token;
    console.log(token,"token")
    if (to.path == "/login") {
        vuex.commit("CLEAR_TOKEN");
        next();
    } else {
        if (!token) next("/login");
        next()
    }
})
export default router
