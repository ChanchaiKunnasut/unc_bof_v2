import React from 'react'
import { Tabs, Row, Col, List, Avatar } from 'antd'
const { TabPane } = Tabs

const callback = (key) => {
  console.log(key)
}

const products = [
  {
    id: 1,
    name: {
      last: 'test last',
    },
    email: 'test email',
  },
]
export const OrderingSelectProduct = () => {
  return (
    <Row>
      <Col span={12} className='p-5'>
        <Tabs defaultActiveKey='1' onChange={callback}>
          <TabPane tab='สินค้ารายชิ้น' key='1'>
            <List
              dataSource={products}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    avatar={
                      <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                    }
                    title={<a href='https://ant.design'>{item.name.last}</a>}
                    description={item.email}
                  />
                  <div>Content</div>
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
        <div className='border-gray-300 border p-5 h-full'>xx</div>
      </Col>
    </Row>
  )
}
