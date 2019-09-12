import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  test('deve renderizar o conteudo do componente', () => {
    const mockComponent = shallow(<Login />);

    expect(mockComponent.text()).toBe('Login');
  });
});
