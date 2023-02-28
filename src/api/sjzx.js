
import request from "@/utils/request";

export function getperList(obj) { //人员信息列表
    return request({
        url: '/smartpark/persons/getList',
        method: 'post',
        data: obj
    })
  }
export function getHousesInfo(obj) { //人员id获取房屋信息详情
    return request({
        url: '/smartpark/persons/getHousesInfo',
        method: 'get',
        params:obj
    })
  }
export function getCarInfo(obj) { //人员id获取车辆信息详情
    return request({
        url: '/smartpark/persons/getCarInfo',
        method: 'get',
        params:obj
    })
  }
export function getstatisticsList() { //人员数据统计
    return request({
        url: '/smartpark/persons/statistics',
        method: 'get',
    })
  }
export function getCarList(obj) {   //车辆信息列表
    return request({
        url: '/smartpark/cars/getList',
        method: 'post',
        data: obj
    })
  }
  export function getsCarstatList() { //车辆数据统计getsHousetatList
    return request({
        url: '/smartpark/cars/statistics',
        method: 'get',
    })
  }
export function getHouseList(obj) {  //房屋信息列表
    return request({
        url: '/smartpark/parkhouse/getHouseList',
        method: 'post',
        data: obj
    })
  }
  export function getsHousetatList() { //房屋数据统计getsHousetatList
    return request({
        url: '/smartpark/parkhouse/statistics',
        method: 'get',
    })
  }
export function getParkList(obj) {  //园区信息列表
    return request({
        url: '/smartpark/park/parkList',
        method: 'post',
        data: obj
    })
  }
  export function getsParktatList() { //园区数据统计
    return request({
        url: '/smartpark/park/statistics',
        method: 'get',
    })
  }
export function getWorkList(obj) {  //单位信息列表
    return request({
        url: '/smartpark/company/getList',
        method: 'post',
        data: obj
    })
  }
  export function getscompanList() { //danwei数据统计
    return request({
        url: '/smartpark/company/statistics',
        method: 'get',
    })
  }
export function getEquipmentList(obj) {  //设备信息列表
    return request({
        url: '/smartpark/equipment/getEquipmentList',
        method: 'post',
        data: obj
    })
  }
  export function getsequipmanList() { //设备数据统计
    return request({
        url: '/smartpark/equipment/statistics',
        method: 'get',
    })
  }
    //城市 行政区  街道 园区
  export function getMenuList(obj) { //设备数据统计
    return request({
        url: '/policedata/sysdistrictmenu/getMenu?parentId='+obj,
        method: 'get',
    })
  }

