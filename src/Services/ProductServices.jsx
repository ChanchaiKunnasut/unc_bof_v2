import { init } from './index'
import Cookie from 'js-cookie'

export const GetProducts = async (config = { limit: 50, page: 1 }) => {
  try {
    const apiInstance = await init()
    apiInstance.defaults.headers.common['Authorization'] =
      Cookie.get('access_token')
    let search = ''
    Object.keys(config).map((c) => {
      search += `&${c}=${config[c]}`
      return null
    })
    const result = await apiInstance
      .request({
        url: `/products?${search}`,
        method: 'GET',
      })
      .then((response) => {
        return response
      })
    return result
  } catch (e) {
    console.error(e)
    return e
  }
}
