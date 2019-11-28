import styled from 'styled-components';
import { Progress } from 'antd';

export const ScoreHeader = styled.b`
  text-align: center;
  display: block;
  margin-top: 10px;
`;

export const ScoreProgress = styled(Progress)`
  & .ant-progress-success-bg {
    background-color: #1890ff;
  }
`;

export const Score = styled.b`
  font-size: 24px;
  text-align: center;
  display: block;
`;
