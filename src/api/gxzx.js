
import request from "@/utils/request";

export function getshareist(obj) { //人脸列表
    return request({
        url: '/smartpark/faceCapture/getList',
        method: 'post',
        data: obj
    })
  }
export function getshareCarist(obj) { //车辆列表
    return request({
        url: '/smartpark/carCapture/getList',
        method: 'post',
        data: obj
    })
  }