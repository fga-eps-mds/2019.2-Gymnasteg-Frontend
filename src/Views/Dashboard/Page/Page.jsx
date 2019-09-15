import React from 'react';
import {
  Menu,
  Icon,
  Layout,
} from 'antd';
import PropTypes from 'prop-types';

import {
  Wrapper,
  MenuItem,
  MenuIcon,
  Header,
  Content,
  LogoHolder,
  Logo,
} from './Page.styles';
import LogoImg from '../../../Assets/Img/logo.png';

const {
  Sider,
} = Layout;

export default function Page(props) {
  const { menuCollapsed, handleMenu, children } = props;

  return (
    <Wrapper>
      <Sider
        trigger={null}
        collapsible
        collapsed={menuCollapsed}
        collapsedWidth={0}
        breakpoint="xs"
        onBreakpoint={handleMenu}
        theme="light"
      >
        <LogoHolder>
          <Logo src={LogoImg} />
        </LogoHolder>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <MenuItem key="1">
            <MenuIcon type="home" />
            <span>Início</span>
          </MenuItem>
          <MenuItem key="2">
            <MenuIcon type="file-add" />
            <span>Cadastro de Bancas</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <Icon
            type={menuCollapsed ? 'menu' : 'menu-fold'}
            onClick={handleMenu}
          />
          <Icon
            type="logout"
            onClick={null}
            style={{ color: 'red' }}
          />
        </Header>
        <Content>
          {children}
        </Content>
      </Layout>
    </Wrapper>
  );
}

Page.propTypes = {
  menuCollapsed: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
