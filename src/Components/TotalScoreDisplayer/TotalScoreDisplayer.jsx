import React from 'react';
import PropTypes from 'prop-types';

import {
  ScoreHeader,
  ScoreProgress,
  Score,
} from './TotalScoreDisplayer.styles';

export default function TotalScoreDisplayer({
  executionScore = 0,
  difficultyScore = 0,
  voteType = 'Execution and Difficulty',
}) {
  // prettier-ignore
  const maximumPoints = (10 * (voteType.includes('Execution') ? 1 : 0))
    + 6 * voteType.includes('Difficulty');
  const executionPercent = (executionScore / maximumPoints) * 100;
  // prettier-ignore
  // eslint-disable-next-line max-len
  const difficultyPercent = executionPercent + (difficultyScore / maximumPoints) * 100;
  return (
    <div>
      <ScoreHeader>Nota Total</ScoreHeader>
      <ScoreProgress
        showInfo={false}
        percent={difficultyPercent}
        successPercent={executionPercent}
        strokeColor="#91D5FF"
      />
      <Score>{`${executionScore + difficultyScore}`}</Score>
    </div>
  );
}

TotalScoreDisplayer.propTypes = {
  executionScore: PropTypes.number.isRequired,
  difficultyScore: PropTypes.number.isRequired,
  voteType: PropTypes.oneOf([
    'Execution',
    'Difficulty',
    'Execution and Difficulty',
  ]).isRequired,
};
