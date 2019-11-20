import React from 'react';
import PropTypes from 'prop-types';

import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SexIconComponent({ className, sex }) {
  return (
    <FontAwesomeIcon
      className={className}
      icon={sex === 'M' ? faMars : faVenus}
    />
  );
}

SexIconComponent.propTypes = {
  className: PropTypes.string.isRequired,
  sex: PropTypes.oneOf(['M', 'F']).isRequired,
};
