import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

export default function Countdown({ secondsRemaining }) {
  return (
    <>
      <FontAwesomeIcon icon={faStopwatch} />
      <b>
        {' '}
        {Math.floor(secondsRemaining / 60)}:
        {(secondsRemaining % 60).toString().padStart(2, '0')}
      </b>
    </>
  );
}

Countdown.propTypes = {
  secondsRemaining: PropTypes.number.isRequired,
};
