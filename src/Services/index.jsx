import jwt from 'jsonwebtoken'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : 'https://unc-uat-api.allboxstudio.com/api'
const SECRET_KEY = 'c08cb732a5e343e13421dca1b232a0f2'
let API_KEY

export const init = () => {
  API_KEY = jwt.sign({}, SECRET_KEY)
  const apiInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 180000,
    headers: {
      'X-API-KEY': API_KEY,
      'Content-Type': 'application/json',
    },
  })
  return apiInstance
}

export { default as LoginServices } from './LoginServices'
export { GetOrders } from './OrderServices'
