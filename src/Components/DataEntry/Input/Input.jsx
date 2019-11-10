import React from 'react';
import PropTypes from 'prop-types';
import { Input as AntInput, Form } from 'antd';

export default function Input(props) {
  const {
    label,
    type,
    field,
    form,
  } = props;

  return (
    <Form.Item
      label={label}
      validateStatus={
        form.touched && form.errors[field.name]
          ? 'error'
          : null
      }
      help={form.errors[field.name]}
      style={{ width: '100%' }}
    >
      {
        type === 'password'
          ? <AntInput.Password {...props} {...field} />
          : <AntInput {...props} {...field} />
      }
    </Form.Item>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  field: PropTypes.objectOf(PropTypes.any).isRequired,
  form: PropTypes.objectOf(PropTypes.any).isRequired,
};

Input.defaultProps = {
  label: undefined,
  type: undefined,
};
