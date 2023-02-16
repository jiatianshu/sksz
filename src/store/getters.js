
const getters = {
  //获取token
  token: state => {
    return state.user.token
  },
  //获取用户权限
  roles: state => state.user.roles,
  //获取用户信息
  user: state => state.user.user,
  userid: state => state.user.userid,
  districtList: state=>state.user.userDistrictTree,
  districtListAll: state=>state.user.userDistrictTreeAll
}
export default getters
