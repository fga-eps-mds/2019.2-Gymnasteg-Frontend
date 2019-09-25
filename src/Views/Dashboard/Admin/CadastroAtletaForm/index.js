import { withFormik } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';
import CadastroAtletaForm from './CadastroAtletaForm';
import api from '../../../../Services/api';

export function validationSchema() {
  return Yup.object().shape({
    email: Yup.string().nullable().required('Campo obrigatório'),
    nome: Yup.string().nullable().required('Campo obrigatório'),
    sexo: Yup.string().nullable().required('Campo obrigatório'),
    data_nascimento: Yup.string().nullable().required('Campo obrigatório'),
  });
}

export function mapPropsToValues() {
  return ({
    email: '',
    nome: '',
    sexo: '',
    data_nascimento: '',
  });
}

export async function handleSubmit(values, { resetForm }) {
  const payload = {
    email: values.email,
    nome: values.nome,
    sexo: values.sexo,
    data_nascimento: values.data_nascimento,
  };

  try {
    await api.post('/atletas', payload);

    message.success('Atleta cadastrado com sucesso!');
    resetForm();
  } catch (error) {
    message.error('Falha ao cadastrar atleta');
    resetForm();
  }
}


export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
})(CadastroAtletaForm);
