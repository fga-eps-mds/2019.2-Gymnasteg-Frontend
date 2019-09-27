import { withFormik } from 'formik';
import CadastroArbitrosForm from './CadastroArbitrosForm';

function mapPropsToValues() {
  return { name: '', email: '' };
}

export default withFormik({ mapPropsToValues })(CadastroArbitrosForm);
