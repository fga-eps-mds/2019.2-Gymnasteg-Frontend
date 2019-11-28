import React from 'react';
import { shallow, mount } from 'enzyme';
import { Formik } from 'formik';
import CadastroArbitrosForm from './CadastroArbitrosForm';

describe('Tela Cadastro de Arbitros via form', () => {
  it('Deve estar definida', () => {
    const mockProps = {};
    const wrapper = shallow(<CadastroArbitrosForm {...mockProps} />);
    expect(wrapper).toBeDefined();
  });

  test('useEffect', () => {
    const mockProps = {
      fetchEditingData: jest.fn(),
    };
    mount(
      <Formik>
        <CadastroArbitrosForm {...mockProps} />
      </Formik>,
    );
    expect(mockProps.fetchEditingData).toHaveBeenCalled();
  });
});
