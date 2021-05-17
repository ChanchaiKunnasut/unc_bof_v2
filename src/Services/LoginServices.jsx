import { init } from './index'

export const LoginServices = async (username, password) => {
  const apiInstance = await init()
  const result = await apiInstance
    .request({
      url: '/auth/admin/login',
      method: 'POST',
      data: {
        username,
        password,
      },
    })
    .then((response) => {
      return response
    })

  return result
}

export default LoginServices
