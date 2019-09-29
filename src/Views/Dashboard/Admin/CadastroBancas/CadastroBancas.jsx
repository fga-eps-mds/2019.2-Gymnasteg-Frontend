import React from 'react';
import { Divider, Row, Button } from 'antd';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import Input from '../../../../Components/DataEntry/Input';
import InputNumber from '../../../../Components/DataEntry/InputNumber';
import Select from '../../../../Components/DataEntry/Select';
import PageContent from '../../../../Components/Layout/PageContent';
import { Col, SubmitHolder } from './CadastroBancas.styles';

export default function CadastroBancas({ isSubmitting, isValid }) {
  return (
    <PageContent title="Cadastro das Bancas">
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
            data={[
              { value: 'M', label: 'Masculino' },
              { value: 'F', label: 'Feminino' },
            ]}
          />
        </Col>
        <Col xs={24} md={12}>
          <Field
            name="modalidade"
            label="Modalidade"
            component={Select}
            data={[]} // TODO: implementar a lista de modalidades
          />
        </Col>
      </Row>
      <Divider />
      <SubmitHolder>
        <Button
          type="primary"
          disabled={!isValid || isSubmitting}
        >
          Cadastrar Banca
        </Button>
      </SubmitHolder>
    </PageContent>
  );
}

CadastroBancas.propTypes = {
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};
