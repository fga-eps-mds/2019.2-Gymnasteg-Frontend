import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home page', () => {
  test('Home', () => {
    const mockProps = {};
    const wrapper = shallow(<Home {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
