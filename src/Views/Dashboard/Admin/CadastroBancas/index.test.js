import React from 'react';
import { shallow } from 'enzyme';
import api from '../../../../Services/api';
import { createMemoryHistory } from 'history'
import { 
  validationSchema,
  fetchEditingData,
  handleSubmit,
  fetchModalidades,
  fetchArbitros,
  fetchAtletas,
  fetchStands,

} from './index';

import { message } from 'antd';

describe('Index Cadastro de Bancas', () => {
    const mockGoBack = jest.fn();
    const mockProps = {
      history: {
        goBack: mockGoBack,
      },
      stands: [],
    };
    const mockReqGet = jest.spyOn(api, "get");
    const mockReqPut = jest.spyOn(api, "put");
    const mockReqPost = jest.spyOn(api, "post");

    const mockMessage = jest.spyOn(message, 'error');
    const wrapper = shallow(<index {...mockProps} />);

  
    test('Deve estar definida', () => {
      expect(wrapper).toBeDefined();
    });

    test("Test validationSchema", async () => {
      expect(typeof validationSchema()).toBe('object');
    });

    test("Test fetchEditingData function", async () => {
      const mockProps = {
        match: { 
          params: {
            idBanca: '1',
          },
         },
         setEditingData: jest.fn(), 
         setFieldValue: jest.fn(),
      };
      mockReqGet.mockImplementation(() => Promise.resolve(mockProps));
      await fetchEditingData(mockProps)();
      expect(mockReqGet).toHaveBeenCalled();
      expect(await fetchEditingData(mockProps)()).toBe(null);

      mockReqGet.mockImplementation(() => Promise.reject());
      await fetchEditingData(mockProps)();
      expect(mockProps.setEditingData).toHaveBeenCalled();
      expect(mockMessage).toHaveBeenCalledWith(
        'Ocorreu um erro ao recuperar informações da banca'
        );
    });
  
    test("Test handleSubmit function", async () => {

    });

    test("Test fetchModalidades", async () => {

    });

  test("Test fetchArbitros", async () => {
      
  });

  test("Test fetchAtletas", async () => {
      
  });

  test("Test fetchStands", async () => {
      
  });

}); 