import React from 'react';
import { Typography, Divider } from 'antd';
import PropTypes from 'prop-types';
import { Container } from './PageContent.styles';

export default function PageContent({ title, children, shouldHideDivider }) {
  const { Title } = Typography;

  return (
    <Container>
      <Title level={2}>{title}</Title>
      {!shouldHideDivider && <Divider />}
      {children}
    </Container>
  );
}

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  shouldHideDivider: PropTypes.bool,
};

PageContent.defaultProps = {
  shouldHideDivider: false,
};
