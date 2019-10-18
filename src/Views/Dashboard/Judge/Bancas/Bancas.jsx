import React from 'react';

import { Collapse, List, Button, Icon } from 'antd';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageContent from '../../../../Components/Layout/PageContent';

import './Bancas.css';

const { Panel } = Collapse;

export default function Bancas() {
  const shouldBeDisabled = false;

  return (
    <PageContent title="Bancas">
      <h2>Bancas a participar</h2>
      <Collapse>
        <Panel header="Banca 001 | 12h-14h | Argolas">
          <div className="stands-panel">
            <b>Sexo:</b> Feminino
            <br />
            <b>Modalidade:</b> Argolas
            <br />
            <b>Período:</b> Dia <b>03/10/2019</b> de <b>12h-14h</b>
            <br />
            <b>3 árbitros</b> e <b>3 atletas</b>
            <br />
            <List
              size="small"
              bordered
              dataSource={[
                'Talita de Alcântara',
                'Pâmela Almeida',
                'Jéssica Pom',
              ]}
              renderItem={(item) => (
                <List.Item>
                  <div>
                    <span>{item}</span>
                    <Button
                      type="primary"
                      size="small"
                      disabled={shouldBeDisabled}
                    >
                      <div>
                        <Icon
                          component={() => (
                            <FontAwesomeIcon
                              className={`button__icon ${
                                shouldBeDisabled ? 'button__icon--disabled' : ''
                              }`}
                              icon={faVoteYea}
                            />
                          )}
                        />
                        <span>Votar</span>
                      </div>
                    </Button>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </Panel>
      </Collapse>
    </PageContent>
  );
}
