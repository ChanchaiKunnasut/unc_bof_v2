import React, { useEffect, useState } from 'react'
import { Button, Layout, Menu, Popconfirm, Breadcrumb } from 'antd'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { OrderList, Ordering } from '../Components'
import { LogOutService } from '../Services'
import Cookies from 'js-cookie'
const { Header, Content, Footer, Sider } = Layout
const MainLayout = (props) => {
  const [createButtonName, setCreateButtonName] = useState('')
  const [componentType, setComponentType] = useState('list')
  const [homeContent, setHomeContent] = useState('')
  const [pathName, setPathName] = useState('/')
  const handleMenuClicked = (e) => {
    switch (+e.key) {
      case 1:
        // setContent(<OrderList accountData={Cookie.getJSON('accountData')} />)
        setCreateButtonName('+ สร้างคำสั่งซื้อ')
        setHomeContent('รายการสั่งซื้อ')
        break
      case 2:
        // setContent(<ProductList accountData={Cookie.getJSON('accountData')} />)
        break
      default:
      // setContent(<div>ERROR: 404 Page not found</div>)
    }
  }
  useEffect(() => {
    setCreateButtonName('+ สร้างคำสั่งซื้อ')
    setHomeContent('รายการสั่งซื้อ')
    setPathName(props.history.location.pathname)
    props.history.location.pathname === '/' && props.history.push('/orderlist')
  }, [props, pathName])

  const handleLogoutClick = () => {
    LogOutService()
    props.history.push('/login')
  }

  const handleCreate = (param) => {
    switch (param) {
      case 'orderlist':
        props.history.push('/orderlist')
        break
      case 'ordering':
        props.history.push('/ordering')
        break
      default:
        break
    }
  }

  const renderContent = (param) => {
    console.log('render new content')
    switch (param) {
      case '/orderlist':
        return <OrderList accountData={Cookies.getJSON('accountData')} />
      case '/ordering':
        return <Ordering />
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
        <Breadcrumb style={{ margin: '16px 16PX' }}>
          <Breadcrumb.Item>{homeContent}</Breadcrumb.Item>
          {componentType === 'detail' ? (
            <Breadcrumb.Item>{createButtonName} </Breadcrumb.Item>
          ) : (
            ''
          )}
          {componentType === 'list' ? (
            <div className='content-end text-right'>
              <Button type='primary' onClick={() => handleCreate('ordering')}>
                {createButtonName}
              </Button>
            </div>
          ) : null}
        </Breadcrumb>
        <Content style={{ margin: '24px 16px 0' }} className='relative'>
          <div className='site-layout-background' style={{ minHeight: '88vh' }}>
            {renderContent(pathName)}
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
