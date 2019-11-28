import { compose, withState, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import Votacao from './Votacao';

function voteHandler({ setConfirmedVote }) {
  return (socket, stand, athleteId, executionScore, difficultyScore) => () => {
    setConfirmedVote(true);

    socket.emit('registerVote', {
      stand,
      athlete: athleteId,
      Execution: executionScore,
      Difficulty: difficultyScore,
    });
  };
}

export default compose(
  withState('confirmedVote', 'setConfirmedVote', false),
  withHandlers({ voteHandler }),
  withRouter,
)(Votacao);
