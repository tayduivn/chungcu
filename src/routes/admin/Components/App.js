  import React, { PropTypes } from 'react'
import { Layout, Menu, Breadcrumb, Icon, LocaleProvider, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
import Link from '../../../components/Link'

import enUS from 'antd/lib/locale-provider/en_US';
import { StickyContainer, Sticky } from 'react-sticky';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name,
      collapsed: false,
      mode: 'inline',
    };
  }
  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
        <LocaleProvider locale={enUS}>
         <Layout>
          <Sider
            collapsible
            breakpoint="lg"
            collapsedWidth="0"
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width="170"
          >
            <div className="logo" />
            <div className="admin-topSlide">
             <span>ADMIN</span>
            </div>
            <Menu theme="dark"
                  mode={this.state.mode}
                  selectedKeys={[this.props.name]}
                  defaultOpenKeys={['sub0', 'sub1', 'sub2']}
            >
              <Menu.Item key="Dashboard">
                <Link to="/admin/">
                  <span>
                    <Icon type="layout" />
                    <span className="nav-text">Dashboard</span>
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="Seo">
                <Link to="/admin/seo/">
                  <span>
                    <Icon type="layout" />
                    <span className="nav-text">SEO</span>
                  </span>
                </Link>
              </Menu.Item>

              <SubMenu
                key="sub0"
                title={<span><Icon type="idcard" /><span className="nav-text">Danh mục</span></span>}
              >
                <Menu.Item key="category1">
                  <Link to="/admin/category?v=list" >Danh sách</Link>
                </Menu.Item>
                <Menu.Item key="category2">
                  <Link to="/admin/category?v=add" >Thêm mới</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub1"
                title={<span><Icon type="idcard" /><span className="nav-text">Căn hộ</span></span>}
              >
                <Menu.Item key="apartment1">
                  <Link to="/admin/apartment?v=list" >Danh sách</Link>
                </Menu.Item>
                <Menu.Item key="apartment2">
                  <Link to="/admin/apartment?v=add" >Thêm mới</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub2"
                title={<span><Icon type="idcard" /><span className="nav-text">Tin tức</span></span>}
              >
                <Menu.Item key="tintuc1">
                  <Link to="/admin/news?v=list" >Danh sách</Link>
                </Menu.Item>
                <Menu.Item key="tintuc2">
                  <Link to="/admin/news?v=add" >Thêm mới</Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="Library">
                <Link to="/admin/library">
                  <span>
                    <Icon type="appstore-o" />
                    <span className="nav-text">Thư viện</span>
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="Setting">
                <Link to="/admin/setting">
                  <span>
                    <Icon type="tool" />
                    <span className="nav-text">Cài đặt</span>
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="Logout">
                <a href="/auth/logout">
                  <span>
                    <Icon type="tool" />
                    <span className="nav-text">Đăng xuất</span>
                  </span>
                </a>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout>
            <Header style={{ height: 47, background: 'white', padding: 0}} >
            </Header>
            <Content style={{ margin: '0 5px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>{ this.state.name }</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{background: '#fff', minHeight: 500 }}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center'}}>
              Admin Page ©201 Created by Lưu Văn Luận
            </Footer>
          </Layout>
        </Layout>
        </LocaleProvider>
    );
  }
}



export default App
