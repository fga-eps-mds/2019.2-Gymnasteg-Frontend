import {
  login,
  logout,
  isRootUser,
  isAuthenticated,
} from '.';

describe('Authentication', () => {
  test('login', () => {
    expect(login).toBeDefined();
  });

  test('logout', () => {
    expect(logout).toBeDefined();
  });

  test('isRootUser', () => {
    expect(isRootUser).toBeDefined();
  });

  test('isAuthenticated', () => {
    expect(isAuthenticated).toBeDefined();
  });
});
