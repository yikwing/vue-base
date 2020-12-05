import request from '../utils/request'

// Get
export const getWxList = (query) => {
  return request({
    url: '/ping',
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

// Github
export const getGithubShort = (query) => {
  return request({
    url: '/create',
    method: 'post',
    data: query
  })
}
