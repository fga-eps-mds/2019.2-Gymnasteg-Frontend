import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../Constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0;
`;

export const CardContent = styled(Link)`
  margin: auto;
  display: flex;
  width: 65%;
  min-width: 230px;
  justify-content: center;
  box-shadow: 0 0 6px lightGrey;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 24px;
  cursor: pointer;
  color: ${colors.primary};
  &:hover {
    color: ${colors.primaryHover};
    box-shadow: 0 0 12px lightGrey;
  }
  &:active {
    color: ${colors.primaryPressed};
  }
`;
