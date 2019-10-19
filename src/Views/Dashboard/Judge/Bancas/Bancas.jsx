import React, { useState, useEffect } from 'react';

import { Collapse, List, Button, Icon, Tabs } from 'antd';
import { faVoteYea, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import api from '../../../../Services/api';
import PageContent from '../../../../Components/Layout/PageContent';
import closestDateToToday from './closestDateToToday';

import './Bancas.css';

const { Panel } = Collapse;

export default function Bancas() {
  const [judge, setJudge] = useState([]);


  useEffect(() => {
    async function loadJudge() {
      const response = await api.get('/judges/2');
      setJudge(response.data);
    }

    loadJudge();
  }, []);

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
        // defaultActiveKey={closestDateToToday(dates)}
        className="stands-page__tab"
      >
        {Object.keys(standsByDate).map((date) => (
          <Tabs.TabPane
            tab={moment(date).format('DD/MM')}
            key={date}
          >
            <div className="stands-page__tab-content">
              <h2 className="stands-page__title">Bancas a participar</h2>
              {standsByDate[date].map((stand) => (
                <Collapse
                  defaultActiveKey={`Banca ${standsByDate[date][0].num_stand}`}
                >
                  <Panel
                    header={`Banca ${stand.num_stand} |
                    ${stand.horary} | ${stand.modality.type || 'null'}`}
                    key={`Banca ${stand.num_stand}`}
                  >
                    <div className="stands-panel">
                      <b>Sexo:</b>{' '}
                      {stand.sex_modality === 'M' ? 'Masculino' : 'Feminino'}
                      <br />
                      <b>Modalidade:</b> {stand.modality.type}
                      <br />
                      <b>Período:</b> Dia <b>{date}</b> de <b>{stand.horary}</b>
                      <br />
                      <b>{stand.qtd_judge} árbitros</b> e
                      <b>{stand.athletes.length} atletas</b>
                      <br />
                      <List
                        size="small"
                        bordered
                        dataSource={stand.athletes}
                        renderItem={(item) => (
                          <List.Item>
                            <div>
                              <span>{item.name}</span>
                              <div>
                                {
                                  !item.disabled
                                  && !Number.isNaN(item.timeRemaining) && (
                                    <div className="countdown">
                                      <FontAwesomeIcon
                                        className="countdown__icon"
                                        icon={faStopwatch}
                                      />
                                      <b>
                                        {Math.floor(item.secondsRemaining / 60)}
                                        :{item.secondsRemaining % 60}
                                      </b>
                                    </div>
                                  )
                                }
                                <Button
                                  type="primary"
                                  size="small"
                                  disabled={item.disabled}
                                >
                                  <div>
                                    <Icon
                                      component={() => (
                                        <FontAwesomeIcon
                                          className={`button__icon ${
                                            item.disabled
                                              ? 'button__icon--disabled'
                                              : ''
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
                  </Panel>
                </Collapse>
              ))}
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </PageContent>
  );
}
