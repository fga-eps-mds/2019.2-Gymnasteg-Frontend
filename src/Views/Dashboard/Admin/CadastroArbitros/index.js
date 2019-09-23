import { withFormik } from 'formik';
import CadastroArbitros from './CadastroArbitros';

function mapPropsToValues() {
  return { name: '', email: '' };
}

export default withFormik({ mapPropsToValues })(CadastroArbitros);
