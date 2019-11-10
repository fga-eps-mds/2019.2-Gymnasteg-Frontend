import React from 'react';
import { Redirect } from 'react-router-dom';
// import decode from 'jwt-decode';
import history from '../history';

export function isAuthenticated() {
  const jwt = localStorage.getItem('jwt-token');

  if (jwt) {
    return true;
  }

  return false;
}

export function isRootUser() {
  return true;
  /* const jwt = localStorage.getItem('jwt-token');
  let decodedToken;

  try {
    decodedToken = decode(jwt);
  } catch (error) {
    return null;
  }

  if (decodedToken) {
    return decodedToken.coord;
  }

  return null;  */
}

export function switchUserRoute() {
  if (isRootUser()) {
    return <Redirect to="/cadastro" />;
  }

  if (isRootUser() === false) {
    return <Redirect to="/judge" />;
  }

  return null;
}

export function login(loginData, email) {
  localStorage.setItem('jwt-token', `Bearer ${loginData.token}`);
  localStorage.setItem('logged-user-name', loginData.judge.name);
  localStorage.setItem('logged-user-email', email);
  window.location.reload();
}

export function logout() {
  localStorage.removeItem('jwt-token');
  localStorage.removeItem('logged-user-name');
  localStorage.removeItem('logged-user-email');

  history.replace('/');
}
