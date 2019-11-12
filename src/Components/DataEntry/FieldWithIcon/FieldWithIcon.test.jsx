import React from 'react';
import { shallow } from 'enzyme';
import FieldWithIcon from './FieldWithIcon';

describe('Tela Cadastro de Arbitros via form', () => {
  const mockProps = {};
  const wrapper = shallow(<FieldWithIcon {...mockProps} />);

  it('Deve estar definida', () => {
    expect(wrapper).toBeDefined();
  });
});
