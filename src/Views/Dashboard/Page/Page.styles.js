import styled from 'styled-components';
import {
  Layout,
  Menu,
  Icon,
} from 'antd';
import colors from '../../../Constants/colors';

export const Wrapper = styled(Layout)`
  min-height: 100vh !important;
  background-color: red;
`;

export const Header = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white} !important;
  padding: 0 26px 0  !important;
  font-size: 20px;
`;

export const ConfIcon = styled.div`
  display: flex;
  flex-direction: row;
  width: 50px;
  align-items: space-between;
  justify-content: space-between;
`;

export const LogoHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
`;

export const Logo = styled.img`
  height: 56px;
`;

export const MenuItem = styled(Menu.Item)`
  height: 50px !important;
  display: flex !important;
  margin: 0 !important;
  align-items: center !important;
  font-weight: bold;
  font-size: 16px;
`;

export const MenuIcon = styled(Icon)`
  font-size: 18px !important;
  margin-right: 12px;
`;

export const Content = styled(Layout.Content)`
  margin: 6px 6px !important;
  background-color: ${colors.white};
`;
