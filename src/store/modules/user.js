/*
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-07 21:26:41
 * @Description: file content
 */


import { login } from '@/api/login'
import { getTree } from '@/api/user'

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
    userDistrictTree:JSON.parse(sessionStorage.getItem("userDistrictTree"))||[],//用户区域树
    roles: [],
    // 第一次加载菜单时用到
    loadMenus: false
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      let newToken = `bearer ${token}`;
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
    },
    SET_DISTRICT_TREE(state, data) {
      sessionStorage.setItem("userDistrictTree", JSON.stringify(data));
      state.userDistrictTree = data;
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
          this.dispatch("getInfoTree");

          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    //获取用户行政区树
    getInfoTree() {
      getTree().then(res => {
       
        this.commit('SET_DISTRICT_TREE', res.data[0].children);
      })
    }
  }
}



export default user
