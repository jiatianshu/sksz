/*
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-03 19:00:48
 * @Description: file content
 */

import { login } from '@/api/login'

const user = {
  state: {
    token: sessionStorage.getItem("token"),
    user: {
      userId: null,//用户id
      clientId: null,//客户端ID
      userName: null,//用户名
      license: null,//许可
      refreshToken: null,//刷新token
    },
    roles: [],
    // 第一次加载菜单时用到
    loadMenus: false
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      let newToken=`bearer ${token}`;
      state.token = newToken;
      sessionStorage.setItem("token", newToken);
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    CLEAR_TOKEN(state) {
      state.token = null;
      //清空token
      sessionStorage.setItem('token', null);
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          this.commit('SET_TOKEN', res.access_token);
          this.commit('SET_USER', {
            userId: res.user_id,
            clientId: res.client_id,
            userName: res.username,
            license: res.license,
            refreshToken: res.refresh_token,
          });
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },



  }
}



export default user
