import { withFormik } from 'formik';
import { compose, withHandlers, withState } from 'recompose';
import * as Yup from 'yup';
import { message } from 'antd';
import api from '../../../../Services/api';

import EditarCoordenador from './EditarCoordenador';

export function validationSchema() {
  return Yup.object().shape({
    email: Yup.string()
      .email('E-mail deve ser válido')
      .nullable()
      .required('Campo obrigatório'),
    name: Yup.string()
      .nullable()
      .required('Campo obrigatório'),
    senha: Yup.string()
      .nullable()
      .required('Campo obrigatório'),
    novasenha: Yup.string()
      .nullable()
      .required('Campo obrigatório'),
  });
}

export function mapPropsToValues(props) {
  const { setCoordinator } = props;
  return async () => {
    const { data } = await api.get('/coordinators');
    const coordinator = {
      name: data.name,
      email: data.email,
    };
    setCoordinator(coordinator);
  };
}

export async function handleSubmit(values, { resetForm }) {
  const payload = {
    email: values.email,
    name: values.name,
    senha: values.senha,
    novasenha: values.novasenha,
  };

  try {
    await api.put('/coordinators', payload);
    message.success('Dados do Coordenador atualizados', 4);
    resetForm();
  } catch (error) {
    message.error(error.response.data.error);
    resetForm();
  }
  setTimeout(() => {
    window.location.replace('/cadastro/editar-perfil');
  }, 4000);
}

export default compose(
  withState('coordinator', 'setCoordinator', {}),
  withFormik({
    validationSchema,
    handleSubmit,
  }),
  withHandlers({
    mapPropsToValues,
  }),
)(EditarCoordenador);
