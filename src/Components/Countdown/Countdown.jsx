import React, { useContext, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import SocketContext from '../../socket-context';

export default function Countdown() {
  const socket = useContext(SocketContext);
  const [secondsRemaining, setSecondsRemaining] = useState(0);

  useEffect(() => {
    socket.on('voteTimer', (voteSocket) => {
      const { timeRemaining } = voteSocket;
      setSecondsRemaining(timeRemaining);
    });
  }, [socket]);

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
