import React from 'react';
import { Typography, Divider, Row, Button } from 'antd';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import Input from '../../../../Components/DataEntry/Input';
import DatePicker from '../../../../Components/DataEntry/DatePicker';
import Select from '../../../../Components/DataEntry/Select';
import { Container, Col, SubmitHolder } from './CadastroAtletaForm.styles';

const { Title } = Typography;

export default function CadastroAtletaForm({
  isSubmitting,
  isValid,
  handleSubmit,
}) {
  return (
    <Container>
      <Title level={2}>Cadastro de Atletas</Title>
      <Divider />
      <Row>
        <Col xs={24} md={6}>
          <Field name="email" label="Email" component={Input} />
        </Col>
        <Col xs={24} md={6}>
          <Field name="name" label="Nome" component={Input} />
        </Col>
        <Col xs={24} md={6}>
          <Field
            name="gender"
            label="Sexo"
            component={Select}
            data={[
              { value: 'M', label: 'Masculino' },
              { value: 'F', label: 'Feminino' },
            ]}
          />
        </Col>
        <Col xs={24} md={6}>
          <Field
            name="date_born"
            label="Data de Nascimento"
            component={DatePicker}
          />
        </Col>
      </Row>
      <Divider />
      <SubmitHolder>
        <Button
          type="primary"
          disabled={!isValid || isSubmitting}
          onClick={handleSubmit}
        >
          Cadastrar Atleta
        </Button>
      </SubmitHolder>
    </Container>
  );
}

CadastroAtletaForm.propTypes = {
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
