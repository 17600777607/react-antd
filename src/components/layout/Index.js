import React from 'react';
import './Index.less';
import { Layout,Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const LayoutIndex = ()=>{
  return (
    <Layout className="layoutBox">
      <Header className="layoutHeader">
        <div className="logo">
          logo
        </div>
      </Header>
      <Layout className="layoutMain">
        <Sider className="mainSider">菜单栏</Sider>
        <Content className="mainBox">
          <div>
            <Button>{process.env.REACT_APP_MODE}</Button>
            当长度超出后，滚动条智慧在当前区域内滚动；不会影响头部和底部
          </div>
        </Content>
      </Layout>
      <Footer className="layoutFooter">Footer</Footer>
    </Layout>
  );
};
export default LayoutIndex;
