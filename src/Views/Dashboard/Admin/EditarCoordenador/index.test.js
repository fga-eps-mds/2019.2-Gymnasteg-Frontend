import {
  validationSchema,
  mapPropsToValues,
} from '.';

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
});
