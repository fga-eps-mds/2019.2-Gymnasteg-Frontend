import React from 'react';
import { shallow } from 'enzyme';
import CadastroArbitrosForm from './CadastroArbitrosForm';

describe('Tela Cadastro de Arbitros via form', () => {
  const mockPrps = {};
  const wrapper = shallow(<CadastroArbitrosForm {...mockPrps} />);

  it('Deve estar definida', () => {
    expect(wrapper).toBeDefined();
  });
});
