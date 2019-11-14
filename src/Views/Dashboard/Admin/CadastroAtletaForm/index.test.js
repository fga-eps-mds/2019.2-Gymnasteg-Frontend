import { validationSchema, mapPropsToValues } from '.';

describe('CadastroAtletaForm', () => {
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
});
