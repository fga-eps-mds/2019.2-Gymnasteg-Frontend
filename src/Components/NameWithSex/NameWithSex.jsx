import React from 'react';
import PropTypes from 'prop-types';

import SexIcon from '../SexIcon';

export default function NameWithSex({ name, sex }) {
  return (
    <>
      <b>{name} </b>
      <SexIcon sex={sex} />
    </>
  );
}

NameWithSex.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.oneOf(['M', 'F']).isRequired,
};
