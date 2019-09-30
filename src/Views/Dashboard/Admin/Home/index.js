import { compose, withState, withHandlers } from 'recompose';
import { message } from 'antd';
import Home from './Home';
import api from '../../../../Services/api';

const mockedModalidades = [
  { title: 'Solo', imgSource: 'https://fotospublicas.com/wp-content/uploads/2016/08/Rio2016-WAG-Qualification-3-850x567.jpg' },
  { title: 'Cavalo com alças', imgSource: 'http://www.olimpiadatododia.com.br/wp-content/uploads/2018/10/Diogo-Soares-cavalo-com-al%C3%A7as-Jogos-Ol%C3%ADmpicos-da-Juventude.jpg' },
  { title: 'Argolas', imgSource: 'http://www.rededoesporte.gov.br/pt-br/noticias/arthur-zanetti-avanca-para-a-final-das-argolas-no-mundial-de-ginastica/Zanetti_Mundial_3x2.jpg' },
  { title: 'Salto sobre cavalo', imgSource: 'http://c8.quickcachr.fotos.sapo.pt/i/o88121191/13523469_UdZlD.jpeg' },
  { title: 'Barras paralelas', imgSource: 'http://www.olimpiadatododia.com.br/wp-content/uploads/2019/05/fig_ag_world_championships_2015_brazil_team_mag_podium_training_35.jpg' },
  { title: 'Barra fixa', imgSource: 'http://s.glbimg.com/es/ge/f/original/2015/11/01/000_dv2170550.jpg' },
  { title: 'Trave de equilíbrio', imgSource: 'http://entrandonojogo.com.br/wp-content/uploads/2017/11/ginastica-olimpica-entrando-no-jogo.jpg' },
];

export function getModalities(props) {
  const { setModalidades } = props;
  return async () => {
    try {
      const { data } = await api.get('/modalities');
      setModalidades(data);
    } catch (error) {
      message.error('Não foi possível resgatar as modalidades requisitadas');
      setModalidades([]);
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
  withHandlers( {getModalities}),
)(Home);
