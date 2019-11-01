import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Collapse,
  List,
  Button,
  Icon,
  Tabs,
  notification,
  message,
} from 'antd';
import { faVoteYea, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import io from 'socket.io-client';

import api from '../../../../Services/api';
import PageContent from '../../../../Components/Layout/PageContent';
import closestDateToToday from './closestDateToToday';

import './Bancas.css';

const { Panel } = Collapse;

let socket;

let hasSetupListeners = false;

function setupListeners(judgeData, setJudge, setCancelledVote) {
  hasSetupListeners = true;

  let votedAthleteIndex = -1;
  function updateVotingForAthlete(standId, athleteId, timeRemaining) {
    if (typeof judgeData.stands === 'undefined') {
      return;
    }

    const judgeCopy = { ...judgeData };
    const standIndex = judgeCopy.stands.findIndex((el) => el.id === standId);

    judgeCopy.stands[standIndex].athletes.forEach((athlete, athleteIndex) => {
      if (athlete.name === athleteId) {
        judgeCopy.stands[standIndex].athletes[athleteIndex].disabled = false;
        judgeCopy.stands[standIndex].athletes[
          athleteIndex
        ].timeRemaining = timeRemaining;
        votedAthleteIndex = athleteIndex;
      } else {
        judgeCopy.stands[standIndex].athletes[athleteIndex].disabled = true;
      }
    });

    if (
      judgeCopy.stands[standIndex].athletes[votedAthleteIndex].timeRemaining
      <= 0
    ) {
      judgeCopy.stands[standIndex].athletes[
        votedAthleteIndex
      ].timeRemaining = undefined;
    }

    setJudge(judgeCopy);
  }
  socket.on('voteTimer', (voteSocket) => {
    updateVotingForAthlete(
      voteSocket.stand,
      voteSocket.athlete,
      voteSocket.timeRemaining,
    );
  });

  socket.on('voteCancel', () => {
    setCancelledVote(true);
  });

  socket.on('voteEnd', () => {});
}

function handleConnectionChange(event) {
  if (event.type === 'offline') {
    notification.error({
      message: 'Sem conexão com a internet.',
      key: 'no-internet',
    });
  }
  if (event.type === 'online') {
    notification.close('no-internet');
    message.success('A conexão com a internet foi reestabelecida.');
  }
}
window.addEventListener('online', handleConnectionChange);
window.addEventListener('offline', handleConnectionChange);

function AthletePanel({ stand, date }) {
  return (
    <div className="stands-panel">
      <b>Sexo:</b> {stand.sex_modality === 'M' ? 'Masculino' : 'Feminino'}
      <br />
      <b>Modalidade:</b> {(stand.modality || { type: 'null' }).type || 'null'}
      <br />
      <b>Período:</b> Dia <b>{moment(date).format('DD/MM/YYYY')}</b> de{' '}
      <b>{stand.horary}</b>
      <br />
      <b>{stand.qtd_judge} árbitros</b> e<b> {stand.athletes.length} atletas</b>
      <br />
      <List
        size="small"
        bordered
        dataSource={stand.athletes}
        renderItem={(item) => (
          <List.Item key={item.name}>
            <div>
              <span>{item.name}</span>
              <div>
                {!item.disabled
                  && !Number.isNaN(item.timeRemaining)
                  && typeof item.timeRemaining !== 'undefined' && (
                  <div className="countdown">
                    <FontAwesomeIcon
                      className="countdown__icon"
                      icon={faStopwatch}
                    />
                    <b>
                      {Math.floor(item.timeRemaining / 60)}:
                      {(item.timeRemaining % 60).toString().padStart(2, '0')}
                    </b>
                  </div>
                )}
                <Button
                  type="primary"
                  size="small"
                  disabled={item.disabled}
                  onClick={() => {
                    socket.emit('voteStart', {
                      stand: stand.id,
                      athlete: item.name,
                    });
                  }}
                >
                  <div>
                    <Icon
                      component={() => (
                        <FontAwesomeIcon
                          className={`button__icon ${
                            item.disabled ? 'button__icon--disabled' : ''
                          }`}
                          icon={faVoteYea}
                        />
                      )}
                    />
                    <span>Votar</span>
                  </div>
                </Button>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}

AthletePanel.propTypes = {
  stand: PropTypes.shape({
    id: PropTypes.number.isRequired,
    num_stand: PropTypes.number.isRequired,
    horary: PropTypes.string.isRequired,
    modality: PropTypes.shape({
      type: PropTypes.string,
    }),
    qtd_judge: PropTypes.number.isRequired,
    sex_modality: PropTypes.string.isRequired,
    athletes: PropTypes.array.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
};

export default function Bancas() {
  const [judge, setJudge] = useState([]);
  const [cancelledVote, setCancelledVote] = useState(false);

  async function loadJudge() {
    const response = await api.get('/judgeData/');
    setJudge(response.data);
    if (!hasSetupListeners) {
      setupListeners(response.data, setJudge, setCancelledVote);
    }
  }

  useEffect(() => {
    socket = io('http://localhost:3333', {
      query: { token: localStorage.getItem('jwt-token').split(' ')[1] },
    });
    loadJudge();
  }, []);

  useEffect(() => {
    if (cancelledVote === true) {
      loadJudge();
      setCancelledVote(false);
    }
  }, [cancelledVote]);

  const [standsByDate, setStandsByDate] = useState({});

  useEffect(() => {
    const newStandsByDate = {};
    (judge.stands || []).forEach((stand) => {
      if (!(stand.date_event in newStandsByDate)) {
        newStandsByDate[stand.date_event] = [];
      }
      newStandsByDate[stand.date_event].push(stand);
    });
    setStandsByDate(newStandsByDate);
  }, [judge]);

  return (
    <PageContent title="Bancas" shouldHideDivider>
      <Tabs
        defaultActiveKey={closestDateToToday(Object.keys(standsByDate))}
        className="stands-page__tab"
      >
        {Object.keys(standsByDate).map((date) => (
          <Tabs.TabPane tab={moment(date).format('DD/MM')} key={date}>
            <div className="stands-page__tab-content">
              <h2 className="stands-page__title">Bancas a participar</h2>
              <Collapse
                defaultActiveKey={`Banca ${standsByDate[date][0].num_stand}`}
              >
                {standsByDate[date].map((stand) => (
                  <Panel
                    header={`Banca ${stand.num_stand} |
                    ${moment({
                    hour: stand.horary.split(':')[0],
                    minute: stand.horary.split(':')[1],
                  }).format('HH:mm')} | ${(stand.modality || { type: 'null' })
                    .type || 'null'}`}
                    key={`Banca ${stand.num_stand}`}
                  >
                    <AthletePanel stand={stand} date={date} />
                  </Panel>
                ))}
              </Collapse>
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </PageContent>
  );
}