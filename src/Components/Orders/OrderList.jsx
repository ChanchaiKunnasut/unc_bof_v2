import React, { useEffect, useState } from 'react'
import {
  Table,
} from 'antd'
import { GetOrders } from '../../Services'
import { columns } from './OrderListTableColumn'

const OrderList = () => {
  const [orderList, setOrderList] = useState([])
  const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   const getOrderList = async () => {
  //     try {
  //       setLoading(true)
  //       const result = await GetOrders()
  //       await setOrderList(result.data.data)
  //       setLoading(false)
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }
  //   getOrderList()
  // }, [])

  return (
    <div>x</div>
    // <Table
    //   columns={columns}
    //   dataSource={orderList}
    //   rowKey='_id'
    //   pagination={{
    //     // defaultCurrent: state.pages.page,
    //     defaultPageSize: 30,
    //     // total: state.pages.total,
    //     // onChange: (page, pageSize) => {
    //     //   setSearchConfig({
    //     //     ...searchConfig,
    //     //     page,
    //     //   })
    //     // },
    //     // onShowSizeChange: (current, size) => {
    //     //   setSearchConfig({
    //     //     ...searchConfig,
    //     //     limit: size,
    //     //   })
    //     // },
    //   }}
    //   loading={loading}
    // />
  )
}
export default OrderList
