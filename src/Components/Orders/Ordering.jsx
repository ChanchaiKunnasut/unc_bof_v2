import React from 'react'
import { Divider } from 'antd'
import { OrderingSelectProduct } from './OrderingSelectProduct'

export const Ordering = () => {
  return (
    <div className='bg-white p-4'>
      <Divider orientation='left'>กรุณาเลือกสินค้า</Divider>
      <OrderingSelectProduct />
    </div>
  )
}
