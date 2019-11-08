import React from 'react';
import { shallow } from 'enzyme';
import CadastroArbitros, { OpcaoCadastro } from './CadastroArbitros';

describe('Pagina de Cadastro Arbitros', () => {
  test('CadastroArbitros', () => {
    const mockProps = {};
    const wrapper = shallow(<CadastroArbitros {...mockProps} />);
    expect(wrapper).toBeDefined();
  });

  test('OpcaoCadastro', () => {
    const mockprops = {};
    const wrapper = shallow(<OpcaoCadastro {...mockprops} />);
    expect(wrapper).toBeDefined();
  });
});
