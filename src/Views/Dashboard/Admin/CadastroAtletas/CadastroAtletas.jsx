import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Divider, Collapse, Button } from 'antd';
import PageContent from '../../../../Components/Layout/PageContent';
import { Wrapper, OptionCard } from './CadastroAtletas.styles';
import './CadastroAtletas.css';

import api from '../../../../Services/api';

const { Panel } = Collapse;

const OpcaoCadastro = ({ title, icon, route }) => (
  <OptionCard to={`/cadastro/atletas/${route}`}>
    <Icon type={icon} />
    <Divider type="vertical" />
    {title}
  </OptionCard>
);

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
      <Wrapper>
        <OpcaoCadastro title="Cadastrar com .csv" icon="file" route="" />
        <OpcaoCadastro title="Cadastrar manualmente" icon="edit" route="form" />
      </Wrapper>
      <div className="atletas-cadastrados">
        <Button type="danger" size="small">
          <Icon type="delete" />
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
              <Button type="primary" size="small">
                <Icon type="form" />
                Editar
              </Button>
              <Button type="danger" size="small">
                <Icon type="delete" />
                Excluir árbitro
              </Button>
            </div>
          </Panel>
        ))}
      </Collapse>
    </PageContent>
  );
}

OpcaoCadastro.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  route: PropTypes.string.isRequired,
};
