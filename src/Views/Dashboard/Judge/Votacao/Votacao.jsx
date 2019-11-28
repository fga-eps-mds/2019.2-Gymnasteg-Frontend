/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as Yup from 'yup';

import { message } from 'antd';

import { Form, Field, Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';
import {
  CategoryHeader,
  CenteredHeader,
  InsetContainer,
  WideInputNumber,
  VoteButton,
} from './Votacao.styles';
import NameWithSex from '../../../../Components/NameWithSex';
import RemainingTimeBanner from '../../../../Components/RemainingTimeBanner';
import TotalScoreDisplayer from '../../../../Components/TotalScoreDisplayer';
import VotingJudgesList from '../../../../Components/VotingJudgesList';
import JudgeVotesList from '../../../../Components/JudgeVotesList';
import SocketContext from '../../../../socket-context';

function InputScore({ id, name, label, max, validate, disabled }) {
  return (
    <>
      <label htmlFor={id}>
        <b>{label}</b>
      </label>
      <br />
      <Field name={name} validate={validate}>
        {({ field, form }) => (
          <WideInputNumber
            required
            disabled={disabled}
            {...field}
            id={id}
            defaultValue={0}
            placeholder="0"
            min={0}
            max={max}
            decimalSeparator=","
            onChange={(e) => {
              if (validate(e)) {
                form.setFieldValue(name, e);
              }
            }}
          />
        )}
      </Field>
    </>
  );
}

InputScore.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  validate: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const ExecutionVoteSchema = Yup.number()
  .min(0, 'A nota de Execução deve ser maior ou igual que 0.')
  .max(10, 'A nota de Execução deve ser menor ou igual a 10.')
  .required('Dê uma nota para a execução!');
const DifficultyVoteSchema = Yup.number()
  .min(0, 'A nota de Dificuldade deve ser maior ou igual que 0.')
  .max(6, 'A nota de Dificuldade deve ser menor ou igual a 6.')
  .required('Dê uma nota para a dificuldade!');

function validateExecutionVote(value) {
  return ExecutionVoteSchema.isValidSync(value);
}

function validateDifficultyVote(value) {
  return DifficultyVoteSchema.isValidSync(value);
}

export default function Votacao({ confirmedVote, voteHandler, history }) {
  const socket = useContext(SocketContext);
  const [stand, setStand] = useState('');
  const [athleteId, setAthleteId] = useState(-1);
  const [athleteName, setAthleteName] = useState('');
  const [athleteSex, setAthleteSex] = useState('F');
  const [categoryName, setCategoryName] = useState('');
  const [categoryUrl, setCategoryUrl] = useState('');
  const [voteType, setVoteType] = useState('');

  const [votingEnded, setVotingEnded] = useState(false);
  const [judgesData, setJudgesData] = useState([]);

  function calculateVotesAverage() {
    const executionVotes = judgesData.filter(
      (judgeData) => typeof judgeData.votes.Execution !== 'undefined',
    );
    const difficultyVotes = judgesData.filter(
      (judgeData) => typeof judgeData.votes.Difficulty !== 'undefined',
    );

    let executionVotesSum = 0;
    let difficultyVotesSum = 0;
    executionVotes.forEach((judgeData) => {
      executionVotesSum += judgeData.votes.Execution;
    });
    difficultyVotes.forEach((judgeData) => {
      difficultyVotesSum += judgeData.votes.Difficulty;
    });

    return {
      Execution: executionVotesSum / executionVotes.length,
      Difficulty: difficultyVotesSum / difficultyVotes.length,
    };
  }

  const VoteSchema = Yup.object().shape({
    executionScore: voteType.includes('Execution') && ExecutionVoteSchema,
    difficultyScore: voteType.includes('Difficulty') && DifficultyVoteSchema,
  });

  useEffect(() => {
    socket.on('voteCancel', () => {
      message.warning('Votação cancelada: Tempo Esgotado!', 2);
      history.push('/judge/dashboard');
    });

    socket.on('voteEnd', (data) => {
      setJudgesData(data.judgesData);
      setVotingEnded(true);
      message.success('Votação finalizada!', 2);
    });
  }, [socket]);

  useEffect(() => {
    const loadingMessage = message.loading('Carregando...', 60);
    socket.emit('getVoteData', (data) => {
      setStand(data.stand);
      setAthleteId(data.athlete.id);
      setAthleteName(data.athlete.name);
      setAthleteSex(data.athlete.sex);
      setCategoryName(data.modality);
      setCategoryUrl(data.modality_url);
      setVoteType(data.voteType);
      loadingMessage();
    });
  }, [socket]);

  return (
    <>
      <CategoryHeader category={categoryName} categoryURL={categoryUrl} />
      <CenteredHeader>
        <NameWithSex name={athleteName} sex={athleteSex} />
      </CenteredHeader>
      {!votingEnded && <RemainingTimeBanner />}
      <br />
      {votingEnded && (
        <InsetContainer>
          <JudgeVotesList judgesData={judgesData} />
          <br />
          <br />
          <TotalScoreDisplayer
            voteType="Execution and Difficulty"
            executionScore={calculateVotesAverage().Execution || 0}
            difficultyScore={calculateVotesAverage().Difficulty || 0}
          />
        </InsetContainer>
      )}
      {!votingEnded && (
        <Formik validationSchema={VoteSchema}>
          {(formikProps) => (
            <>
              <InsetContainer>
                <Form>
                  {voteType.includes('Execution') && (
                    <>
                      <h3>Avaliação</h3>
                      <InputScore
                        id="executionScoreInput"
                        name="executionScore"
                        label="Nota de Execução"
                        max={10}
                        validate={validateExecutionVote}
                        disabled={confirmedVote}
                      />
                      <br />
                      <br />
                    </>
                  )}

                  {voteType.includes('Difficulty') && (
                    <>
                      <InputScore
                        id="difficultyScoreInput"
                        name="difficultyScore"
                        label="Nota de Dificuldade"
                        max={6}
                        validate={validateDifficultyVote}
                        disabled={confirmedVote}
                      />
                      <TotalScoreDisplayer
                        voteType={voteType}
                        executionScore={
                          Number(formikProps.values.executionScore) || 0
                        }
                        difficultyScore={
                          Number(formikProps.values.difficultyScore) || 0
                        }
                      />
                    </>
                  )}
                </Form>
                <br />
                <VotingJudgesList />
              </InsetContainer>
              <VoteButton
                type="primary"
                size="large"
                disabled={
                  confirmedVote || !VoteSchema.isValidSync(formikProps.values)
                }
                onClick={voteHandler(
                  socket,
                  stand,
                  athleteId,
                  formikProps.values.executionScore,
                  formikProps.values.difficultyScore,
                )}
              >
                <FontAwesomeIcon icon={faVoteYea} />
                Confirmar Voto
              </VoteButton>
            </>
          )}
        </Formik>
      )}
    </>
  );
}

Votacao.propTypes = {
  confirmedVote: PropTypes.bool.isRequired,
  voteHandler: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
