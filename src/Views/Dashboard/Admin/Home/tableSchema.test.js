import { message } from 'antd';
import { submitDelete } from './tableSchema';
import api from '../../../../Services/api';

describe('Home', () => {
  const mockReqDelete = jest.spyOn(api, 'delete');
  const mockMessageError = jest.spyOn(message, 'error');
  const mockMessageSuccess = jest.spyOn(message, 'success');

  test('submitDelete', async () => {
    const mockProps = { idStand: {} };

    mockReqDelete.mockImplementation(() => Promise.resolve(mockProps));
    await submitDelete(mockProps);
    expect(mockReqDelete).toHaveBeenCalled();
    expect(mockMessageSuccess).toHaveBeenCalledWith('Banca excluída!', 0.5);

    mockReqDelete.mockImplementation(() => Promise.reject(mockProps));
    await submitDelete(mockProps);
    expect(mockMessageError).toHaveBeenCalledWith(
      'Falha na exclusão da banca!',
    );
  });
});
