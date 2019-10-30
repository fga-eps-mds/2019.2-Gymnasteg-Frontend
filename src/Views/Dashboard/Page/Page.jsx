import React from 'react';
import { Icon, Layout } from 'antd';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Header,
  Content,
  LogoHolder,
  Logo,
  ConfIcon,
} from './Page.styles';
import LogoImg from '../../../Assets/Img/logo.png';
import Drawer from './Drawer';
//import { logout } from '../../../Services/authentication';

export default function Page(props) {
  const {
    menuOpened,
    handleMenu,
    children,
    history,
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
          <ConfIcon>
            <Icon
              type="setting"
              onClick={() => history.push('/cadastro/editar-perfil')}
              theme="filled"
            />
            <Icon type="logout" onClick={null} style={{ color: 'red' }} />
          </ConfIcon>
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
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
