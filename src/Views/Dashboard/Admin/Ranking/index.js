import { compose, withState, withHandlers } from 'recompose';
import { message } from 'antd';
import Ranking from './Ranking';
import api from '../../../../Services/api';

export function getStands(props) {
  const { setBancasCadastradas } = props;

  return async () => {
    try {
      const { data } = await api.get('/stands');

      const formatedData = data.map((item) => ({
        id_stand: item.id,
        num_stand: item.num_stand,
        modality: item.id,
        sex: item.sex_modality,
        qtd_judges: item.qtd_judge,
        qtd_athletes: item.athletes.length,
        judges: item.judges,
        athletes: item.athletes,
        action: item.id,
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
    id_stand: 1,
    numBanca: '001',
    modalidade: 'Ginástica ritmica',
    sexo: 'Masculino',
    qtdArbitros: 3,
    qtdAtletas: 5,
  },
  {
    id_stand: 2,
    numBanca: '002',
    modalidade: 'Cavalo com alças',
    sexo: 'Feminino',
    qtdArbitros: 6,
    qtdAtletas: 8,
  },
];

export default compose(
  withState('bancasCadastradas', 'setBancasCadastradas', mockedBancas),
  withHandlers({ getStands }),
)(Ranking);
