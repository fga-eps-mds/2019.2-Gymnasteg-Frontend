import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon, Collapse, Button, message } from 'antd';
import PageContent from '../../../../Components/Layout/PageContent';
import Card from '../../../../Components/Card/index';
import './CadastroAtletas.css';

import api from '../../../../Services/api';

const { Panel } = Collapse;

export default function CadastroAtletas({
  fetchAthletes,
  athletes,
}) {
  async function handleDelete(idAthlete) {
    try {
      await api.delete(`/athletes/${idAthlete}`);
      fetchAthletes();
    } catch (error) {
      message.error('Falha na exclusão do atleta!');
    }
  }

  useEffect(() => {
    fetchAthletes();
    // eslint-disable-next-line
  }, []);

  return (
    <PageContent title="Cadastro dos Atletas">
      <Card title="Cadastrar manualmente" icon="edit" route="atletas/form" />
      <div className="atletas-cadastrados">
        <h2>Atletas cadastrados</h2>
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
              <Button
                className="btn2"
                type="danger"
                size="small"
                onClick={() => handleDelete(athlete.id)}
              >
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

CadastroAtletas.propTypes = {
  fetchAthletes: PropTypes.func.isRequired,
  athletes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
