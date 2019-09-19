import { withFormik } from 'formik';
import Login from './Login';

export function mapPropsToValues() {
  return { email: '', password: '' };
}

export function handleLogin(values, actions) {
  // TODO: Talk to the Authentication API

  actions.setFieldValue('password', '');
  actions.setStatus({ hasAuthenticationError: true });
}

// prettier-ignore
// eslint-disable-next-line
export default withFormik({ mapPropsToValues, handleSubmit: handleLogin })(Login);
