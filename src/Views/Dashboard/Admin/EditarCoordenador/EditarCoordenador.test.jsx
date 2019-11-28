import React from 'react';
import { shallow } from 'enzyme';
import EditarCoordenador from './EditarCoordenador';

describe('EditarCoordenador page', () => {
  test('EditarCoordenador', () => {
    const mockProps = {};
    const wrapper = shallow(<EditarCoordenador {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
