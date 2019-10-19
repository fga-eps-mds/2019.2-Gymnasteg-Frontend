import React from 'react';

import { Collapse, List, Button, Icon, Tabs } from 'antd';
import { faVoteYea, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageContent from '../../../../Components/Layout/PageContent';
import closestDateToToday from './closestDateToToday';

import './Bancas.css';

const { Panel } = Collapse;

export default function Bancas() {
  const dates = ['03/10/2019', '04/10/2019', '05/10/2019'];

  return (
    <PageContent title="Bancas" shouldHideDivider>
      <Tabs
        defaultActiveKey={closestDateToToday(dates)}
        className="stands-page__tab"
      >
        {dates.map((date) => (
          <Tabs.TabPane
            tab={date
              .split('/')
              .slice(0, 2)
              .join('/')}
            key={date}
          >
            <div className="stands-page__tab-content">
              <h2 className="stands-page__title">Bancas a participar</h2>
              <Collapse defaultActiveKey="Banca 001">
                <Panel header="Banca 001 | 12h-14h | Argolas" key="Banca 001">
                  <div className="stands-panel">
                    <b>Sexo:</b> Feminino
                    <br />
                    <b>Modalidade:</b> Argolas
                    <br />
                    <b>Período:</b> Dia <b>{date}</b> de <b>12h-14h</b>
                    <br />
                    <b>3 árbitros</b> e <b>3 atletas</b>
                    <br />
                    <List
                      size="small"
                      bordered
                      dataSource={[
                        {
                          name: 'Talita de Alcântara',
                          disabled: false,
                          secondsRemaining: 75,
                        },
                        { name: 'Pâmela Almeida', disabled: true },
                        { name: 'Jéssica Pom', disabled: true },
                      ]}
                      renderItem={(item) => (
                        <List.Item>
                          <div>
                            <span>{item.name}</span>
                            <div>
                              {// eslint-disable-next-line
                              !item.disabled &&
                                !Number.isNaN(item.timeRemaining) && (
                                  <div className="countdown">
                                    <FontAwesomeIcon
                                      className="countdown__icon"
                                      icon={faStopwatch}
                                    />
                                    <b>
                                      {Math.floor(item.secondsRemaining / 60)}:
                                      {item.secondsRemaining % 60}
                                    </b>
                                  </div>
                                ) // prettier-ignore
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
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </PageContent>
  );
}
