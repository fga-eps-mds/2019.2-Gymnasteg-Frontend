import { compose, withHandlers, withState } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';
import moment from 'moment';
import loget from 'lodash.get';
import CadastroBancas from './CadastroBancas';
import api from '../../../../Services/api';

export function validationSchema() {
  return Yup.object().shape({
    arbitros: Yup.string()
      .nullable()
      .required('Campo obrigatório.'),
    atletas: Yup.string()
      .required('Campo obrigatório.'),
    nomeBanca: Yup.string()
      .nullable()
      .required('Campo obrigatório.'),
    dataBanca: Yup.string()
      .nullable()
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

export function fetchEditingData(props) {
  const { match, setEditingData, setFieldValue } = props;

  return async () => {
    const idBanca = loget(match, ['params', 'idBanca'], undefined);

    if (idBanca) {
      try {
        const { data } = await api.get(`/stands/${idBanca}`);

        setFieldValue('atletas', data.athletes.map((item) => item.id));
        setFieldValue('arbitros', data.judges.map((item) => item.id));
        setFieldValue('nomeBanca', data.num_stand);
        setFieldValue('dataBanca', moment(data.date_event));
        setFieldValue('horaBanca', data.horary);
        setFieldValue('sexo', data.sex_modality);
        setFieldValue('modalidade', data.fk_modality_id);
        setFieldValue('categoria', data.category_age);

        return null;
      } catch (error) {
        setEditingData({});
        message.error('Ocorreu um erro ao recuperar informações da banca');
      }
    }

    return null;
  };
}

export async function handleSubmit(values, { props }) {
  const { history, match } = props;

  const idBanca = loget(match, ['params', 'idBanca'], undefined);

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
    if (idBanca) {
      await api.put('/stands', { id: idBanca, ...payload });
      message.success('Banca editada com sucesso!');
    } else {
      await api.post('/stands', payload);
      message.success('Banca cadastrada com sucesso!');
    }

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
  withState('editingData', 'setEditingData', {}),
  withFormik({
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    handleSubmit,
  }),
  withHandlers({
    fetchModalidades,
    fetchAtletas,
    fetchArbitros,
    fetchStands,
    fetchEditingData,
  }),
)(CadastroBancas);
