import { compose, withState, withHandlers } from 'recompose';
import Votacao from './Votacao';

function voteHandler({ setConfirmedVote }) {
  return (socket, stand, executionScore, difficultyScore) => () => {
    setConfirmedVote(true);

    socket.emit('registerVote', {
      stand,
      Execution: executionScore,
      Difficulty: difficultyScore,
    });
  };
}

export default compose(
  withState('confirmedVote', 'setConfirmedVote', false),
  withHandlers({ voteHandler }),
)(Votacao);
