import React from 'react';
import PropTypes from 'prop-types';

import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { VerticalList, VotingJudgeListItem } from './VotingJudgesList.styles';

function JudgeNameWithClock({ name }) {
  return (
    <VotingJudgeListItem>
      <FontAwesomeIcon icon={faClock} />
      {name}
    </VotingJudgeListItem>
  );
}

JudgeNameWithClock.propTypes = {
  name: PropTypes.string.isRequired,
};

export default function VotingJudgesList({ judgeNames }) {
  return (
    <>
      <h3>Árbitros votando</h3>
      <VerticalList>
        {judgeNames.map((judgeName) => (
          <JudgeNameWithClock name={judgeName} />
        ))}
      </VerticalList>
    </>
  );
}

VotingJudgesList.propTypes = {
  judgeNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
