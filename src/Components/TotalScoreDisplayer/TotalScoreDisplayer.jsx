import React from 'react';
import PropTypes from 'prop-types';

import {
  ScoreHeader,
  ScoreProgress,
  Score,
} from './TotalScoreDisplayer.styles';

export default function TotalScoreDisplayer({
  executionScore,
  difficultyScore,
}) {
  const executionPercent = (executionScore / 16) * 100;
  const difficultyPercent = executionPercent + (difficultyScore / 16) * 100;
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
};
