import { init } from './index'
import Cookie from 'js-cookie'
// import { useState } from 'react'

export const LoginServices = async (username, password) => {
  // const [accountData, setAccountData] = useState()
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
          apiInstance.defaults.headers.common['Authorization'] =
            Cookie.get('access_token')
          apiInstance.get('/users/my/profile').then((response) => {
            Cookie.set('accountData', JSON.stringify(response.data))
            return
          })
        }
      })
  } catch (e) {
    throw e
  }
}

export const LogOutService = () => {
  Object.keys(Cookie.get()).forEach(function (cookieName) {
    var neededAttributes = {
      // Here you pass the same attributes that were used when the cookie was created
      // and are required when removing the cookie
    }
    Cookie.remove(cookieName, neededAttributes)
  })
}
