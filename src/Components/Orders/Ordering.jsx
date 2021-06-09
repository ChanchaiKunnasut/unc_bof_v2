import React, { useState, useEffect } from 'react'
import { Divider } from 'antd'
import { OrderingSelectProduct } from './OrderingSelectProduct'
import { GetProducts } from '../../Services/ProductServices'

export const Ordering = () => {
  const [productList, setProductList] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(false)
  useEffect(() => {
    const getOrderList = async () => {
      try {
        setLoadingProducts(true)
        const result = await GetProducts()
        await setProductList(result.data.data)
        setLoadingProducts(false)
      } catch (e) {
        console.error(e)
      }
    }
    getOrderList()
  }, [])
  return (
    <div className='bg-white p-4'>
      <Divider orientation='left'>กรุณาเลือกสินค้า</Divider>
      <OrderingSelectProduct
        productList={productList}
        loadingProducts={loadingProducts}
      />
    </div>
  )
}
