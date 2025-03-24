
import { Layout, Menu, MenuProps} from 'antd';
import { Outlet } from 'react-router-dom';
import { adminSidebarItems } from '../../routes/admin.route';

const { Header, Content, Footer, Sider } = Layout;

const items : MenuProps['items'] = [
    {
        key:'1',
        label:'label'
    },
    {
        key:'2',
        label:'label',
        children: [
            {
                key:'21',
                label:'label'
            },
            {
                key:'22',
                label:'label',
            }
        ]
    }
]

const MainLayout= () => {
 

  return (
    <Layout>
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
        
        <div style={{
            color:'white',
            textAlign: 'center',
            height: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h1>U-Management</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebarItems} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0}} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
          <Outlet/>
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