import { withFormik } from 'formik';
import Login from './Login';

export function validate(values) {
  if (!values.email) {
    return 'Email obrigatorio.';
  }

  return null;
}

export default withFormik({
  validate,
})(Login);
