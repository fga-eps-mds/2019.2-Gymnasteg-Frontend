import React from 'react';
import { shallow } from 'enzyme';
import EditarCoordenador from './EditarCoordenador';

describe('Card Modality', () => {
  test('Card', () => {
    const mockProps = {};
    const wrapper = shallow(<EditarCoordenador {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
