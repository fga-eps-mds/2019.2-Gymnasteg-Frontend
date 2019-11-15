import React from 'react';
import { shallow } from 'enzyme';
import Login, { EmailField, PasswordField } from './Login';

describe('Login', () => {
  test('deve renderizar o conteudo do componente', () => {
    const mockComponent = shallow(<Login isSubmitting />);

    expect(mockComponent.find('EmailField')).toHaveLength(1);
    expect(mockComponent.find('PasswordField')).toHaveLength(1);
    expect(mockComponent.find('Button')).toHaveLength(1);
  });

  test('EmailField', () => {
    const mockProps = {};
    const wrapper = shallow(<EmailField {...mockProps} />);
    expect(wrapper).toBeDefined();
  });

  test('PasswordField', () => {
    const mockProps = {};
    const wrapper = shallow(<PasswordField {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
