/*
 * @Author: gq
 * @Date: 2023-01-07 18:02:32
 * @LastEditors: gq
 * @LastEditTime: 2023-01-11 19:41:11
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
  //智慧园区页-园区信息页
export function getParkInfo(data) {
    return request({
        url: '/smartpark/park/getParkInfo',
        method: 'get',
        params:data
    })
  }
  //智慧园区页-园区抓拍预览
export function getParkAbilityPreview(data) {
    return request({
        url: '/smartpark/park/getParkAbilityPreview',
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
export function getVideoData(data) {
    return request({
        url: '/im/video/playPark',
        method: 'get',
        params:data
    })
  }