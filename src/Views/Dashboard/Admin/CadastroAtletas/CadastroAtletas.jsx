import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Divider } from 'antd';
import PageContent from '../../../../Components/Layout/PageContent';
import { Wrapper, OptionCard } from './CadastroAtletas.styles';

const OpcaoCadastro = ({ title, icon, route }) => (
  <OptionCard to={`/cadastro/atletas/${route}`}>
    <Icon type={icon} />
    <Divider type="vertical" />
    {title}
  </OptionCard>
);

export default function CadastroAtletas() {
  return (
    <PageContent title="Cadastro dos Atletas">
      <Wrapper>
        <OpcaoCadastro title="Cadastrar com .csv" icon="file" route="" />
        <OpcaoCadastro title="Cadastrar manualmente" icon="edit" route="form" />
      </Wrapper>
    </PageContent>
  );
}

OpcaoCadastro.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  route: PropTypes.string.isRequired,
};
