/*
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-16 22:11:28
 * @Description: file content
 */


import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import store from './store'
import * as echarts from 'echarts';
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';
import './assets/css/const.scss';
import './assets/css/form.scss';
import 'amfe-flexible'

import addCom from './config/addComponent'
import skIconInput from '_c/form/sk-icon-input.vue';
import skIconButton from '_c/form/sk-icon-button.vue';
import skPage from '_c/form/sk-page.vue';
import skTableButton from '_c/form/sk-table-button.vue';
import skTabButton from '_c/form/sk_tab_button.vue';
import skDistrict from '_c/form/sk-district';

import skgetTreedistrict from '_c/form/sk-getTreedistrict';
//经纬度保留两位小数
Vue.filter("location", (val) => {
    try {
        if (val) {
            let x = Number(val);
            return x.toFixed(2)
        }
    } catch (e) {
        return val
    }


})

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(addCom);
Vue.use(ElementUI, {
    size: 'small'
});
const i18n = new VueI18n({
    locale: 'zh',
    messages
});
Vue.component("skIconInput", skIconInput);
Vue.component("skIconButton", skIconButton);
Vue.component("skPage", skPage);
Vue.component("skTableButton", skTableButton);
Vue.component("skTabButton", skTabButton);
Vue.component("skDistrict", skDistrict);
Vue.component("skgetTreedistrict", skgetTreedistrict);



new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app');
