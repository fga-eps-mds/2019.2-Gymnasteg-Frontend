import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon, Collapse, Button, Popconfirm } from 'antd';
import PageContent from '../../../../Components/Layout/PageContent';
import Card from '../../../../Components/Card/index';
import './CadastroAtletas.css';

const { Panel } = Collapse;

export default function CadastroAtletas({
  fetchAthletes,
  athletes,
  submitDelete,
}) {
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
              <Link to="/cadastro/atletas/form/:idAtleta">
                <Button className="btn1" type="primary" size="small">
                  <Icon type="form" />
                  Editar
                </Button>
              </Link>
              <Popconfirm
                onConfirm={() => submitDelete(athlete.id, fetchAthletes)}
                title="Deseja confirmar a exclusão do atleta?"
                okText="Sim"
                cancelText="Não"
              >
                <Button
                  className="btn2"
                  type="danger"
                  size="small"
                >
                  <Icon type="delete" theme="filled" />
                Excluir atleta
                </Button>
              </Popconfirm>
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
  submitDelete: PropTypes.func.isRequired,
};
