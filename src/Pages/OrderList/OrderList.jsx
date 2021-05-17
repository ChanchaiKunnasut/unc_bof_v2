import React from 'react'
import { LayoutComponent } from '../../Components'
import { Table } from 'antd'
const columns = [
  {
    title: 'รหัสออเดอร์',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'วันที่/เวลา',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'ชื่อผู้ซื้อ',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'ประเภท',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'คนเปิดออเดอร์',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'ยอดสั่งซื้อ',
    dataIndex: 'age',
    key: 'age',
    // responsive: ['md'],
  },
  {
    title: 'สถานะ',
    dataIndex: 'address',
    key: 'address',
    // responsive: ['lg'],
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
]

const OrderListTable = () => {
  return <Table columns={columns} dataSource={data} />
}

const OrderList = () => {
  return <LayoutComponent ContentPage={<OrderListTable />} />
}
export default OrderList
