import { compose, withHandlers } from 'recompose';

import FieldWithIcon from './FieldWithIcon';

function fieldWithIconOnChange(props) {
  return (form) => (e) => {
    form.setFieldValue(props.name, e.target.value);
    form.setStatus({ hasAuthenticationError: false });
  };
}

export default compose(withHandlers({ fieldWithIconOnChange }))(FieldWithIcon);
