import styled from 'styled-components';
import { Drawer } from 'antd';
import { NavLink } from 'react-router-dom';
import colors from '../../../../Constants/colors';

export const Container = styled(Drawer)``;

export const ContainerBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const MenuItems = styled(NavLink).attrs({
  activeStyle: {
    backgroundColor: '#ffd985',
    opacity: 0.6,
    color: '#000',
    fontWeight: 'bold',
    borderRight: '5px solid #ffaf00',
  },
})`
  width: 100%;
  padding: 18px;
  margin-bottom: 12px;
  color: darkorange;
  font-size: 14px;
  &:hover {
    font-weight: bold;
    color: darkorange;
  }
`;
