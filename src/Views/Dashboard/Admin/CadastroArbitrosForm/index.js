import { withFormik } from 'formik';
import CadastroArbitrosForm from './CadastroArbitrosForm';

function mapPropsToValues() {
  return { name: '', email: '', JudgeType: 'Execution and Difficulty' };
}

export default withFormik({ mapPropsToValues })(CadastroArbitrosForm);
