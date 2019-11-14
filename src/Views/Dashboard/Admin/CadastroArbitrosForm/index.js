import { withFormik } from 'formik';
import CadastroArbitrosForm from './CadastroArbitrosForm';

export function mapPropsToValues() {
  return { name: '', email: '', JudgeType: 'Execution and Difficulty' };
}

export default withFormik({ mapPropsToValues })(CadastroArbitrosForm);
