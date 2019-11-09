import React from 'react';
import { shallow } from 'enzyme';
import Ranking from './Ranking';

describe('Card Modality', () => {
  test('Card', () => {
    const mockProps = {};
    const wrapper = shallow(<Ranking {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
