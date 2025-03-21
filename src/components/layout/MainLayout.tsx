import { createElement } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps} from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
    {
        key: '1',
        label:'nav-1'
    },
    {
        key: '2',
        label:'nav-2',
        children:[
            {
                key:'21',
                label:'nav21'
            },
            {
                key:'22',
                label:'nav22'
            },
        ]
    },
    {
        key: '3',
        label:'nav-3'
    },
]

const MainLayout: React.FC = () => {
  
  return (
    <Layout style={{height: "100vh"}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color: "white", textAlign: "center", height:"4rem", display:"flex", justifyContent:"center", justifyItems:"center"}}>
            <h1>U-Management</h1>
        </div>
        <Menu 
        theme="dark" 
        mode="inline" 
        defaultSelectedKeys={['4']} 
        items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0,}} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1>Main Content</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;