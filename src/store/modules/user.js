/*
 * @Author: gq
 * @Date: 2022-12-30 19:29:59
 * @LastEditors: gq
 * @LastEditTime: 2023-01-16 22:09:02
 * @Description: file content
 */


import { login } from '@/api/login'
import { getTree,getTreeAll } from '@/api/user'

const user = {
  state: {
    token: sessionStorage.getItem("token"),
    user:JSON.parse(sessionStorage.getItem("userInfo")) ,
    userid:JSON.parse(sessionStorage.getItem("userid")) ,
    rolesid:JSON.parse(sessionStorage.getItem("rolesid")) ,
    userDistrictTree:JSON.parse(sessionStorage.getItem("userDistrictTree"))||[],//用户区域树
    userDistrictTreeAll:JSON.parse(sessionStorage.getItem("userDistrictTreeAll"))||[],//用户区域树
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
    SET_USERID: (state, userid) => {
      sessionStorage.setItem("userid",userid)
      state.userid = userid
    },
    SET_ROLESID: (state, rolesid) => {
      // debugger
      console.log(state,rolesid,"aaaaaaaaaaaaaaaa")
      sessionStorage.setItem("rolesid",rolesid)
      console.log(sessionStorage.getItem("rolesid",rolesid),"sessionStorageidddddddddddd")
      state.rolesid = rolesid
    },
    SET_USER: (state, user) => {
      sessionStorage.setItem("userInfo",JSON.stringify(user))
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
    },
    SET_DISTRICT_TREE_ALL(state, data) {
      sessionStorage.setItem("userDistrictTreeAll", JSON.stringify(data));
      state.userDistrictTreeAll = data;
    }

  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          this.commit('SET_TOKEN', res.access_token);
          this.commit('SET_USERID', res.user_id);
          this.commit('SET_ROLESID', res.roles[0]);
          this.commit('SET_USER', {
            userId: res.user_id,
            clientId: res.client_id,
            userName: res.username,
            license: res.license,
            refreshToken: res.refresh_token,
          });
          this.dispatch("getInfoTree");
          this.dispatch("getInfoTreeAll");

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
    },
    //获取用户行政区树
    getInfoTreeAll() {
      getTreeAll().then(res => {
       
        this.commit('SET_DISTRICT_TREE_ALL', res.data[0].children);
      })
    },
  },
}



export default user
