import { message } from 'antd';
import { validationSchema, mapPropsToValues, fetchEditingData } from '.';
import api from '../../../../Services/api';

describe('Cadastro do Atleta', () => {
  const mockReqGet = jest.spyOn(api, 'get');
  const mockMessageError = jest.spyOn(message, 'error');

  test('validationsSchema', () => {
    expect(typeof validationSchema()).toBe('object');
  });

  test('mapPropsToValue', () => {
    expect(mapPropsToValues()).toEqual({
      email: '',
      name: '',
      gender: '',
      date_born: '',
    });
  });

  test('Test fetchEditingData function', async () => {
    const mockPropsFetch = {
      match: {
        params: {
          idAtleta: '1',
        },
      },
      setEditingData: jest.fn(),
      setFieldValue: jest.fn(),
    };

    mockReqGet.mockImplementation(() => Promise.resolve(mockPropsFetch));
    await fetchEditingData(mockPropsFetch)();
    expect(mockReqGet).toHaveBeenCalled();
    expect(await fetchEditingData(mockPropsFetch)()).toBe(null);

    mockReqGet.mockImplementation(() => Promise.reject());
    await fetchEditingData(mockPropsFetch)();
    expect(mockPropsFetch.setEditingData).toHaveBeenCalled();
    expect(mockMessageError).toHaveBeenCalledWith(
      'Ocorreu um error ao recuperar as informações do atleta',
      1.5,
    );
    expect(await fetchEditingData(mockPropsFetch)()).toBe(null);
  });
});
