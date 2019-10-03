import React from 'react';
import { Typography, Divider } from 'antd';
import PropTypes from 'prop-types';
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

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
