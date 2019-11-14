import { validationSchema } from '.';

describe('Tela Editar Coordenador', () => {
  test('validationSchema', () => {
    expect(typeof validationSchema()).toBe('object');
  });
});
