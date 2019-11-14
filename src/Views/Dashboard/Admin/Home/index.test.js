import React from 'react';
import { shallow } from 'enzyme';
import { getModalities } from './index';

describe('Tela Cadastro Bancas', () => {
  const mockProps = {};
  const wrapper = shallow(<getModalities {...mockProps} />);

  test('Deve estar definida', () => {
    expect(wrapper).toBeDefined();
  });
});
