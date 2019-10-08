import { compose, withHandlers, withState } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';
import moment from 'moment';
import CadastroBancas from './CadastroBancas';
import api from '../../../../Services/api';

export function validationSchema() {
  return Yup.object().shape({
    arbitros: Yup.string()
      .required('Campo obrigatório.'),
    atletas: Yup.string()
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
    categoria: Yup.string()
      .required('Campo obrigatório.'),
  });
}

export function mapPropsToValues() {
  return ({
    arbitros: [],
    atletas: [],
    nomeBanca: '',
    dataBanca: '',
    horaBanca: '',
    sexo: [],
    modalidade: [],
    categoria: [],
  });
}

export async function handleSubmit(values, { resetForm, props }) {
  const { history } = props;

  const payload = {
    num_stand: values.nomeBanca,
    sex_modality: values.sexo,
    qtd_judge: values.arbitros.length,
    judges: values.arbitros,
    athletes: values.atletas,
    date_event: moment(values.dataBanca).format('YYYY-MM-DD'),
    horary: values.horaBanca,
    fk_modality_id: values.modalidade,
    category_age: values.categoria,
  };

  try {
    await api.post('/stands', payload);

    message.success('Banca cadastrada com sucesso!');
    history.goBack();
  } catch (error) {
    message.error('Falha ao cadastrar banca.');
  }
}

export function fetchModalidades(props) {
  const { setModalidades } = props;

  return async () => {
    try {
      const { data } = await api.get('/modalities');

      const formatedData = data.map((item) => ({
        value: item.id,
        label: item.type,
      }));

      setModalidades(formatedData);
    } catch (error) {
      setModalidades([]);
    }
  };
}

export function fetchArbitros(props) {
  const { setArbitros } = props;

  return async () => {
    try {
      const { data } = await api.get('/judges');

      const formatedData = data.map((item) => ({
        value: item.id,
        label: item.name,
      }));

      setArbitros(formatedData);
    } catch (error) {
      setArbitros([]);
    }
  };
}

export function fetchAtletas(props) {
  const { setAtletas } = props;

  return async () => {
    try {
      const { data } = await api.get('/athletes');

      const formatedData = data.map((item) => ({
        value: item.id,
        label: item.name,
      }));

      setAtletas(formatedData);
    } catch (error) {
      setAtletas([]);
    }
  };
}

export function fetchStands(props) {
  const { setStands } = props;

  return async () => {
    try {
      const { data } = await api.get('/stands');
      setStands(data);
    } catch (error) {
      setStands([]);
    }
  };

}
export default compose(
  withState('modalidades', 'setModalidades', []),
  withState('stands', 'setStands', []),
  withState('arbitros', 'setArbitros', []),
  withState('atletas', 'setAtletas', []),
  withHandlers({
    fetchModalidades,
    fetchAtletas,
    fetchArbitros,
    fetchStands,
  }),
  withFormik({
    mapPropsToValues,
    validationSchema,
    handleSubmit,
  }),
)(CadastroBancas);
