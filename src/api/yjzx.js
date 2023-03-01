
import request from "@/utils/request";

export function getWarningList(obj) { //预警中心
    return request({
        url: '/smartpark/tearlywarning/getWarningList',
        method: 'post',
        data: obj
    })
  }
export function getWarningInfo(data) { //详情
    return request({
        url: '/smartpark/tearlywarning/getWarningInfo',
        method: 'get',
        params:data
    })
  }
