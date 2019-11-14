import { mapPropsToValues } from '.';

describe('Login', () => {
  it('mapPropsToValues', () => {
    expect(mapPropsToValues()).toEqual({ email: '', password: '' });
  });
});
