import styled from 'styled-components';
import { InputNumber } from 'antd';
import { GymnastegButton } from '../Bancas/Bancas.styles';

export const CenteredHeader = styled.h2`
  text-align: center;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.65);
  padding: 17px 0;
`;

export const CategoryHeader = styled.div`
  &::before {
    background-image: linear-gradient(transparent, black);
    width: calc(100% - 16px);
    height: 60px;
    padding-top: 60px;
    position: absolute;
    content: ${'"\\00a0"'};
    border-radius: 0 0 8px 8px;
    margin-top: 60px;
  }

  &::after {
    content: ${(props) => `"${props.category}"`};
    color: white;
    position: absolute;
    top: 140px;
    left: 25px;
    font-size: 30px;
    font-weight: bold;
  }

  width: 100%;
  height: 120px;
  border-radius: 0 0 8px 8px;
  background-size: cover;
  background-image: url('${(props) => props.categoryURL}');
`;

export const InsetContainer = styled.div`
  margin: 0 16px;
`;

export const WideInputNumber = styled(InputNumber)`
  width: 100% !important;
`;

export const VoteButton = styled(GymnastegButton)`
  & > *:first-child {
    margin-right: 6px;
  }

  margin: 8px !important;
  width: calc(100% - 16px);
`;
