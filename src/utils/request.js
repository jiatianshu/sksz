
import axios from 'axios'
import router from '@/router/index'
import { Notification, Message } from 'element-ui'
import store from '../store'
// import { getToken } from '@/utils/auth'
import Config from '@/settings'
import qs from 'qs';
import vuex from '@/store/index';
import rqeuestError from '@/config/request-error';
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL, // api 的 base_url
  timeout: Config.timeout // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  config => {
    //获取用户token
    let userToken = vuex.getters.token;
    config.headers['Authorization'] = userToken || "Basic dGVzdDp0ZXN0" // 让每个请求携带自定义token 请根据实际情况自行修改
    if (config.contentType) {
      config.data = qs.stringify(config.data);
      config.headers['Content-Type'] = config.contentType
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status
   
    if (code == 200) {
      return response.data
    } else {
     
      Message({
        message: response.msg || '接口请求失败',
        error: 'warning'
      })


    }
  },
  error => {
    let code = 0
    console.log(error.response.data)
    try {
      code = error.response.data.code
    } catch (e) {

      if (error.toString().indexOf('Error: timeout') !== -1) {
        Notification.error({
          title: '网络请求超时',
          duration: 5000
        })
        return Promise.reject(error)
      }
    }
    rqeuestError(error.response.data);
    if (code) {
      if (code === 401) {
        store.dispatch('LogOut').then(() => {
          // 用户登录界面提示
          location.reload()
        })
      } else if (code === 403) {
        router.push({ path: '/401' })
      } else {
        const errorMsg = error.response.data.message
        if (errorMsg !== undefined) {
          Notification.error({
            title: errorMsg,
            duration: 5000
          })
        }
      }
    } else {
      Message({
        message: '接口请求失败',
        error: 'warning'
      })
    }
    return Promise.reject(error)
  }
)
export default service


// import axios from 'axios';

// const service = axios.create({
//     // process.env.NODE_ENV === 'development' 来判断是否开发环境
//     // easy-mock服务挂了，暂时不使用了
//     // baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
//     timeout: 5000
// });

// service.interceptors.request.use(
//     config => {
//         return config;
//     },
//     error => {
//         console.log(error);
//         return Promise.reject();
//     }
// );

// service.interceptors.response.use(
//     response => {
//         if (response.status === 200) {
//             return response.data;
//         } else {
//             Promise.reject();
//         }
//     },
//     error => {
//         console.log(error);
//         return Promise.reject();
//     }
// );

// export default service;
