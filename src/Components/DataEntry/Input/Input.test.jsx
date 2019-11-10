import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Componente Input', () => {
  const mockProps = {
    form: {
      touched: false,
      errors: {},
    },
    field: { name: 'field' },
    type: 'password',
  };
  const wrapper = shallow(<Input {...mockProps} />);

  test('Deve estar definido', () => {
    expect(wrapper).toBeDefined();
  });

  test('Deve renderizar input de senha', () => {
    expect(wrapper.find('Password').exists()).toBe(true);
  });

  test('Deve renderizar input comum', () => {
    wrapper.setProps({ type: undefined });
    expect(wrapper.find('Input').exists()).toBe(true);
  });
});
