import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import LogoImg from '../../Assets/Img/logo.png';
import FieldWithIcon from '../../Components/DataEntry/FieldWithIcon';

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

export default function Login(props) {
  const { handleSubmit, isSubmitting, status } = props;

  return (
    <div className="login-container">
      <div>
        <img src={LogoImg} alt="Gymnasteg Logo" />
        <form onSubmit={handleSubmit}>
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
  status: PropTypes.shape({
    hasAuthenticationError: PropTypes.bool,
  }),
};

Login.defaultProps = {
  status: { hasAuthenticationError: false },
};
