import styled from 'styled-components';
import { Col as AntCol } from 'antd';

export const Container = styled.div`
  min-height: 100%;
  padding: 20px;
`;

export const Col = styled(AntCol)`
  padding: 0 12px !important;
`;

export const SubmitHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 14px;
  align-self: bottom;
`;
