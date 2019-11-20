import React from 'react';
import { shallow } from 'enzyme';
import CadastroAtletas, { OpcaoCadastro } from './CadastroAtletas';

describe('Tela Cadastro de Atletas', () => {
  it('Deve estar definida', () => {
    const mockProps = {};
    const wrapper = shallow(<CadastroAtletas {...mockProps} />);
    expect(wrapper).toBeDefined();
  });

  test('OpcaoCadastro', () => {
    const mockProps = { title: {}, icon: {}, route: {} };
    const wrapper = shallow(<OpcaoCadastro {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
