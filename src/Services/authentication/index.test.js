import React from 'react';
import { Redirect } from 'react-router-dom';
import { login, logout, isRootUser, isAuthenticated, switchUserRoute } from '.';

describe('Authentication', () => {
  test('login', () => {
    expect(login).toBeDefined();
  });

  test('logout', () => {
    expect(logout).toBeDefined();
  });

  test('isRootUser', () => {
    expect(isRootUser()).toBe(true);
  });

  test('isAuthenticated', () => {
    expect(isAuthenticated).toBeDefined();
  });

  test('switchUserRoute', () => {
    expect(switchUserRoute(isRootUser)).toEqual(<Redirect to="/cadastro" />);
  });
});
