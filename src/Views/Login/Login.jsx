import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import './Login.css';

// prettier-ignore
// eslint-disable-next-line
const emailValidationRegex = "[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?";

function EmailField() {
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <Field
        name="email"
        render={({ field, form }) => (
          <div className="input-icon-container">
            <FontAwesomeIcon className="input-icon" icon={faEnvelope} />
            <input
              {...field}
              type="email"
              id="email"
              placeholder="Insira seu e-mail"
              pattern={emailValidationRegex}
              onChange={(e) => {
                form.setFieldValue('email', e.target.value);
                form.setStatus({ hasAuthenticationError: false });
              }}
              required
            />
          </div>
        )}
      />
    </>
  );
}

function PasswordField() {
  /* eslint jsx-a11y/label-has-associated-control:
  ["error", { assert: "either" } ] */
  return (
    <>
      <label htmlFor="password">Senha</label>
      <Field
        name="password"
        render={({ field, form }) => (
          <div className="input-icon-container">
            <FontAwesomeIcon className="input-icon" icon={faKey} />
            <input
              {...field}
              type="password"
              id="password"
              placeholder="Insira sua senha"
              onChange={(e) => {
                form.setFieldValue('password', e.target.value);
                form.setStatus({ hasAuthenticationError: false });
              }}
              required
            />
          </div>
        )}
      />
    </>
  );
}

export default function Login(props) {
  const { handleSubmit, isSubmitting, status } = props;

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <EmailField />
        <PasswordField />
        {status.hasAuthenticationError && (
          // ErrorMessage not used because the error is for
          // the whole form, and not a field
          <span className="authentication-error">
            O e-mail e/ou a senha estão incorretos.
          </span>
        )}

        <div className="login-bottom-container">
          <a href="/forgotPassword">Esqueceu sua senha?</a>
          <button type="submit" disable={isSubmitting.toString()}>
            Login
          </button>
        </div>
      </form>
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
