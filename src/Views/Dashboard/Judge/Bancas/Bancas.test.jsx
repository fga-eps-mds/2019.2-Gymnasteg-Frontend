import React from 'react';
import { shallow } from 'enzyme';
import Bancas from './Bancas';

describe('Bancas page', () => {
  test('Bancas', () => {
    const mockProps = {};
    const wrapper = shallow(<Bancas {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
