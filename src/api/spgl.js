
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