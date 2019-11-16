import { compose, withState, withHandlers } from 'recompose';
import { message } from 'antd';
import api from '../../../../Services/api';


import CadastroAtletas from './CadastroAtletas';


export function fetchAthletes(props) {
  const { setAthletes } = props;

  return async () => {
    try {
      const { data } = await api.get('/athletes');
      const formatedData = data.map((item) => ({
        id: item.id,
        name: item.name,
        email: data.email,
        date_born: data.date_born,
        gender: data.gender,
      }));

      setAthletes(formatedData);
    } catch (error) {
      message.error('Não foi possível resgatar as modalidades requisitadas.');
    }
  };
}

export default compose(
  withState('athletes', 'setAthletes', []),
  withHandlers({
    fetchAthletes,
  },
  ))(CadastroAtletas);
