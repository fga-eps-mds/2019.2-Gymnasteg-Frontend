import React from 'react';
import { shallow } from 'enzyme';
import CadastroArbitros from './CadastroArbitros';

describe('Pagina de Cadastro Arbitros', () => {
  test('CadastroArbitros', () => {
    const mockProps = {
      judges: {
        map: jest.fn(),
      },
      fetchJudges: jest.fn(),
    };
    const wrapper = shallow(<CadastroArbitros {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
