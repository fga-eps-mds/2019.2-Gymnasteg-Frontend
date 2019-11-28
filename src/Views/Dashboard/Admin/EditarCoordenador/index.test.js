import { message } from 'antd';
import {
  validationSchema,
  mapPropsToValues,
  handleSubmit,
} from '.';
import api from '../../../../Services/api';

describe('Tela Editar Coordenador', () => {
  test('validationSchema', () => {
    expect(typeof validationSchema()).toBe('object');
  });

  test('mapPropsToValues', () => {
    const mockReturn = {
      name: null,
      email: null,
    };
    expect(mapPropsToValues()).toEqual(mockReturn);
  });
  test('handleSubmit', async () => {
    const mockValues = {
      values: { },
    };
    const mockProps = {
      resetForm: jest.fn(),
    };
    const mockError = {
      response: {
        data: {
          erro: 'Erro',
        },
      },
    };

    const mockReqPut = jest.spyOn(api, 'put');
    const mockMessageError = jest.spyOn(message, 'error');
    const mockMessageSuccess = jest.spyOn(message, 'success');

    mockReqPut.mockImplementation(() => Promise.resolve(mockValues));
    await handleSubmit(mockValues, mockProps);
    expect(mockProps.resetForm).toHaveBeenCalled();
    expect(mockReqPut).toHaveBeenCalled();
    expect(mockMessageSuccess).toHaveBeenCalledWith(
      'Dados do Coordenador atualizados', 1,
    );
    mockReqPut.mockImplementation(() => Promise.reject(mockError));
    await handleSubmit(mockValues, mockProps);
    expect(mockProps.resetForm).toHaveBeenCalled();
    expect(mockMessageError).toHaveBeenCalled();
  });
});
