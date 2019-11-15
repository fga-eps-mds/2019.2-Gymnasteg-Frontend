import { message } from 'antd';
import api from '../../../../Services/api';
import { getStands } from '.';

describe('Index Ranking', () => {
  const mockReqGet = jest.spyOn(api, 'get');
  const mockMessage = jest.spyOn(message, 'error');

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
    expect(mockReqGet).toHaveBeenCalled();
    expect(mockProps.setBancasCadastradas).toHaveBeenCalled();
    expect(mockMessage).toHaveBeenCalledWith(
      'Não foi possível resgatar as bancas cadastradas.',
    );
  });
});
