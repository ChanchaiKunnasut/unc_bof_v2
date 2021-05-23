import { init } from './index'
import Cookie from 'js-cookie'

export const LoginServices = async (username, password) => {
  try {
    const apiInstance = await init()
    await apiInstance
      .request({
        url: '/auth/admin/login',
        method: 'POST',
        data: {
          username,
          password,
        },
      })
      .then((response) => {
        if (response && response.status === 200) {
          Cookie.set('loggedIn', true, { expires: 1 })
          Cookie.set('access_token', 'Bearer ' + response.data.access_token, {
            expires: 1,
          })
          // apiInstance.defaults.headers.common['Authorization'] =
          //   Cookie.get('access_token')
          // apiInstance.get('/users/my/profile').then((response) => {
          // setMe(response.data)
          // history.push('/')
          // return
          // })
        }
      })
  } catch (e) {
    throw e
  }
}

export default LoginServices
