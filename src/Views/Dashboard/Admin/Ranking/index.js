import { compose, withState, withHandlers } from 'recompose';
import { message } from 'antd';
import Ranking from './Ranking';
import api from '../../../../Services/api';

export function getStands(props) {
  const { setBancasCadastradas } = props;

  return async () => {
    try {
      const { data } = await api.get('/stands');

      const formattedData = data.map((item) => ({
        id_stand: item.id,
        num_stand: item.num_stand,
        modality: item.modality.type,
        sex: item.sex_modality === 'M' ? 'Masculino' : 'Feminino',
        qtd_judges: item.qtd_judge,
        qtd_athletes: item.athletes.length,
        judges: item.judges,
        athletes: item.athletes,
        action: item.id,
      }));

      setBancasCadastradas(formattedData);
    } catch (error) {
      message.error('Não foi possível resgatar as bancas cadastradas.');
      setBancasCadastradas([]);
    }
  };
}

export default compose(
  withState('bancasCadastradas', 'setBancasCadastradas', []),
  withHandlers({ getStands }),
)(Ranking);
