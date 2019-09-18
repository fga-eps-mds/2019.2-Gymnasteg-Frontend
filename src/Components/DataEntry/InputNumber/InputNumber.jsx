import React from 'react';
import PropTypes from 'prop-types';
import { InputNumber as Input, Form } from 'antd';

export default function InputNumber(props) {
  const {
    label,
    field,
    form: { touched, errors, setFieldValue },
  } = props;

  return (
    <Form.Item
      label={label}
      validateStatus={
        touched[field.name] && errors[field.name]
          ? 'error'
          : null
      }
      help={errors[field.name]}
      style={{ width: '100%' }}
    >
      <Input
        {...props}
        {...field}
        style={{ width: '100%' }}
        min={1}
        onChange={(e) => setFieldValue(field.name, e)}
      />
    </Form.Item>
  );
}

InputNumber.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  field: PropTypes.objectOf(PropTypes.any).isRequired,
  form: PropTypes.objectOf(PropTypes.any).isRequired,
};

InputNumber.defaultProps = {
  label: undefined,
  type: undefined,
};
