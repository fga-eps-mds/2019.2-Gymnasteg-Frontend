import React from 'react';
import { shallow } from 'enzyme';
import Page from './Page';

describe('Page component', () => {
  const mockProps = {};
  const wrapper = shallow(
    <Page {...mockProps} />,
  );

  test('Deve estar definido', () => {
    expect(wrapper).toBeDefined();
  });
});
