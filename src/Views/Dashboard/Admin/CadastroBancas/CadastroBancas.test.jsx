import React from 'react';
import { shallow } from 'enzyme';
import CadastroBancas from './CadastroBancas';

describe('Tela Cadastro Bancas', () => {
  const mockProps = {
    stands: [],
  };
  const wrapper = shallow(<CadastroBancas {...mockProps} />);

  test('Deve estar definida', () => {
    expect(wrapper).toBeDefined();
  });
});
