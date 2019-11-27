import React from 'react';
import { shallow } from 'enzyme';
import CadastroAtletas from './CadastroAtletas';

describe('Tela Cadastro de Atletas', () => {
  it('Deve estar definida', () => {
    const mockProps = {
      athletes: {
        map: jest.fn(),
      },
      fetchAthletes: jest.fn(),
      submitDelete: jest.fn(),
    };
    const wrapper = shallow(<CadastroAtletas {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
