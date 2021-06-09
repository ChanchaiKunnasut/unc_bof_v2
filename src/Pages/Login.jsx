import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Form, Input, Button, message } from 'antd'
import { LoginServices } from '../Services'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Cookies from 'js-cookie'
import { Route, Redirect } from 'react-router-dom'

const Login = (props) => {
  const [loading, setLoading] = useState(false)
  const onFinish = async (values) => {
    try {
      setLoading(true)
      await LoginServices(values.username, values.password)
      setLoading(false)
      message.success('ลงชื่อเข้าใช้งานสำเร็จ')
      props.history.push('/')
    } catch (err) {
      setLoading(false)
      message.error('ชื่อผู้ใช้งานหรือรหัสผ่านของท่านไม่ถูกต้อง')
    }
  }

  useEffect(() => {
    Cookies.get('loggedIn') && props.history.push('/') 
  }, [props])

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
              >
                <Form.Item
                  // label='ชื่อผู้ใช้งาน'
                  name='username'
                  rules={[{ required: true, message: 'กรุณาใส่ชื่อผู้ใช้งาน' }]}
                >
                  <Input
                    prefix={<UserOutlined className='site-form-item-icon' />}
                    placeholder='ชื่อผู้ใช้งาน'
                  />
                </Form.Item>
                <Form.Item
                  name='password'
                  rules={[
                    {
                      required: true,
                      message: 'กรุณาใส่รหัสผ่าน',
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className='site-form-item-icon' />}
                    type='password'
                    placeholder='Password'
                  />
                </Form.Item>
                <Form.Item>
                  <Button type='primary' htmlType='submit' loading={loading}>
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
