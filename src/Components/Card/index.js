import React from 'react';
import { Icon, Divider } from 'antd';
import PropTypes from 'prop-types';
import { Container, CardContent } from './styles';

const Card = ({ title, icon, route }) => (
  <Container>
    <CardContent to={`/cadastro/${route}`}>
      <Icon type={icon} />
      <Divider type="vertical" />
      {title}
    </CardContent>
  </Container>
);

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
