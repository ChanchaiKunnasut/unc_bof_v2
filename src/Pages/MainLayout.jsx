import React, { useEffect, useState } from 'react'
import { Button, Layout, Menu, Popconfirm } from 'antd'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { OrderDetail, OrderList, ProductList } from '../Components'
import { LogOutService } from '../Services'
import Cookie from 'js-cookie'
const { Header, Content, Footer, Sider } = Layout
const MainLayout = (props) => {
  const [content, setContent] = useState(null)
  const [createButtonName, setCreateButtonName] = useState('')
  const [contentName, setContentName] = useState('')
  const [componentType, setComponentType] = useState('list')
  const handleMenuClicked = (e) => {
    switch (+e.key) {
      case 1:
        setContent(<OrderList accountData={Cookie.getJSON('accountData')} />)
        setCreateButtonName('+ สร้างคำสั่งซื้อ')
        break
      case 2:
        setContent(<ProductList accountData={Cookie.getJSON('accountData')} />)
        break
      default:
        setContent(<div>ERROR: 404 Page not found</div>)
    }
  }
  useEffect(() => {
    setContent(<OrderList accountData={Cookie.getJSON('accountData')} />)
    setCreateButtonName('+ สร้างคำสั่งซื้อ')
    setContentName('order')
  }, [])

  const handleLogoutClick = () => {
    LogOutService()
    props.history.push('/login')
  }

  const handleCreate = () => {
    switch (contentName) {
      case 'order':
        setContent(<OrderDetail />)
        setComponentType('detail')
        break
      default:
        break
    }
  }
  return (
    <Layout>
      <Sider breakpoint='lg' collapsedWidth='0'>
        <div className='h-8 m-4 bg-blue-200' />
        <Menu
          theme='dark'
          mode='inline'
          onClick={(e) => handleMenuClicked(e)}
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key='1' icon={<UserOutlined />}>
            รายการสั่งซื้อ
          </Menu.Item>
          {/* <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            รายการสินค้า
          </Menu.Item>
          <Menu.Item key='3' icon={<VideoCameraOutlined />}>
            สินค้าเตรียมจัดส่ง
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className='site-layout-sub-header-background'
          style={{ padding: 0 }}
        >
          <div className='w-100 right-0 text-white text-right px-10'>
            <Popconfirm
              // placement='leftTop'
              title={'คุณต้องการออกจากระบบใช่หรือไม่'}
              onConfirm={handleLogoutClick}
              okText='ใช่'
              cancelText='ยกเลิก'
            >
              <div className='w-auto inline-block h-auto cursor-pointer'>
                ออกจากระบบ
              </div>
            </Popconfirm>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }} className='relative'>
          {componentType === 'list' ? (
            <div className='relative mb-4 text-right'>
              <Button type='primary' onClick={() => handleCreate()}>
                {createButtonName}
              </Button>
            </div>
          ) : null}
          <div className='site-layout-background' style={{ minHeight: '88vh' }}>
            {content}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2021 Created by AllboxStudio
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
