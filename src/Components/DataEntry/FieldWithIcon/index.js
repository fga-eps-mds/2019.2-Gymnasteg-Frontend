import { compose, withHandlers } from 'recompose';

import FieldWithIcon from './FieldWithIcon';

// TODO: Mover para o componente de Login
function fieldWithIconOnChange(props) {
  return (form) => (e) => {
    form.setFieldValue(props.name, e.target.value);
    form.setStatus({ hasAuthenticationError: false });
  };
}

export default compose(withHandlers({ fieldWithIconOnChange }))(FieldWithIcon);
