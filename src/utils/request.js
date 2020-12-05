// import axios from 'axios'
// import router from '../router'

// const apiBase = process.env.VUE_APP_BASE_URL || 'http://game.qpqptest.com/'
// // const apiBase = process.env.VUE_APP_BASE_URL || "http://192.168.1.149:5000/";
// // const apiBase = "https://game.arkcloudtech.com";

// const service = axios.create({
//   baseURL: apiBase,
//   timeout: 10000
// })

// service.interceptors.request.use(
//   (config) => {
//     if (sessionStorage.token) {
//       config.headers.Authorization = 'Bearer ' + sessionStorage.token
//     }

//     // if (sessionStorage.token_time - parseInt(new Date().getTime() / 1000) < 0) {
//     //   sessionStorage.clear();
//     //   router.push("/login");
//     // }

//     // if (
//     //   sessionStorage.token_time - parseInt(new Date().getTime() / 1000) <
//     //   30 * 60
//     // ) {
//     //   axios
//     //     .get(apiBase + "/api/v1/admin/refresh_token", {
//     //       headers: {
//     //         Authorization: "Bearer " + sessionStorage.token
//     //       }
//     //     })
//     //     .then(function(res) {
//     //       sessionStorage.token = res.data.data.token;
//     //       sessionStorage.token_time = res.data.data.expire_ts;
//     //     })
//     //     .catch(function(error) {
//     //       console.log(error);
//     //     });
//     // }

//     return config
//   },
//   (error) => {
//     console.log(error)
//     return Promise.reject()
//   }
// )

// service.interceptors.response.use(
//   (response) => {
//     if (response.data.success) {
//       // return service(response.config);
//       return response.data
//     } else if (!response.data.success) {
//       // debugger;
//       switch (response.data.code) {
//         case 401:
//           axios
//             .get(apiBase + '/api/v1/admin/refresh_token', {
//               headers: {
//                 Authorization: 'Bearer ' + sessionStorage.token
//               }
//             })
//             .then(function(res) {
//               response.config.headers.Authorization =
//                 'Bearer ' + res.data.data.token

//               sessionStorage.token = res.data.data.token
//               sessionStorage.token_time = res.data.data.expire_ts

//               return service(response.config)
//             })
//             .catch(function(error) {
//               console.log(error)
//               sessionStorage.clear()
//               router.push('/login')
//               return Promise.reject(error)
//             })
//           break
//         case 403:
//         case 20004:
//         case 20005:
//         case 20006:
//           sessionStorage.clear()
//           router.push('/login')
//           return Promise.reject(response.data.msg)
//         default:
//           return Promise.reject(response.data.msg)
//       }
//     }
//   },
//   (error) => {
//     if (error.response.status == 403) {
//       sessionStorage.clear()
//       router.push('/login')
//       return Promise.reject('token失效重新登录')
//     } else {
//       return Promise.reject('请求超时')
//     }
//   }
// )

// export default service

// import axios from 'axios';

// const apiBase = process.env.VUE_APP_BASE_URL || 'https://app.kanqiu178.com';

// const service = axios.create({
//     // process.env.NODE_ENV === 'development' 来判断是否开发环境
//     // easy-mock服务挂了，暂时不使用了
//     baseURL: apiBase,
//     timeout: 5000
// });

// service.interceptors.request.use(
//     config => {
//         return config;
//     },
//     error => {
//         console.log(error);
//         return Promise.reject();
//     }
// );

// service.interceptors.response.use(
//     response => {
//         if (response.status === 200) {
//             return response.data;
//         } else {
//             Promise.reject();
//         }
//     },
//     error => {
//         console.log(error);
//         return Promise.reject();
//     }
// );

// export default service;

import axios from 'axios'

const apiBase = process.env.VUE_APP_BASE_URL || 'http://127.0.0.1:10010'

const service = axios.create({
  // process.env.NODE_ENV === 'development' 来判断是否开发环境
  baseURL: apiBase,
  timeout: 5000
  // withCredentials: true
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  () => {
    // console.error('request', error)
    return Promise.reject()
  }
)

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data
    } else {
      Promise.reject()
    }
  },
  () => {
    // console.error('response', error)
    return Promise.reject()
  }
)

export default service
