import React from 'react';
import { shallow } from 'enzyme';
import DatePicker from './DatePicker';

describe('DatePicker', () => {
  const mockProps = {
    form: {
      touched: false,
      errors: {},
    },
    field: { name: 'field' },
    type: 'password',
  };
  const wrapper = shallow(<DatePicker {...mockProps} />);

  it('Deve estar definida', () => {
    expect(wrapper).toBeDefined();
  });
});
