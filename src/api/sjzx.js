
import request from "@/utils/request";

export function getperList(obj) {
    return request({
        url: '/smartpark/persons/getList',
        method: 'post',
        data: obj
    })
  }