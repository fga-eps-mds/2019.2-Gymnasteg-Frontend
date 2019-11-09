import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './CardModalidade';

describe('Card Modality', () => {
  test('Card', () => {
    const mockProps = {};
    const wrapper = shallow(<Card {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
