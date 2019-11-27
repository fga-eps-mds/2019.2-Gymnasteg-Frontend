import { compose, withHandlers, withState } from 'recompose';
import { message } from 'antd';
import api from '../../../../Services/api';

import CadastroArbitros from './CadastroArbitros';

export function fetchJudges(props) {
  const { setJudges } = props;

  return async () => {
    try {
      const { data } = await api.get('/judges');
      const formatedData = data.map((item) => ({
        id: item.id,
        email: item.email,
        name: item.name,
        password: item.password,
        judge_type: item.judge_type,
      }));

      setJudges(formatedData);
    } catch (error) {
      message.error('Não foi possível resgatar os árbitros requisitados. ');
    }
  };
}

export default compose(
  withState('judges', 'setJudges', []),
  withHandlers({
    fetchJudges,
  }),
)(CadastroArbitros);
