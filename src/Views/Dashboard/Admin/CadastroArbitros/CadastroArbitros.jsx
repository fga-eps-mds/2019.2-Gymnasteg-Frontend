import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Divider, Collapse } from 'antd';
import PageContent from '../../../../Components/Layout/PageContent';
import { Wrapper, OptionCard } from './CadastroArbitros.styles';

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
      <Collapse>
        {judges.map((judge) => (
          <Panel header={judge.name}>
            <b>Email: </b>
            {judge.email}
            <br />
            <b>Senha: </b>
            {judge.password}
            <br />
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
