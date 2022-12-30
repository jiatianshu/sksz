/*
 * @Author: gq
 * @Date: 2022-12-30 21:12:00
 * @LastEditors: gq
 * @LastEditTime: 2022-12-30 22:46:21
 * @Description: 请求异常处理
 */

import vm from 'vue';

let errObj = {
    "1": {
        callback() {
            vm.$sotre.clearToken()
        }
    }
}

export default function requestError(requset) {
    let obj = errObj[requset.code];
    if (obj) {
        obj.callback && obj.callback(requset);
    }
};