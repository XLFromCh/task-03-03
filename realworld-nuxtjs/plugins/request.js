import axios from 'axios'


export const request = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com'
})

export default ({ store }) => {

  request.interceptors.request.use(function (config) {

    const { user } = store.state

    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }

    // 返回 config 请求配置对象
    return config
  }, function (error) {
    return Promise.reject(error)
  })
}
