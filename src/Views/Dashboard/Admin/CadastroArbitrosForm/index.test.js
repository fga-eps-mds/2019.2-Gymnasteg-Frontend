import { message } from 'antd';
import { mapPropsToValues, validationSchema, fetchEditingData } from '.';
import api from '../../../../Services/api';

describe('CadastroArbitrosForm', () => {
  const mockReqGet = jest.spyOn(api, 'get');
  const mockMessageError = jest.spyOn(message, 'error');

  test('validationsSchema', () => {
    expect(typeof validationSchema()).toBe('object');
  });

  test('mapPropsToValues', () => {
    expect(mapPropsToValues()).toEqual({
      name: '',
      email: '',
      JudgeType: 'Execution and Difficulty',
    });
  });

  test('Test fetchEditingData function', async () => {
    const mockPropsFetch = {
      match: {
        params: {
          idArbitro: '1',
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
