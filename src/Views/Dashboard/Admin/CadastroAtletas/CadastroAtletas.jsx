import React, { useEffect, useState } from 'react';
import { Icon, Collapse, Button } from 'antd';
import PageContent from '../../../../Components/Layout/PageContent';
import Card from '../../../../Components/Card/index';
import './CadastroAtletas.css';

import api from '../../../../Services/api';

const { Panel } = Collapse;

export default function CadastroAtletas() {
  const [athletes, setAthletes] = useState([]);
  useEffect(() => {
    async function loadAthletes() {
      const response = await api.get('/athletes');
      setAthletes(response.data);
    }

    loadAthletes();
  }, []);
  return (
    <PageContent title="Cadastro dos Atletas">
      <Card title="Cadastrar manualmente" icon="edit" route="atletas/form" />
      <div className="atletas-cadastrados">
        <h2>Atletas cadastrados</h2>
        <Button type="danger" size="small">
          <Icon type="delete" theme="filled" />
          Excluir todos
        </Button>
      </div>
      <Collapse>
        {athletes.map((athlete) => (
          <Panel header={athlete.name}>
            <b>Email: </b>
            {athlete.email}
            <br />
            <b>Data de Nascimento: </b>
            {athlete.date_born}
            <br />
            <b>Sexo: </b>
            {athlete.gender}
            <div className="button-edit-atletas">
              <Button className="btn1" type="primary" size="small">
                <Icon type="form" />
                Editar
              </Button>
              <Button className="btn2" type="danger" size="small">
                <Icon type="delete" theme="filled" />
                Excluir atleta
              </Button>
            </div>
          </Panel>
        ))}
      </Collapse>
    </PageContent>
  );
}
