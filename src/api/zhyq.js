import request from "@/utils/request";

export function postMonths(obj) {
    return request({
        url: '/policedata/sysdistrictmenu',
        method: 'post',
        data: obj
    })
  }