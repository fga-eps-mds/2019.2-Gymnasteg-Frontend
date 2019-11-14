import React from 'react';
import { shallow, mount } from 'enzyme';
import Ranking from './Ranking';

describe('Ranking page', () => {
  const mockProps = {
    getStands: jest.fn(),
  };
  test('Ranking', () => {
    const wrapper = shallow(<Ranking {...mockProps} />);
    expect(wrapper).toBeDefined();
  });

  test('function useEffect', () => {
    mount(<Ranking {...mockProps} />);
  });
});
