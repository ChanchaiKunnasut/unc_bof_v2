import React from 'react'
import { Tabs, Row, Col } from 'antd'

const { TabPane } = Tabs

const callback = (key) => {
  console.log(key)
}
export const OrderingSelectProduct = () => {
  return (
    <Row>
      <Col span={12}>
        <Tabs defaultActiveKey='1' onChange={callback}>
          <TabPane tab='สินค้ารายชิ้น' key='1'>
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab='สินค้าแบบแพ็คเกจ' key='2'>
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </Col>
      <Col span={12}>
        <div className='border-gray-300 border p-4 h-full'>xx</div>
      </Col>
    </Row>
  )
}
