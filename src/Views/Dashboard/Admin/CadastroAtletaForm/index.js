import { withFormik } from 'formik';
import * as Yup from 'yup';
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

export async function handleSubmit(values, { resetForm }) {
  const payload = {
    email: values.email,
    name: values.name,
    gender: values.gender,
    date_born: values.date_born,
  };

  try {
    await api.post('/athletes', payload);

    message.success('Atleta cadastrado com sucesso!', 4);
    resetForm();
  } catch (error) {
    message.error('Error!');
    resetForm();
  }
  setTimeout(() => {
    window.location.replace('/cadastro/atletas');
  }, 4000);
}

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
})(CadastroAtletaForm);
