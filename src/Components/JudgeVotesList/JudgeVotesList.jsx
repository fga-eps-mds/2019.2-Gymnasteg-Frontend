import React from 'react';
import PropTypes from 'prop-types';

import JudgeVotesListItem from './JudgeVotesList.styles';
import { VerticalList } from '../VotingJudgesList/VotingJudgesList.styles';

function JudgeNameWithVote({ name, vote }) {
  return (
    <JudgeVotesListItem>
      {name}
      <b>{vote}</b>
    </JudgeVotesListItem>
  );
}

JudgeNameWithVote.propTypes = {
  name: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default function JudgeVotesList({ judgesData }) {
  return (
    <VerticalList>
      {judgesData.map((judgeData) => (
        <JudgeNameWithVote
          name={judgeData.name}
          vote={Object.values(judgeData.votes).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
          )}
          key={judgeData.name}
        />
      ))}
    </VerticalList>
  );
}

JudgeVotesList.propTypes = {
  judgesData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      vote: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
