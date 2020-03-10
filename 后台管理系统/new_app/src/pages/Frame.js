import React from 'react';
import { Layout, Menu, Breadcrumb, Icon,Button } from 'antd';
import{withRouter} from 'react-router-dom';
import Cookie from 'js-cookie';
import{menus,findItemByPath } from './menus'
import { MenuItem } from 'rc-menu';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export class Frame extends React.Component {
    logout=()=>{
        Cookie.remove('token',{path:'/'});
        window.location.hash='#/login'
    }
    menuClick=(subItem)=>{
        console.log(subItem.path);
        console.log(this.props);
        this.props.history.push(subItem.path)

    }
    render() {
     const{menuId, itemId}  = findItemByPath( this.props.location.pathname)
      const SubMenuEls= menus.map((menuItem)=>{
           return(
               <SubMenu
                               key={menuItem.id}
                               title={
                                   <span>
                                       <Icon type="user" />
                                       {menuItem.text}
             </span>
                               }
                           >
                              {menuItem.subItems.map((subItem)=>{
                                   return(
                                   <Menu.Item onClick={()=>this.menuClick(subItem)} key={subItem.id}>{subItem.text}</Menu.Item>
                                   )
                               })} 
                              
                           </SubMenu>
            )
        })
        return (
            <Layout style={{height:'100%'}}>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                    
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                   <div className='signout'><Button onClick={this.logout}>退出</Button></div> 
                    </Menu>
                    
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultOpenKeys={[menuId]}
                        defaultSelectedKeys={[itemId]}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                          {SubMenuEls}
                           
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                    {this.props.children}
        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(Frame)