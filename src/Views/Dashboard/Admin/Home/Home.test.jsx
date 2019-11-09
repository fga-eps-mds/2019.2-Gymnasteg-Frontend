import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Card Modality', () => {
  test('Card', () => {
    const mockProps = {};
    const wrapper = shallow(<Home {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
