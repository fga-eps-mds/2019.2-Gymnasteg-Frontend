import React from 'react';
import PropTypes from 'prop-types';

import { Banner, BigText } from './RemainingTimeBanner.styles';
import Countdown from '../Countdown';

export default function RemainingTime({ secondsRemaining }) {
  return (
    <Banner>
      <b>Tempo restante para Votar</b>
      <br />
      <BigText>
        <Countdown secondsRemaining={secondsRemaining} />
      </BigText>
    </Banner>
  );
}

RemainingTime.propTypes = {
  secondsRemaining: PropTypes.number.isRequired,
};
