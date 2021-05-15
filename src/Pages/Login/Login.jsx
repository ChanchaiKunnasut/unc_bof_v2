import React from 'react'
import { Row, Col, Card, Form, Input, Button } from 'antd'

const Login = () => {
  const layout = {
    // labelCol: { span: 8 },
    // wrapperCol: { span: 16 },
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <Row>
        โ<Col xs={2} sm={9}></Col>
        <Col xs={20} sm={6} className='h-screen'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <Card title='Login' className='w-full'>
              <Form
                {...layout}
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label='Username'
                  name='username'
                  rules={[{ required: true, message: 'กรุณาใส่ชื่อผู้ใช้งาน' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label='Password'
                  name='password'
                  rules={[
                    {
                      required: true,
                      message: 'กรุณาใส่รหัส',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type='primary' htmlType='submit'>
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </Col>
        <Col xs={2} sm={9}></Col>
      </Row>
    </>
  )
}

export default Login
