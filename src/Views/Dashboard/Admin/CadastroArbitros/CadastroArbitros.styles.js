import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../../../Constants/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const OptionCard = styled(Link)`
  display: flex;
  width: 70%;
  align-items: center;
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
