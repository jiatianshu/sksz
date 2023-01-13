
import request from "@/utils/request";

export function getEquipmentTree() { //视频中心设备树
    return request({
        url: '/policedata/sysdistrictmenu/getEquipmentTree',
        method: 'get',
    })
  }
export function getstatiData() { //视频中心设备树
    return request({
        url: '/im/equipment/statistics',
        method: 'get',
    })
  }
export function getplayVideo(obj) { //根据设备ID获取视频流地址
    return request({
        url: '/im/video/play',
        method: 'get',
        params:obj
    })
  }