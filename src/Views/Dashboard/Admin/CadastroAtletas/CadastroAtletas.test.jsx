import React from 'react';
import { shallow } from 'enzyme';
import CadastroAtletas from './CadastroAtletas';

describe('Tela Cadastro de Atletas', () => {
  const mockPrps = {};
  const wrapper = shallow(<CadastroAtletas {...mockPrps} />);

  it('Deve estar definida', () => {
    expect(wrapper).toBeDefined();
  });
});
