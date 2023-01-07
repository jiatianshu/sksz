/*
 * @Author: gq
 * @Date: 2023-01-07 18:02:32
 * @LastEditors: gq
 * @LastEditTime: 2023-01-07 18:21:20
 * @Description: 智慧园区请求
 */
import request from "@/utils/request";
//智慧园区页-行政区划部分
export function getParkData(data) {
    return request({
        url: '/smartpark/park/index',
        method: 'get',
        params:data
    })
  }
export function getParkList(data) {
    return request({
        url: '/smartpark/park/parkList',
        method: 'post',
        data
    })
  }