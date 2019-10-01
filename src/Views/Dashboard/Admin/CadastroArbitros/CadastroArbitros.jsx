import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Divider } from 'antd';
import PageContent from '../../../../Components/Layout/PageContent';
import { Wrapper, OptionCard } from './CadastroArbitros.styles';

const OpcaoCadastro = ({ title, icon, route }) => (
  <OptionCard to={`/cadastro/arbitros/${route}`}>
    <Icon type={icon} />
    <Divider type="vertical" />
    {title}
  </OptionCard>
);

export default function CadastroArbitros() {
  return (
    <PageContent title="Cadastro dos Árbitros">
      <Wrapper>
        <OpcaoCadastro title="Cadastrar com .csv" icon="file" route="" />
        <OpcaoCadastro title="Cadastrar manualmente" icon="edit" route="form" />
      </Wrapper>
    </PageContent>
  );
}

CadastroArbitros.propTypes = {
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

OpcaoCadastro.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  route: PropTypes.string.isRequired,
};
