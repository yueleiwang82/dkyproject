import instance from '@/utils/fetch'

export function loginByUsername (obj) {
  return instance.post(`/api/sys/login`, obj)
}
// 退出
export function logout () {
  return instance.post(`/api/sys/logout`)
}
// 用户信息
export function getUserInfo () {
  return instance.get(`/api/a/sys/user/userInfo`)
}
// 省市区
export function getArea () {
  return instance.get(`/api/sys/area/listData`)
}
