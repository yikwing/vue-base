import request from '../utils/request'

// Get
export const getWxList = (query) => {
  return request({
    url: '/comments',
    method: 'get',
    params: query
  })
}

// Post
export const modifyAdminOwnPwd = (query) => {
  return request({
    url: '/api/v1/admin/modify_admin_own_pwd',
    method: 'post',
    data: query
  })
}
