/*
 * @Author: gq
 * @Date: 2022-12-30 19:29:58
 * @LastEditors: gq
 * @LastEditTime: 2022-12-30 21:35:54
 * @Description: file content
 */
import request from '@/utils/request'

/**
 * @description: 用户登录
 * @param {*} 
 */
export function login(data) {
  return request({
    url: 'auth/oauth/token',
    method: 'post',
    contentType :'application/x-www-form-urlencoded',
    data
  })
}

