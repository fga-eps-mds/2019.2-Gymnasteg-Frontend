import React, { useEffect, useState } from 'react';
import { Typography, Divider, Row, Button, Collapse } from 'antd';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import Input from '../../../../Components/DataEntry/Input';
import DatePicker from '../../../../Components/DataEntry/DatePicker';
import Select from '../../../../Components/DataEntry/Select';
import { Container, Col, SubmitHolder } from './CadastroAtletaForm.styles';

import api from '../../../../Services/api';

const { Title } = Typography;
const { Panel } = Collapse;

export default function CadastroAtletaForm({
  isSubmitting,
  isValid,
  handleSubmit,
}) {
  const [athletes, setAthletes] = useState([]);
  useEffect(() => {
    async function loadAthletes() {
      const response = await api.get('/athletes');
      setAthletes(response.data);
    }

    loadAthletes();
  }, []);
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
      <br />
      <Collapse>
        {athletes.map((athlete) => (
          <Panel header={athlete.name}>
            <b>Email: </b>
            {athlete.email}
            <br />
            <b>Data de Nascimento: </b>
            {athlete.date_born}
            <br />
            <b>Sexo: </b>
            {athlete.gender}
          </Panel>
        ))}
      </Collapse>
    </Container>
  );
}

CadastroAtletaForm.propTypes = {
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
