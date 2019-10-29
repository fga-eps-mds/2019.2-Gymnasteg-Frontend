import { Field } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Typography, Divider, Row, Button } from 'antd';
import Input from '../../../../Components/DataEntry/Input';
import PageContent from '../../../../Components/Layout/PageContent';
import { Container, Col, SubmitHolder } from './EditarCoordenador.styles';

const { Title } = Typography;

export default function EditarCoordenador({
  isSubmitting,
  isValid,
  handleSubmit,
  mapPropsToValues,
  coordinator,
}) {
  useEffect(() => { mapPropsToValues(); }, []);
  return (
    <PageContent>
      <Container>
        <Title level={2}>Editar informações</Title>
        <Divider />
        <Row>
          <Col xs={24} md={6}>
            <Field
              name="nome"
              value={coordinator.name}
              label="Nome"
              component={Input}
            />
          </Col>
          <Col xs={24} md={6}>
            <Field
              name="email"
              value={coordinator.email}
              label="Email"
              component={Input}
            />
          </Col>
          <Col xs={24} md={6}>
            <Field name="senha" label="Senha" component={Input} />
            <Field name="novasenha" label="Nova senha" component={Input} />
          </Col>
        </Row>
        <Divider />
        <SubmitHolder>
          <Button
            type="primary"
            disabled={!isValid || isSubmitting}
            onClick={handleSubmit}
            icon="save"
          >
              Salvar
          </Button>
        </SubmitHolder>
      </Container>
    </PageContent>
  );
}

EditarCoordenador.propTypes = {
  coordinator: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.bool.isRequired,
  }).isRequired,
  mapPropsToValues: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
