import React from 'react'
import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
const { Header, Content, Footer, Sider } = Layout
const handleMenuClicked = (e, props) => {
  console.log(props)
  switch (+e.key) {
    case 1:
      props.history.push('/order-list')
      break
    case 2:
      props.history.push('/')
      break
    default:
      break
  }
}
const LayoutComponent = ({ ContentPage, props }) => {
  return (
    <Layout>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        // onBreakpoint={(broken) => {
        //   console.log(broken)
        // }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className='h-8 m-4 bg-blue-200' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          onClick={(e) => handleMenuClicked(e, props)}
        >
          <Menu.Item key='1' icon={<UserOutlined />}>
            รายการสั่งซื้อ
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            Login
          </Menu.Item>
          {/* <Menu.Item key='3' icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key='4' icon={<UserOutlined />}>
            nav 4
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className='site-layout-sub-header-background'
          style={{ padding: 0 }}
        />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: "88vh" }}
          >
            {ContentPage}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2021 Created by AllboxStudio
        </Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
