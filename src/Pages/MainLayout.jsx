import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { OrderList, ProductList } from '../Components'

const { Header, Content, Footer, Sider } = Layout
const MainLayout = () => {
  const [content, setContent] = useState(OrderList)
  const handleMenuClicked = async (e) => {
    switch (+e.key) {
      case 1:
        setContent(OrderList)
        break
      case 2:
        setContent(ProductList)
        break
      default:
        break
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
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className='h-8 m-4 bg-blue-200' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={[2]}
          onClick={(e) => handleMenuClicked(e)}
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
