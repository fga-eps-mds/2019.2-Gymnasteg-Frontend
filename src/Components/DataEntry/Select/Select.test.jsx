import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

describe('Tela Cadastro de Arbitros via form', () => {
  const mockProps = {
    form: {
      touched: false,
      errors: {},
    },
    field: { name: 'field' },
    type: 'password',
  };
  const wrapper = shallow(<Select {...mockProps} />);

  it('Deve estar definida', () => {
    expect(wrapper).toBeDefined();
  });
});
