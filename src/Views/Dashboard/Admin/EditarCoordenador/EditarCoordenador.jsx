import { Field } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Divider, Row, Button } from 'antd';
import Input from '../../../../Components/DataEntry/Input';
import PageContent from '../../../../Components/Layout/PageContent';
import { Container, Col, SubmitHolder } from './EditarCoordenador.styles';

export default function EditarCoordenador({
  isSubmitting,
  isValid,
  handleSubmit,
}) {
  return (
    <PageContent title="Editar informações">
      <Container>
        <Row>
          <Col xs={24} md={6}>
            <Field name="name" label="Nome" component={Input} />
          </Col>
          <Col xs={24} md={6}>
            <Field name="email" label="Email" component={Input} />
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
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
