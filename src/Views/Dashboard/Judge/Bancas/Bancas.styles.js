import styled from 'styled-components';
import { Button } from 'antd';
import colors from '../../../../Constants/colors';

// eslint-disable-next-line import/prefer-default-export
export const GymnastegButton = styled(Button)`
  ${(props) =>
    (props.disabled
      ? ''
      : `&:hover {
    background-color: ${colors.primaryHover} !important;
    border-color: ${colors.primaryHover} !important;
  }

  &:active {
    background-color: ${colors.primaryPressed} !important;
    border-color: ${colors.primaryPressed} !important;
  }

  background-color: ${colors.primary} !important;
  border-color: ${colors.primary} !important;`)}
`;
