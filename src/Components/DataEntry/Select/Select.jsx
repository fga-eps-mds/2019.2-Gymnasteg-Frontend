import React from 'react';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

export default function InputNumber(props) {
  const {
    label,
    field,
    form: { touched, errors },
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
      <Select
        style={{ width: '100%' }}
      />
    </Form.Item>
  );
}

InputNumber.propTypes = {
  label: PropTypes.string,
  field: PropTypes.objectOf(PropTypes.any).isRequired,
  form: PropTypes.objectOf(PropTypes.any).isRequired,
};

InputNumber.defaultProps = {
  label: undefined,
};
