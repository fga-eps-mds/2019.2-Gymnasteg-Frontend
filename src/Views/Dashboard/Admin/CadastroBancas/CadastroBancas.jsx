import React, { useEffect } from 'react';
import { Divider, Row, Button, Col } from 'antd';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import loget from 'lodash.get';
import Input from '../../../../Components/DataEntry/Input';
import InputNumber from '../../../../Components/DataEntry/InputNumber';
import DatePicker from '../../../../Components/DataEntry/DatePicker';
import Select from '../../../../Components/DataEntry/Select';
import PageContent from '../../../../Components/Layout/PageContent';
import { SubmitHolder } from './CadastroBancas.styles';

export default function CadastroBancas({
  isSubmitting,
  isValid,
  handleSubmit,
  modalidades,
  fetchModalidades,
  atletas,
  fetchAtletas,
  arbitros,
  fetchArbitros,
  fetchStands,
  fetchEditingData,
  match,
}) {
  useEffect(() => {
    fetchModalidades();
    fetchAtletas();
    fetchArbitros();
    fetchStands();
    fetchEditingData();
    // eslint-disable-next-line
  }, []);

  const isEditing = !!loget(match, ['params', 'idBanca'], false);

  return (
    <PageContent
      title={isEditing ? 'Editar banca' : 'Cadastro de Banca'}
    >
      <Row gutter={24}>
        <Col xs={24} md={6}>
          <Field
            name="arbitros"
            label="Árbitros"
            component={Select}
            data={arbitros}
            allowClear
            mode="multiple"
          />
        </Col>
        <Col xs={24} md={6}>
          <Field
            name="atletas"
            label="Atletas"
            component={Select}
            data={atletas}
            allowClear
            mode="multiple"
          />
        </Col>
        <Col xs={24} md={6}>
          <Field name="dataBanca" label="Data" component={DatePicker} />
        </Col>
        <Col xs={24} md={6}>
          <Field name="horaBanca" label="Hora" component={Input} />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xs={24} md={6}>
          <Field
            name="nomeBanca"
            label="Identificador da Banca"
            component={InputNumber}
          />
        </Col>
        <Col xs={24} md={6}>
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
        <Col xs={24} md={6}>
          <Field
            name="modalidade"
            label="Modalidade"
            component={Select}
            data={modalidades}
            allowClear
          />
        </Col>
        <Col xs={24} md={6}>
          <Field
            name="categoria"
            label="Categoria"
            component={Select}
            data={[
              { value: 'infantil', label: 'Infantil' },
              { value: 'juvenil', label: 'Juvenil' },
              { value: 'adulto', label: 'Adulto' },
            ]}
            allowClear
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
          {isEditing ? 'Editar banca' : 'Cadastro de Banca'}
        </Button>
      </SubmitHolder>
    </PageContent>
  );
}

CadastroBancas.propTypes = {
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  modalidades: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchModalidades: PropTypes.func.isRequired,
  atletas: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchAtletas: PropTypes.func.isRequired,
  arbitros: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchArbitros: PropTypes.func.isRequired,
  fetchStands: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchEditingData: PropTypes.func.isRequired,
};
