import React from 'react';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

export default function InputNumber(props) {
  const {
    label,
    field,
    form: { touched, errors, setFieldValue },
    data,
    placeholder,
    allowClear,
    mode,
  } = props;

  const { Option } = Select;

  return (
    <Form.Item
      label={label}
      validateStatus={
        touched[field.name] && errors[field.name]
          ? 'error'
          : null
      }
      help={errors[field.name]}
    >
      <Select
        style={{ width: '100%' }}
        mode={mode}
        onChange={(e) => setFieldValue(field.name, e)}
        value={field.value}
        placeholder={placeholder || 'Selecione...'}
        allowClear={allowClear}
      >
        {
          (data || []).map((selectItem) => (
            <Option
              key={`select-${field.name}`}
              value={selectItem.value}
            >
              {selectItem.label}
            </Option>
          ))
        }
      </Select>
    </Form.Item>
  );
}

InputNumber.propTypes = {
  label: PropTypes.string,
  field: PropTypes.objectOf(PropTypes.any).isRequired,
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  allowClear: PropTypes.bool,
  mode: PropTypes.string,
};

InputNumber.defaultProps = {
  label: undefined,
  placeholder: 'Selecione...',
  allowClear: undefined,
  mode: undefined,
};
