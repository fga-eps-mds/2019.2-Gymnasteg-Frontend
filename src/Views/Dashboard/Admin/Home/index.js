import { compose, withState, withHandlers } from 'recompose';
import { message } from 'antd';
import Home from './Home';
import api from '../../../../Services/api';

export function getModalities(props) {
  const { setModalidades } = props;
  return async () => {
    try {
      const { data } = await api.get('/modalities');
      const formatedData = data.map((item) => ({
        title: item.type,
        imgSource: item.url_image,
      }));

      setModalidades(formatedData);
    } catch (error) {
      message.error('Não foi possível resgatar as modalidades requisitadas.');
      setModalidades([]);
    }
  };
}

export function getStands(props) {
  const { setBancasCadastradas } = props;

  return async () => {
    try {
      const { data } = await api.get('/stands');

      const formatedData = data.map((item) => ({
        numBanca: item.num_stand,
        modalidade: item.id,
        sexo: item.sex_modality,
        qtdArbitros: item.qtd_judge,
        qtdAtletas: item.athletes.length,
        acao: item.id,
      }));

      setBancasCadastradas(formatedData);
    } catch (error) {
      message.error('Não foi possível resgatar as bancas cadastradas.');
      setBancasCadastradas([]);
    }
  };
}

const mockedBancas = [
  {
    numBanca: '001',
    modalidade: 'Ginástica ritmica',
    sexo: 'Masculino',
    qtdArbitros: 3,
    qtdAtletas: 5,
  },
  {
    numBanca: '002',
    modalidade: 'Cavalo com alças',
    sexo: 'Feminino',
    qtdArbitros: 6,
    qtdAtletas: 8,
  },
];

export default compose(
  withState('modalidades', 'setModalidades', []),
  withState('bancasCadastradas', 'setBancasCadastradas', mockedBancas),
  withHandlers({ getModalities, getStands }),
)(Home);
