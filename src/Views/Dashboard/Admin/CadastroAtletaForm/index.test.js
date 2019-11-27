import { message } from 'antd';
import { validationSchema, mapPropsToValues, handleSubmit } from '.';
import api from '../../../../Services/api';

describe('CadastroAtletaForm', () => {
  const mockReqPost = jest.spyOn(api, 'post');
  const mockMessageSuccess = jest.spyOn(message, 'success');
  const mockMessageError = jest.spyOn(message, 'error');

  test('validationSchema', () => {
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

  test('handleSubmit', async () => {
    const mockProps = { values: {}, payload: {} };
    const mockResetForm = { resetForm: jest.fn() };

    mockReqPost.mockImplementation(() => Promise.resolve(mockProps.payload));
    await handleSubmit(mockProps, mockResetForm);
    expect(mockReqPost).toHaveBeenCalled();
    expect(mockMessageSuccess).toHaveBeenCalled();
    expect(mockResetForm.resetForm).toHaveBeenCalled();

    mockReqPost.mockImplementation(() => Promise.reject());
    await handleSubmit(mockProps, mockResetForm);
    expect(mockMessageError).toHaveBeenCalledWith('Error!');
    expect(mockResetForm.resetForm).toHaveBeenCalled();
  });
});
