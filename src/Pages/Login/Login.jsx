import React from 'react'
import { Row, Col, Card, Form, Input, Button, message } from 'antd'
import { LoginService } from '../../Services'
import { Redirect } from 'react-router'

const Login = (props) => {
  const onFinish = async (values) => {
    try {
      await LoginService(values.username, values.password)
      props.history.push('/order-list')
    } catch (err) {
      message.error('ชื่อผู้ใช้งานหรือรหัสผ่านของท่านไม่ถูกต้อง')
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Row>
        <Col xs={2} sm={9}></Col>
        <Col xs={20} sm={6} className='h-screen'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <Card title='กรุณากรอกชื่อผู้ใช้งานและรหัสผ่าน' className='w-full'>
              <Form
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label='ชื่อผู้ใช้งาน'
                  name='username'
                  rules={[{ required: true, message: 'กรุณาใส่ชื่อผู้ใช้งาน' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label='รหัสผ่าน'
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
                <Form.Item>
                  <Button type='primary' htmlType='submit'>
                    เข้าสู่ระบบ
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
