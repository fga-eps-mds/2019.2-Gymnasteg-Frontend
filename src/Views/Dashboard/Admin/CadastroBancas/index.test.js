import React from 'react';
import { shallow } from 'enzyme';
import { message } from 'antd';
import api from '../../../../Services/api';
import {
  validationSchema,
  fetchEditingData,
  /* handleSubmit, */
  fetchModalidades,
  fetchArbitros,
  fetchAtletas,
  fetchStands,
} from './index';

describe('Index Cadastro de Bancas', () => {
  const mockGoBack = jest.fn();
  const mockProps = {
    history: {
      goBack: mockGoBack,
    },
    stands: [],
  };
  const mockReqGet = jest.spyOn(api, 'get');
  // const mockReqPut = jest.spyOn(api, 'put');
  // const mockReqPost = jest.spyOn(api, 'post');

  const mockMessage = jest.spyOn(message, 'error');
  const wrapper = shallow(<index {...mockProps} />);

  test('Deve estar definida', () => {
    expect(wrapper).toBeDefined();
  });

  test('Test validationSchema', async () => {
    expect(typeof validationSchema()).toBe('object');
  });

  test('Test fetchEditingData function', async () => {
    const mockPropsFetch = {
      match: {
        params: {
          idBanca: '1',
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
    expect(mockMessage).toHaveBeenCalledWith(
      'Ocorreu um erro ao recuperar as informações da banca',
      1.5,
    );
    expect(await fetchEditingData(mockPropsFetch)()).toBe(null);
  });

  test('Test handleSubmit function', async () => {
    /*
      const mockValues = {
          num_stand: '1',
          sex_modality: 'M',
          qtd_judge: '1',
          judges: [],
          athletes: [],
          date_event: '2019-01-01',
          horary: '12:00',
          fk_modality_id: '1',
          category_age: 'juvenil',
      };

      const mockPropsHandle = {
        history: {
          goBack: mockGoBack,
        },
        match: {
          params: {
            idBanca: '1',
          },
        },
      };

      const mockPropsWithNoId = {
        history: {
          goBack:  mockGoBack,
        },
        match: {
          params: {
            idBanca: '',
          },
        },
      };

      mockReqPut.mockImplementation(() => Promise.resolve(mockPropsHandle));
      await handleSubmit(mockValues,mockPropsHandle);
      expect(mockReqPut).toHaveBeenCalled();


      mockReqPost.mockImplementation(() => Promise.resolve(
        mockPropsWithNoId
        ));
      await handleSubmit(mockValues,mockPropsWithNoId);
      expect(mockReqPost).toHaveBeenCalled();


      mockReqPut.mockImplementation(() => Promise.reject(mockPropsHandle));
      await handleSubmit(mockValues,mockPropsHandle);
      expect(mockMessage).toHaveBeenCalledWith(
        'Falha ao cadastrar banca.'
        );
      */
  });

  test('Test fetchModalidades', async () => {
    const mockPropsFetch = {
      setModalidades: jest.fn(),
    };
    mockReqGet.mockImplementation(() => Promise.resolve(mockPropsFetch));
    await fetchModalidades(mockPropsFetch)();
    expect(mockReqGet).toHaveBeenCalled();
    expect(mockPropsFetch.setModalidades).toHaveBeenCalled();

    mockReqGet.mockImplementation(() => Promise.reject());
    await fetchModalidades(mockPropsFetch)();
    expect(mockPropsFetch.setModalidades).toHaveBeenCalled();
  });

  test('Test fetchArbitros', async () => {
    const mockPropsFetch = {
      setArbitros: jest.fn(),
    };
    mockReqGet.mockImplementation(() => Promise.resolve(mockPropsFetch));
    await fetchArbitros(mockPropsFetch)();
    expect(mockReqGet).toHaveBeenCalled();
    expect(mockPropsFetch.setArbitros).toHaveBeenCalled();

    mockReqGet.mockImplementation(() => Promise.reject());
    await fetchArbitros(mockPropsFetch)();
    expect(mockPropsFetch.setArbitros).toHaveBeenCalled();
  });

  test('Test fetchAtletas', async () => {
    const mockPropsFetch = {
      setAtletas: jest.fn(),
    };
    mockReqGet.mockImplementation(() => Promise.resolve(mockPropsFetch));
    await fetchAtletas(mockPropsFetch)();
    expect(mockReqGet).toHaveBeenCalled();
    expect(mockPropsFetch.setAtletas).toHaveBeenCalled();

    mockReqGet.mockImplementation(() => Promise.reject());
    await fetchAtletas(mockPropsFetch)();
    expect(mockPropsFetch.setAtletas).toHaveBeenCalled();
  });

  test('Test fetchStands', async () => {
    const mockPropsFetch = {
      setStands: jest.fn(),
    };
    mockReqGet.mockImplementation(() => Promise.resolve(mockPropsFetch));
    await fetchStands(mockPropsFetch)();
    expect(mockReqGet).toHaveBeenCalled();
    expect(mockPropsFetch.setStands).toHaveBeenCalled();

    mockReqGet.mockImplementation(() => Promise.reject());
    await fetchStands(mockPropsFetch)();
    expect(mockPropsFetch.setStands).toHaveBeenCalled();
  });
});
