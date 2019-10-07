import React from 'react';
import { Icon, Layout } from 'antd';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Header,
  Content,
  LogoHolder,
  Logo,
} from './Page.styles';
import LogoImg from '../../../Assets/Img/logo.png';
import Drawer from './Drawer';

export default function Page(props) {
  const {
    menuOpened,
    handleMenu,
    children,
  } = props;

  return (
    <Wrapper>
      <Drawer
        title={(
          <LogoHolder>
            <Logo src={LogoImg} />
          </LogoHolder>
        )}
        drawerOpened={menuOpened}
        toggleDrawer={handleMenu}
      />
      <Layout>
        <Header>
          <Icon
            type={menuOpened ? 'menu-fold' : 'menu'}
            onClick={handleMenu}
          />
          <Icon type="logout" onClick={null} style={{ color: 'red' }} />
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Wrapper>
  );
}

Page.propTypes = {
  menuOpened: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
