/*
 * @Author: gq
 * @Date: 2022-12-30 21:12:00
 * @LastEditors: gq
 * @LastEditTime: 2023-01-02 19:15:12
 * @Description: 请求异常处理
 */
import { MessageBox } from 'element-ui';
import vuex from '@/store/index';
import router from '@/router/index';

let errObj = {
    "1": {
        callback() {
            vuex.commit("CLEAR_TOKEN");
            MessageBox.alert("登录过期,请重新登录","提示",{
                callback(){
                  router.push("/login");
                }
            })
        }
    }
}

export default function requestError(requset) {
    let obj = errObj[requset.code];
    if (obj) {
        obj.callback && obj.callback(requset);
    }
};