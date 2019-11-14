import { validationSchema } from '.';

describe('CadastroAtletaForm', () => {
  test('validationSchema', () => {
    expect(typeof validationSchema()).toBe('object');
  });
});
