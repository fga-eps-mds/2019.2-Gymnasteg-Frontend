import { withFormik } from 'formik';
import * as Yup from 'yup';
import CadastroBancas from './CadastroBancas';

export function validationSchema() {
  return Yup.object().shape({
    qtdAtletas: Yup.string()
      .nullable()
      .required('Campo obrigatório.'),
    sexo: Yup.string()
      .required('Campo obrigatório.'),
    nomeBanca: Yup.string()
      .required('Campo obrigatório.'),
    qtdJuizes: Yup.string()
      .nullable()
      .required('Campo obrigatório.'),
    modalidade: Yup.string()
      .nullable()
      .required('Campo obrigatório.'),
  });
}

export function mapPropsToValues() {
  return ({
    qtdAtletas: 1,
    nomeBanca: '',
    qtdJuizes: 1,
    modalidade: '',
  });
}

export function handleSubmit(values) {
  // TODO: implementar request com a API.

  console.log(values);
}

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
})(CadastroBancas);
