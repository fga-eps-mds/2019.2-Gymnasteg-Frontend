import { withFormik } from 'formik';
import { withRouter } from 'react-router-dom';

import Login from './Login';

export function mapPropsToValues() {
  return { email: '', password: '' };
}

// prettier-ignore
// eslint-disable-next-line
export default withRouter(withFormik({ mapPropsToValues })(Login));
