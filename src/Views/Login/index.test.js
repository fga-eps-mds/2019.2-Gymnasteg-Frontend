import { validate } from '.';

describe('Teste', () => {
  it('validate', () => {
    expect(validate({ email: null })).toBe('Email obrigatorio.');
  });
});
