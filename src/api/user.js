/*
 * @Author: gq
 * @Date: 2023-01-07 11:29:10
 * @LastEditors: gq
 * @LastEditTime: 2023-01-07 11:29:31
 * @Description: 用户数据请求
 */
import request from "@/utils/request";

export function getTree(obj) { //获取用户行政区树  --权限判断
    return request({
        url: '/policedata/sysdistrictmenu/getTreeByRole',
        method: 'get',
    })
  }
export function getTreeAll(obj) { //获取用户行政区树 == 全部  不分权限
    return request({
        url: '/policedata/sysdistrictmenu/getTree',
        method: 'get',
    })
  }