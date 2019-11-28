import React from 'react';
import { shallow } from 'enzyme';
import Drawer from './Drawer';

describe('Drawer', () => {
  const mockPrps = {};
  const wrapper = shallow(<Drawer {...mockPrps} />);

  it('Deve estar definida', () => {
    expect(wrapper).toBeDefined();
  });
});
