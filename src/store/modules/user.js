import { login, getInfo, logout } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: "",
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
      state.token = 'bearer ' +sessionStorage.getItem("token")
      // state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          // setToken(res.token, rememberMe)
          sessionStorage.setItem('token',res.access_token)
          
          
         this.commit('SET_TOKEN', res.access_token);
         this.commit('SET_USER', {
            userId: res.user_id,
            clientId: res.client_id,
            userName: res.username,
            license: res.license,
            refreshToken: res.refresh_token,
          });
          // 设置用户信息
          setUserInfo(res.user, commit)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          setUserInfo(res, commit)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(res => {
          logOut(commit)
          resolve()
        }).catch(error => {
          logOut(commit)
          reject(error)
        })
      })
    },
  }
}

export const logOut = (commit) => {
  commit('SET_TOKEN', '')
  commit('SET_ROLES', [])
  removeToken()
}

export const setUserInfo = (res, commit) => {
  // 如果没有任何权限，则赋予一个默认的权限，避免请求死循环
  if (res.roles.length === 0) {
    commit('SET_ROLES', ['ROLE_SYSTEM_DEFAULT'])
  } else {
    commit('SET_ROLES', res.roles)
  }
  commit('SET_USER', res.user)
}

export default user
