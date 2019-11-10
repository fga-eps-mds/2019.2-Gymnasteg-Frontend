import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Divider, Collapse, Button, Radio } from 'antd';
import PageContent from '../../../../Components/Layout/PageContent';
import { Wrapper, OptionCard } from './CadastroArbitros.styles';
import './CadastroArbitros.css';

import api from '../../../../Services/api';

const { Panel } = Collapse;

const OpcaoCadastro = ({ title, icon, route }) => (
  <OptionCard to={`/cadastro/arbitros/${route}`}>
    <Icon type={icon} />
    <Divider type="vertical" />
    {title}
  </OptionCard>
);

export default function CadastroArbitros() {
  const [judges, setJudges] = useState([]);
  useEffect(() => {
    async function loadJudges() {
      const response = await api.get('/judges');
      setJudges(response.data);
    }

    loadJudges();
  }, []);
  return (
    <PageContent title="Cadastro dos Árbitros">
      <Wrapper>
        <OpcaoCadastro title="Cadastrar com .csv" icon="file" route="" />
        <OpcaoCadastro title="Cadastrar manualmente" icon="edit" route="form" />
      </Wrapper>
      <div className="arbitros-cadastrados">
        <h2>Árbitros cadastrados</h2>
        <Button type="danger" size="small">
          <Icon type="delete" theme="filled" />
          Excluir todos
        </Button>
      </div>
      <Collapse>
        {judges.map((judge) => (
          <Panel header={judge.name}>
            <b>Email: </b>
            {judge.email}
            <br />
            <b>Senha: </b>
            {judge.password}
            <br />
            <div className="tipo-arbitro">
              <Radio.Group
                disabled
                defaultValue={judge.judge_type}
                size="small"
              >
                <Radio.Button value="Execution and Difficulty">
                  Execução e Dificuldade
                </Radio.Button>
                <Radio.Button value="Execution">Execução</Radio.Button>
                <Radio.Button value="Difficulty">Dificuldade</Radio.Button>
              </Radio.Group>
            </div>
            <div className="button-edit">
              <Button className="btn1" type="primary" size="small">
                <Icon type="form" />
                Editar
              </Button>
              <Button className="btn2" type="danger" size="small">
                <Icon type="delete" theme="filled" />
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
