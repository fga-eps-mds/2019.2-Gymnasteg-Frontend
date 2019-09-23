import { withFormik } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';
import moment from 'moment';
import CadastroBancas from './CadastroBancas';
import api from '../../../../Services/api';

export function validationSchema() {
  return Yup.object().shape({
    qtdArbitros: Yup.string()
      .nullable()
      .required('Campo obrigatório.'),
    nomeBanca: Yup.string()
      .nullable()
      .required('Campo obrigatório.'),
    dataBanca: Yup.string()
      .required('Campo obrigatório.'),
    horaBanca: Yup.string()
      .nullable()
      .required('Campo obrigatório.'),
    sexo: Yup.string()
      .nullable()
      .required('Campo obrigatório.'),
    modalidade: Yup.string()
      .nullable()
      .required('Campo obrigatório.'),
  });
}

export function mapPropsToValues() {
  return ({
    qtdArbitros: 1,
    nomeBanca: '',
    dataBanca: '',
    horaBanca: '',
    sexo: '',
    modalidade: '',
  });
}

export async function handleSubmit(values, { resetForm }) {
  const payload = {
    num_banca: values.nomeBanca,
    sexo: values.sexo,
    qtd_arbitro: values.qtdArbitros,
    data_evento: moment(values.dataBanca).format('YYYY-MM-DD'),
    horario: values.horaBanca,
    fk_modalidade_id: values.modalidade,
  };

  try {
    await api.post('/bancas', payload);

    message.success('Banca cadastrada com sucesso!');
    resetForm();
  } catch (error) {
    message.error('Falha ao cadastrar banca.');
    resetForm();
  }
}

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
})(CadastroBancas);
