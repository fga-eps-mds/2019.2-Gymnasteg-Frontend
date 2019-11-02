import React from 'react';
import PropTypes from 'prop-types';
import { Container, MenuItems, ContainerBody } from './Drawer.styles';
import { MenuIcon } from '../Page.styles';
import './Drawer.css';

export default function Drawer(props) {
  const { toggleDrawer, drawerOpened } = props;

  return (
    <Container
      width={300}
      visible={drawerOpened}
      onClose={toggleDrawer}
      placement="left"
      closable={false}
      {...props}
    >
      <ContainerBody>
        <MenuItems to="/cadastro/home">
          <MenuIcon type="home" />
          Início
        </MenuItems>
        <MenuItems to="/cadastro/bancas">
          <MenuIcon type="file-add" />
          Cadastro de Bancas
        </MenuItems>
        <MenuItems to="/cadastro/arbitros">
          <MenuIcon type="notification" />
          Cadastro de Árbitros
        </MenuItems>
        <MenuItems to="/cadastro/atletas">
          <MenuIcon type="file-add" />
          Cadastro de Atletas
        </MenuItems>
        <MenuItems to="/ranking">
          <MenuIcon type="bar-chart" />
          Ranking
        </MenuItems>
      </ContainerBody>
    </Container>
  );
}

Drawer.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  drawerOpened: PropTypes.bool.isRequired,
};
