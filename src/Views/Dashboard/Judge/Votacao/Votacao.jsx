/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as Yup from 'yup';

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
const VoteSchema = Yup.object().shape({
  executionScore: ExecutionVoteSchema,
  difficultyScore: DifficultyVoteSchema,
});

function validateExecutionVote(value) {
  return ExecutionVoteSchema.isValidSync(value);
}

function validateDifficultyVote(value) {
  return DifficultyVoteSchema.isValidSync(value);
}

export default function Votacao({ confirmedVote, voteHandler, categoryUrl }) {
  const socket = useContext(SocketContext);
  const [stand, setStand] = useState('');
  const [athleteName, setAthleteName] = useState('');
  const [athleteSex, setAthleteSex] = useState('F');
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    socket.emit('getVoteData', (data) => {
      setStand(data.stand);
      setAthleteName(data.athlete.name);
      setAthleteSex(data.athlete.sex);
      setCategoryName(data.modality);
    });
  }, [socket]);

  return (
    <>
      <CategoryHeader category={categoryName} categoryURL={categoryUrl} />
      <CenteredHeader>
        <NameWithSex name={athleteName} sex={athleteSex} />
      </CenteredHeader>
      <RemainingTimeBanner />
      <br />

      <Formik validationSchema={VoteSchema}>
        {(formikProps) => (
          <>
            <InsetContainer>
              <Form>
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
                <InputScore
                  id="difficultyScoreInput"
                  name="difficultyScore"
                  label="Nota de Dificuldade"
                  max={6}
                  validate={validateDifficultyVote}
                  disabled={confirmedVote}
                />
                <TotalScoreDisplayer
                  executionScore={
                    Number(formikProps.values.executionScore) || 0
                  }
                  difficultyScore={
                    Number(formikProps.values.difficultyScore) || 0
                  }
                />
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
    </>
  );
}

Votacao.propTypes = {
  confirmedVote: PropTypes.bool.isRequired,
  voteHandler: PropTypes.func.isRequired,
  categoryUrl: PropTypes.string,
};

Votacao.defaultProps = {
  categoryUrl:
    'http://www.olimpiadatododia.com.br/wp-content/uploads/2019/10/arthur-zanetti-argolas-mundial-de-ginastica-artistica.jpeg',
};
