import React from 'react';
import { shallow } from 'enzyme';
import Bancas from './Bancas';

describe('Card Modality', () => {
  test('Card', () => {
    const mockProps = {};
    const wrapper = shallow(<Bancas {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
