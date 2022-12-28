import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'auth/oauth/token',
    method: 'post',
    contentType :'application/x-www-form-urlencoded',
    data
  })
}

export function getInfo() {
  return request({
    url: 'auth/info',
    method: 'get'
  })
}

export function getCodeImg() {
  return request({
    url: 'auth/code',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: 'auth/logout',
    method: 'delete'
  })
}
