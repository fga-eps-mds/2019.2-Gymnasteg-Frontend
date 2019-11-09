import React from 'react';
import { shallow } from 'enzyme';
import Ranking from './Ranking';

describe('Ranking page', () => {
  test('Ranking', () => {
    const mockProps = {};
    const wrapper = shallow(<Ranking {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
