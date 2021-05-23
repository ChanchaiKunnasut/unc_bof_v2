import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { OrderList, ProductList } from '../Components'
import { faChessKing } from '@fortawesome/free-solid-svg-icons'
let content = <OrderList />
const { Header, Content, Footer, Sider } = Layout
const MainLayout = (props) => {
  const handleMenuClicked = (e) => {
    switch (+e.key) {
      case 1:
        content = <OrderList />
        break
      case 2:
        content = <ProductList />
        break
      default:
        content = <OrderList />
    }
  }
  return (
    <Layout>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        // onBreakpoint={(broken) => {
        //   console.log(broken)
        // }}
        // onCollapse={(collsed, type) => {
        //   console.log(collapsed, type)
        // }}
      >
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
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            รายการสินค้า
          </Menu.Item>
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
            style={{ padding: 24, minHeight: '88vh' }}
          >
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
