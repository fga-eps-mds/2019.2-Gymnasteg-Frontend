import React from 'react';
import { shallow } from 'enzyme';
import CardModalidade, { Card } from './CardModalidade';

describe('Card Modality', () => {
  test('Card', () => {
    const mockProps = {};
    const wrapper = shallow(<Card {...mockProps} />);
    expect(wrapper).toBeDefined();
  });

  test('CardModalidade', () => {
    const mockProps = { props: {}, modalidades: [] };
    const wrapper = shallow(<CardModalidade {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
