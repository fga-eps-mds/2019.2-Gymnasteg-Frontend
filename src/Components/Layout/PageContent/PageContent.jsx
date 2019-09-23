import React from 'react';
import { Typography, Divider } from 'antd';
import { Container } from './PageContent.styles';

export default function PageContent({ title, children }) {
  const { Title } = Typography;

  return (
    <Container>
      <Title level={2}>
        {title}
      </Title>
      <Divider />
      {children}
    </Container>
  );
}
