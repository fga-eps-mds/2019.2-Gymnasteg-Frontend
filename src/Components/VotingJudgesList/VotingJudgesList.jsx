import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { VerticalList, VotingJudgeListItem } from './VotingJudgesList.styles';
import SocketContext from '../../socket-context';

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

export default function VotingJudgesList() {
  const socket = useContext(SocketContext);
  const [judgesWhoNeedToVote, setJudgesWhoNeedToVote] = useState([]);

  useEffect(() => {
    socket.emit('getJudgesWhoNeedToVote', (judgeList) =>
      setJudgesWhoNeedToVote(judgeList),
    );

    socket.on('newJudgeVote', (data) => {
      setJudgesWhoNeedToVote(data.judgesWhoNeedToVote);
    });
  }, [socket]);
  return (
    <>
      <h3>Árbitros votando</h3>
      <VerticalList>
        {judgesWhoNeedToVote.map((judgeName) => (
          <JudgeNameWithClock name={judgeName} key={judgeName} />
        ))}
      </VerticalList>
    </>
  );
}
