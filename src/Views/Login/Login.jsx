import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import Cookies from 'js-cookie';

import LogoImg from '../../Assets/Img/logo.png';
import FieldWithIcon from '../../Components/DataEntry/FieldWithIcon';
import api from '../../Services/api';

import './Login.css';

// prettier-ignore
// eslint-disable-next-line
const emailValidationRegex = "[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?";

function EmailField() {
  return (
    <FieldWithIcon
      name="email"
      placeholder="Insira seu e-mail"
      type="email"
      id="email"
      icon={faEnvelope}
      pattern={emailValidationRegex}
      labeltext="E-mail"
    />
  );
}

function PasswordField() {
  /* eslint jsx-a11y/label-has-associated-control:
  ["error", { assert: "either" } ] */
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

/* export function handleLogin({ email, password }, actions) {
  return new Promise((resolve, reject) => {

      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        actions.
        reject(err);
      });
  });
} */

export default function Login(props) {
  const {
    isSubmitting,
    status,
    history,
    values,
    setFieldValue,
    setStatus,
  } = props;

  return (
    <div className="login-container">
      <div>
        <img src={LogoImg} alt="Gymnasteg Logo" />
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const { email, password } = values;
            try {
              const response = await api.post('/sessions', { email, password });

              Cookies.set('jwt-token', response.data.token, {
                expires: 7,
              });

              history.push('/cadastro/bancas');
            } catch (err) {
              setFieldValue('password', '');
              setStatus({ hasAuthenticationError: true });
              console.log(err);
            }
          }}
        >
          <div>
            <EmailField />
          </div>
          <div>
            <PasswordField />
            {status.hasAuthenticationError && (
              // ErrorMessage not used because the error is for
              // the whole form, and not a field
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
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  status: PropTypes.shape({
    hasAuthenticationError: PropTypes.bool,
  }),
};

Login.defaultProps = {
  status: { hasAuthenticationError: false },
};
