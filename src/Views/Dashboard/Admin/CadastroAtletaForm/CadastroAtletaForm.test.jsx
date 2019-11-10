import React from 'react';
import { shallow } from 'enzyme';
import CadastroAtletaForm from './CadastroAtletaForm';

describe('Tela Cadastro de Atletas via forms', () => {
  const mockPrps = {};
  const wrapper = shallow(<CadastroAtletaForm {...mockPrps} />);

  it('Deve estar definida', () => {
    expect(wrapper).toBeDefined();
  });
});
