import React from 'react';
import { shallow } from 'enzyme';
import InputNumber from './InputNumber';

describe('Componente InputNumber', () => {
  const mockProps = {
    form: {
      touched: false,
      errors: {},
    },
    field: { name: 'field' },
  };
  const wrapper = shallow(<InputNumber {...mockProps} />);

  test('Deve estar definido', () => {
    expect(wrapper).toBeDefined();
  });

  test('Deve renderizar input', () => {
    expect(wrapper.find('InputNumber').exists()).toBe(true);
  });
});
