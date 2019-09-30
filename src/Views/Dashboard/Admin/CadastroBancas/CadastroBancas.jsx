import React from 'react';
import { Divider, Row, Button } from 'antd';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import Input from '../../../../Components/DataEntry/Input';
import InputNumber from '../../../../Components/DataEntry/InputNumber';
import DatePicker from '../../../../Components/DataEntry/DatePicker';
import Select from '../../../../Components/DataEntry/Select';
import PageContent from '../../../../Components/Layout/PageContent';
import { Col, SubmitHolder } from './CadastroBancas.styles';

export default function CadastroBancas({
  isSubmitting,
  isValid,
  handleSubmit,
}) {
  return (
    <PageContent title="Cadastro das Bancas">
      <Row>
        <Col xs={24} md={6}>
          <Field
            name="qtdArbitros"
            label="Quantidade de Árbitros"
            component={InputNumber}
          />
        </Col>
        <Col xs={24} md={6}>
          <Field
            name="nomeBanca"
            label="Identificador da Banca"
            component={InputNumber}
          />
        </Col>
        <Col xs={24} md={6}>
          <Field
            name="dataBanca"
            label="Data"
            component={DatePicker}
          />
        </Col>
        <Col xs={24} md={6}>
          <Field
            name="horaBanca"
            label="Hora"
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
            data={[{ value: 1, label: 'Cavalo com alça' }]}
            // TODO: implementar requisição para buscar modalidades
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
          Cadastrar Banca
        </Button>
      </SubmitHolder>
    </PageContent>
  );
}

CadastroBancas.propTypes = {
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
