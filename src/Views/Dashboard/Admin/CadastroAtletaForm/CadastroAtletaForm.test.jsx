import React from 'react';
import { shallow, mount } from 'enzyme';
import { Formik } from 'formik';
import CadastroAtletaForm from './CadastroAtletaForm';

describe('Tela Cadastro de Atletas via forms', () => {
  it('Deve estar definida', () => {
    const mockProps = {};
    const wrapper = shallow(<CadastroAtletaForm {...mockProps} />);
    expect(wrapper).toBeDefined();
  });

  test('Deve renderizar o conteudo do componente', () => {
    const mockComponent = shallow(<CadastroAtletaForm isSubmitting />);
    expect(mockComponent.find('Button')).toHaveLength(1);
  });

  test('useEffect', () => {
    const mockProps = {
      fetchEditingData: jest.fn(),
    };
    mount(
      <Formik>
        <CadastroAtletaForm {...mockProps} />
      </Formik>,
    );
    expect(mockProps.fetchEditingData).toHaveBeenCalled();
  });
});
