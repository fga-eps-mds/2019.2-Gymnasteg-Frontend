import React from 'react';
import { DatePicker as AntDatePicker, Form } from 'antd';
import PropTypes from 'prop-types';

export default function DatePicker(props) {
  const {
    label,
    field,
    form: { touched, errors, setFieldValue },
  } = props;

  return (
    <Form.Item
      label={label}
      validateStatus={touched && errors[field.name] ? 'error' : null}
      help={errors[field.name]}
    >
      <AntDatePicker
        onChange={(e) => setFieldValue(field.name, e)}
        format="DD/MM/YYYY"
        style={{ width: '100%' }}
      />
    </Form.Item>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string,
  field: PropTypes.objectOf(PropTypes.any).isRequired,
  form: PropTypes.objectOf(PropTypes.any).isRequired,
};

DatePicker.defaultProps = {
  label: undefined,
};
