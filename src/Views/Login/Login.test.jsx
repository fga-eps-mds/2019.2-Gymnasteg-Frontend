import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  test('deve renderizar o conteudo do componente', () => {
    const mockComponent = shallow(<Login isSubmitting />);

    expect(mockComponent.find('EmailField')).toHaveLength(1);
    expect(mockComponent.find('PasswordField')).toHaveLength(1);
    expect(mockComponent.find('Button')).toHaveLength(1);
  });
});
