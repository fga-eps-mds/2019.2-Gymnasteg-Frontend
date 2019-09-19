import React from 'react';
import PropTypes from 'prop-types';

import { Input as AntInput } from 'antd';

import { Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './FieldWithIcon.css';

export default function FieldWithIcon(props) {
  const {
    name,
    placeholder,
    type,
    labeltext,
    icon,
    id,
    pattern,
    fieldWithIconOnChange,
  } = props;

  const optionalProps = {};
  if (pattern !== '') optionalProps.pattern = pattern;
  return (
    <>
      <label htmlFor={id}>{labeltext}</label>
      <Field name={name}>
        {({ field, form }) => (
          <div className="input-icon-container">
            <FontAwesomeIcon className="input-icon" icon={icon} />
            {type === 'password' ? (
              <AntInput.Password
                {...props}
                {...field}
                {...optionalProps}
                pattern={undefined}
                className="field-with-icon-input"
                id={id}
                placeholder={placeholder}
                onChange={fieldWithIconOnChange(form)}
                required
              />
            ) : (
              <AntInput
                {...props}
                {...field}
                {...optionalProps}
                className="field-with-icon-input"
                id={id}
                placeholder={placeholder}
                onChange={fieldWithIconOnChange(form)}
                required
              />
            )}
          </div>
        )}
      </Field>
    </>
  );
}

FieldWithIcon.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labeltext: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  // eslint-disable-next-line
  icon: PropTypes.any.isRequired,
  fieldWithIconOnChange: PropTypes.func.isRequired,
};

FieldWithIcon.defaultProps = {
  pattern: '',
};
