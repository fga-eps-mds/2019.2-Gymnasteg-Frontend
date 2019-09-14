import React from 'react';
import { Typography, Divider, Row } from 'antd';
import { Field } from 'formik';
import Input from '../../../../Components/DataEntry/Input';
import InputNumber from '../../../../Components/DataEntry/InputNumber';
import Select from '../../../../Components/DataEntry/Select';
import { Container, Col } from './CadastroBancas.styles';

export default function CadastroBancas() {
  const { Title } = Typography;

  return (
    <Container>
      <Title level={2}>
        Cadastro das Bancas
      </Title>
      <Divider />
      <Row>
        <Col xs={24} md={8}>
          <Field
            name="qtdAtletas"
            label="Quantidade de Atletas"
            component={InputNumber}
          />
        </Col>
        <Col xs={24} md={8}>
          <Field
            name="qtdJuizes"
            label="Quantidade de Jurados"
            component={InputNumber}
          />
        </Col>
        <Col xs={24} md={8}>
          <Field
            name="nomeBanca"
            label="Identificador da Banca"
            component={Input}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12}>
          <Field
            name="sexo"
            label="Sexo"
            component={Select}
          />
        </Col>
        <Col xs={24} md={12}>
          <Field
            name="modalidade"
            label="Modalidade"
            component={Select}
          />
        </Col>
      </Row>
    </Container>
  );
}
