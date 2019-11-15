import React from 'react';
import { shallow } from 'enzyme';
import App, { AdminPages, JudgeRoutes } from './App';

describe('App', () => {
  test('definition', () => {
    const mockProps = {};
    const wrapper = shallow(<App {...mockProps} />);
    expect(wrapper).toBeDefined();
  });

  test('PrivateRoute', () => {
    const mockProps = { props: {} };
    const wrapper = shallow(<AdminPages {...mockProps} />);
    expect(wrapper).toBeDefined();
  });

  test('JudgeRoutes', () => {
    const mockProps = {};
    const wrapper = shallow(<JudgeRoutes {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
