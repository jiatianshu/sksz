
import request from "@/utils/request";

export function getPoList(obj) { //业务中心 警务服务
    return request({
        url: '/smartpark/polices/getList',
        method: 'post',
        data: obj
    })
  }