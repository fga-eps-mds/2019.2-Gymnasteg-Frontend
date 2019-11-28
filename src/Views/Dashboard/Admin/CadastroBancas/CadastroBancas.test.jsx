import React from 'react';
import { shallow, mount } from 'enzyme';
import { Formik } from 'formik';
import CadastroBancas from './CadastroBancas';

describe('Tela Cadastro Bancas', () => {
  const mockProps = {
    stands: [],
    fetchModalidades: jest.fn(),
    fetchAtletas: jest.fn(),
    fetchArbitros: jest.fn(),
    fetchStands: jest.fn(),
    fetchEditingData: jest.fn(),
  };
  const wrapper = shallow(<CadastroBancas {...mockProps} />);

  test('Deve estar definida', () => {
    expect(wrapper).toBeDefined();
  });

  test('functions on useEffect', () => {
    mount(
      <Formik>
        <CadastroBancas {...mockProps} />
      </Formik>,
    );
    expect(mockProps.fetchModalidades).toHaveBeenCalled();
  });
});
