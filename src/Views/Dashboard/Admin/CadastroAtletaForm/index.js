import { compose, withHandlers, withState } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import loget from 'lodash.get';
import { message } from 'antd';
import CadastroAtletaForm from './CadastroAtletaForm';
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
    gender: Yup.string()
      .nullable()
      .required('Campo obrigatório'),
    date_born: Yup.string()
      .nullable()
      .required('Campo obrigatório'),
  });
}

export function mapPropsToValues() {
  return {
    email: '',
    name: '',
    gender: '',
    date_born: '',
  };
}

export function fetchEditingData(props) {
  const { match, setEditingData, setFieldValue } = props;

  return async () => {
    const idAtleta = loget(match, ['params', 'idAtleta'], undefined);

    if (idAtleta) {
      try {
        const { data } = await api.get(`/athletes/${idAtleta}`);
        setFieldValue('email', data.email);
        setFieldValue('name', data.name);
        setFieldValue('gender', data.gender);
        setFieldValue('date_born', data.date_born);

        return null;
      } catch (error) {
        setEditingData({});
        message
          .error('Ocorreu um error ao recuperar as informações do atleta', 1.5);
      }
    }

    return null;
  };
}

export async function handleSubmit(values, { resetForm, props }) {
  const { match } = props;

  const idAtleta = loget(match, ['params', 'idAtleta'], undefined);

  const payload = {
    email: values.email,
    name: values.name,
    gender: values.gender,
    date_born: values.date_born,
  };

  try {
    if (idAtleta) {
      await api.put('/atletes', { id: idAtleta, ...payload });
      message.success('Atleta editado com sucesso!', 0.5);
    } else {
      await api.post('/athletes', payload);
      message.success('Atleta cadastrado com sucesso!', 0.5);
    }

    resetForm();
  } catch (error) {
    message.error(error.response.data.error);
    resetForm();
  }
  setTimeout(() => {
    window.location.replace('/cadastro/atletas');
  }, 1000);
}

export default compose(
  withFormik({
    mapPropsToValues,
    validationSchema,
    handleSubmit,
  }),
  withState('editingData', 'setEditingData', {}),
  withHandlers({
    fetchEditingData,
  }),
)(CadastroAtletaForm);
