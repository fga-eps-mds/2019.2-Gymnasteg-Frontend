import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import loget from 'lodash.get';
import { message, notification } from 'antd';
import CadastroArbitrosForm from './CadastroArbitrosForm';
import api from '../../../../Services/api';

export function validationSchema() {
  return Yup.object().shape({
    email: Yup.string()
      .email('E-mail deve ser válido')
      .nullable()
      .required('Campo obrigatório'),
    name: Yup.string()
      .nullable()
      .required('Campo obrigatório'),
  });
}

export function mapPropsToValues() {
  return { name: '', email: '', JudgeType: 'Execution and Difficulty' };
}

export function fetchEditingData(props) {
  const { match, setEditingData, setFieldValue } = props;

  return async () => {
    const idArbitro = loget(match, ['params', 'idArbitro'], undefined);

    if (idArbitro) {
      try {
        const { data } = await api.get(`/judges/${idArbitro}`);

        setFieldValue('email', data.email);
        setFieldValue('name', data.name);
        setFieldValue('JudgeType', data.judge_type);

        return null;
      } catch (error) {
        setEditingData([]);
        message
          .error('Ocorreu um error ao recuperar as informações do atleta', 1.5);
      }
    }

    return null;
  };
}

export async function handleSubmit(values, { setSubmitting, props }) {
  const { history, match } = props;

  const idArbitro = loget(match, ['params', 'idArbitro'], undefined);

  const payload = {
    name: values.name,
    email: values.email,
    judge_type: values.JudgeType,
  };

  try {
    if (idArbitro) {
      const response = await api.put('/judges', { id: idArbitro, ...payload });

      const { data } = response;

      notification.success({
        message: (
          <>
            Árbitro <b>{data.name}</b> atualizado com sucesso.
          </>
        ),
        description: (
          <>
            Email: <b>{data.email}</b>
            <br />
            Senha: <b>{data.password}</b>
          </>
        ),
        key: data.email,
        duration: 3,
      });
    } else {
      const response = await api.post('/createJudge', payload);

      const { data } = response;

      notification.success({
        message: (
          <>
            Árbitro <b>{data.name}</b> cadastrado com sucesso.
          </>
        ),
        description: (
          <>
            Email: <b>{data.email}</b>
            <br />
            Senha: <b>{data.password}</b>
          </>
        ),
        key: data.email,
        duration: 3,
      });
    }

    history.goBack();
  } catch (error) {
    message.error(error.response.data.error);
    setSubmitting(false);
  }
}

export default compose(
  withFormik({
    validationSchema,
    handleSubmit,
    mapPropsToValues,
  }),
  withState('editingData', 'setEditingData'),
  withHandlers({
    fetchEditingData,
  }),
)(CadastroArbitrosForm);
