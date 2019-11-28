import React from 'react';
import PropTypes from 'prop-types';
import { Button, message } from 'antd';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import LogoImg from '../../Assets/Img/logo.png';
import FieldWithIcon from '../../Components/DataEntry/FieldWithIcon';
import { emailValidation } from '../../Services/validation-regexes';
import api from '../../Services/api';

import './Login.css';
import {
  login,
  isAuthenticated,
  switchUserRoute,
} from '../../Services/authentication';

export function EmailField() {
  return (
    <FieldWithIcon
      name="email"
      placeholder="Insira seu e-mail"
      type="email"
      id="email"
      icon={faEnvelope}
      pattern={emailValidation}
      labeltext="E-mail"
    />
  );
}

function PasswordField() {
  return (
    <FieldWithIcon
      name="password"
      placeholder="Insira sua senha"
      type="password"
      id="password"
      icon={faKey}
      labeltext="Senha"
    />
  );
}

export async function handleLogin(
  event,
  values,
  setFieldValue,
) {
  event.preventDefault();

  const { email, password } = values;
  try {
    const response = await api.post('/sessions', { email, password });

    login(response.data, email);
  } catch (err) {
    setFieldValue('password', '');
    message.error('Email ou senha incorretos.');
  }
}

export default function Login(props) {
  const {
    isSubmitting,
    status,
    values,
    setFieldValue,
  } = props;
  const hasAuth = isAuthenticated();

  if (hasAuth) {
    return switchUserRoute();
  }

  return (
    <div className="login-container">
      <div>
        <img src={LogoImg} alt="Gymnasteg Logo" />
        <form
          onSubmit={(event) => {
            handleLogin(event, values, setFieldValue);
          }}
        >
          <div>
            <EmailField />
          </div>
          <div>
            <PasswordField />
            {status.hasAuthenticationError && (
              <span className="authentication-error">
                O e-mail e/ou a senha estão incorretos.
              </span>
            )}
          </div>

          <div className="login-bottom-container">
            <Button
              type="primary"
              htmlType="submit"
              disable={isSubmitting.toString()}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  status: PropTypes.shape({
    hasAuthenticationError: PropTypes.bool,
  }),
  setFieldValue: PropTypes.func.isRequired,
};

Login.defaultProps = {
  status: { hasAuthenticationError: false },
};
