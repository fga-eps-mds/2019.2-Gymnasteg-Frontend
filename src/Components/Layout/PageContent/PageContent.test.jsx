import React from 'react';
import { shallow } from 'enzyme';
import PageContent from './PageContent';

describe('PageContent', () => {
  const mockProps = {};
  const wrapper = shallow(<PageContent {...mockProps} />);
  test('PageContent Defined', () => {
    expect(wrapper).toBeDefined();
  });
});
