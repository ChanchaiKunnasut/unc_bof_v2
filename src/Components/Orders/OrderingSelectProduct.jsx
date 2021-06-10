import React, { useState, useEffect } from 'react'
import { Tabs, Row, Col, List, Avatar, Button, InputNumber } from 'antd'
import { CalculateOrder } from '../../Services'
const { TabPane } = Tabs

const callback = (key) => {
  console.log(key)
}
const initCalculatedOrder = {
  total: 0,
  totalDiscount: 0,
  totalAfterSubDiscount: 0,
  totalVat: 0,
  totalWithOutVat: 0,
}
export const OrderingSelectProduct = ({ productList }) => {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [calculatedOrder, setCalculatedOrder] = useState(initCalculatedOrder)
  const increaseProduct = (item) => {
    let selected = selectedProducts
    const selectedProduct = selectedProducts.findIndex(
      (products) => products._id === item._id
    )
    if (selectedProduct === -1) {
      item.count = 1
      selected.push(item)
    } else {
      selected[selectedProduct].count = ++selected[selectedProduct].count
    }
    setSelectedProducts([...selected])
  }

  const decreaseProduct = (item) => {
    let selected = selectedProducts
    const selectedProduct = selectedProducts.findIndex(
      (products) => products._id === item._id
    )
    if (selectedProduct === -1) {
    } else {
      selected[selectedProduct].count = --selected[selectedProduct].count
      if (selected[selectedProduct].count === 0) {
        selected.splice(selectedProduct, 1)
      }
    }
    setSelectedProducts([...selected])
  }

  useEffect(() => {
    setCalculatedOrder(CalculateOrder(selectedProducts))
  }, [selectedProducts])

  return (
    <Row>
      <Col span={12} className='p-5'>
        <Tabs defaultActiveKey='1' onChange={callback}>
          <TabPane tab='สินค้ารายชิ้น' key='1'>
            <List
              dataSource={productList}
              renderItem={(item) => (
                <List.Item key={item._id}>
                  <List.Item.Meta
                    avatar={
                      <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                    }
                    title={`Name: ${item.name}`}
                    description={`ชื่อ: ${
                      item.name_th ? item.name_th : '-'
                    } ราคา: ${item.wholesalePrice}/ชิ้น`}
                  />
                  <div>
                    <Button onClick={() => decreaseProduct(item)}>-</Button>
                    <InputNumber
                      min={0}
                      readOnly
                      defaultValue={0}
                      value={item.count ? item.count : 0}
                    />
                    <Button onClick={() => increaseProduct(item)}>+</Button>
                  </div>
                </List.Item>
              )}
            ></List>
          </TabPane>
          <TabPane tab='สินค้าแบบแพ็คเกจ' key='2' disabled>
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </Col>
      <Col span={12}>
        <div className='border-gray-300 border p-5 h-full'>
          สรุปรายการสั่งซื้อ
          {selectedProducts.map((obj) => {
            return (
              <div key={obj._id}>
                {obj.name} {obj.count} <br />
              </div>
            )
          })}
          ยอดรวม {calculatedOrder.total} <br />
          ส่วนลด {calculatedOrder.totalDiscount} <br />
          ยอดรวมหลังหักส่วนลด {calculatedOrder.totalAfterSubDiscount} <br />
          ราคาสินค้าไม่รวมภาษี {calculatedOrder.totalWithOutVat} <br />
          vat 7% {+calculatedOrder.totalVat} <br />
          ยอดที่ต้องชำระ{' '}
          {+calculatedOrder.totalWithOutVat + +calculatedOrder.totalVat}
        </div>
      </Col>
    </Row>
  )
}
