
import request from "@/utils/request";

export function getperList(obj) { //人员信息列表
    return request({
        url: '/smartpark/persons/getList',
        method: 'post',
        data: obj
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
export function getHouseList(obj) {  //房屋信息列表
    return request({
        url: '/smartpark/parkhouse/getHouseList',
        method: 'post',
        data: obj
    })
  }
export function getParkList(obj) {  //园区信息列表
    return request({
        url: '/smartpark/park/parkList',
        method: 'post',
        data: obj
    })
  }
export function getWorkList(obj) {  //单位信息列表
    return request({
        url: '/smartpark/company/getList',
        method: 'post',
        data: obj
    })
  }
export function getEquipmentList(obj) {  //设备信息列表
    return request({
        url: '/smartpark/equipment/getEquipmentList',
        method: 'post',
        data: obj
    })
  }