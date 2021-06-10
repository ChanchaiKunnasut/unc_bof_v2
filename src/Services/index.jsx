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

export const CalculateOrder = (selectedProducts) => {
  try {
    let total = 0
    let totalDiscount = 0
    let totalAfterSubDiscount = 0
    let totalVat = 0
    let totalWithOutVat = 0
    selectedProducts.map((product) => {
      const price = product.priceList.findIndex(
        (element) => product.count >= element.qty
      )
      total = total + product.wholesalePrice * product.count
      if (price === -1) {
        totalDiscount = totalDiscount + 0
      } else {
        totalDiscount =
          totalDiscount +
          (total - product.priceList[price].amount * product.count)
      }
    })
    totalAfterSubDiscount = total - totalDiscount
    totalVat = (totalAfterSubDiscount * 0.07).toFixed(2)
    totalWithOutVat = totalAfterSubDiscount - totalVat
    return {
      total,
      totalDiscount,
      totalAfterSubDiscount,
      totalVat,
      totalWithOutVat,
    }
  } catch (e) {}
}

export { LoginServices, LogOutService } from './LoginServices'
export { GetOrders } from './OrderServices'
export { permissionCheck, pathVisible } from './PermissionServices'
