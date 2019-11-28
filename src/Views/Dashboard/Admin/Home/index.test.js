import React from 'react';
import { shallow } from 'enzyme';
import { message } from 'antd';
import { getModalities, getStands } from './index';
import api from '../../../../Services/api';

describe('Tela Home', () => {
  const mockReqGet = jest.spyOn(api, 'get');
  const mockMessage = jest.spyOn(message, 'error');
  test('getModalities definition', () => {
    const mockProps = {};
    const wrapper = shallow(<getModalities {...mockProps} />);
    expect(wrapper).toBeDefined();
  });

  test('getModalities', async () => {
    const mockProps = {
      setModalidades: jest.fn(),
    };

    mockReqGet.mockImplementation(() => Promise.resolve(mockProps));
    await getModalities(mockProps)();
    expect(mockReqGet).toHaveBeenCalled();
    expect(mockProps.setModalidades).toHaveBeenCalled();

    mockReqGet.mockImplementation(() => Promise.reject());
    await getModalities(mockProps)();
    expect(mockProps.setModalidades).toHaveBeenCalled();
    expect(mockMessage).toHaveBeenCalledWith(
      'Não foi possível resgatar as modalidades requisitadas.',
    );
  });

  test('getStands', async () => {
    const mockProps = {
      setBancasCadastradas: jest.fn(),
    };

    mockReqGet.mockImplementation(() => Promise.resolve(mockProps));
    await getStands(mockProps)();
    expect(mockReqGet).toHaveBeenCalled();
    expect(mockProps.setBancasCadastradas).toHaveBeenCalled();

    mockReqGet.mockImplementation(() => Promise.reject());
    await getStands(mockProps)();
    expect(mockProps.setBancasCadastradas).toHaveBeenCalled();
    expect(mockMessage).toHaveBeenCalledWith(
      'Não foi possível resgatar as bancas cadastradas.',
    );
  });
});
